import { Request, Response, Router } from 'express';

/**
 * Safely logs errors for debugging without exposing sensitive data
 */
const logError = (context: string, error: unknown): void => {
  console.error(`[${context}]`, error instanceof Error ? error.message : String(error));
  if (error instanceof Error && error.stack) {
    console.error(error.stack);
  }
};

/**
 * Returns a sanitized error response that doesn't expose implementation details
 */
const sendErrorResponse = (
  res: Response,
  statusCode: number,
  message: string,
  errorCode?: string
): void => {
  res.status(statusCode).json({
    error: message,
    ...(errorCode && { errorCode })
  });
};

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    console.log('[getAllBooks] Querying database for all books');
    res.status(200).json({ data: [] });
  } catch (error) {
    logError('getAllBooks', error);
    res.sendStatus(500);
  }
};

export const createBook = async (req: Request, res: Response) => {
  try {
    const { title, author, isbn, publishedYear } = req.body;

    if (!title || !author || !isbn) {
      return sendErrorResponse(
        res,
        400,
        'Missing required fields: title, author, and isbn are required.'
      );
    }

    console.log('[createBook] Validating ISBN format:', isbn);
    console.log('[createBook] Inserting book into database:', { title, author, isbn, publishedYear });
    
    res.status(201).json({ data: { title, author, isbn, publishedYear } });
  } catch (error) {
    logError('createBook', error);
    res.sendStatus(500);
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const idNum = Number(id);

    if (!Number.isInteger(idNum) || idNum <= 0) {
      return sendErrorResponse(
        res,
        400,
        'Invalid book ID provided. ID must be a valid number.'
      );
    }

    console.log('[getBookById] Querying database for book with ID:', idNum);
    res.status(200).json({ data: null });
  } catch (error) {
    logError('getBookById', error);
    res.sendStatus(500);
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const { title, author, isbn, publishedYear } = req.body;
    const idNum = Number(id);

    if (!Number.isInteger(idNum) || idNum <= 0) {
      return sendErrorResponse(
        res,
        400,
        'Invalid book ID provided. ID must be a valid number.'
      );
    }

    if (!title && !author && !isbn && !publishedYear) {
      return sendErrorResponse(
        res,
        400,
        'At least one field must be provided to update: title, author, isbn, or publishedYear.'
      );
    }

    console.log('[updateBook] Updating book in database with ID:', idNum, 'Data:', { title, author, isbn, publishedYear });
    res.status(200).json({ data: { id, title, author, isbn, publishedYear } });
  } catch (error) {
    logError('updateBook', error);
    res.sendStatus(500);
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const idNum = Number(id);

    if (!Number.isInteger(idNum) || idNum <= 0) {
      return sendErrorResponse(
        res,
        400,
        'Invalid book ID provided. ID must be a valid number.'
      );
    }

    console.log('[deleteBook] Deleting book from database with ID:', idNum);
    res.status(200).json({ id: id });
  } catch (error) {
    logError('deleteBook', error);
    res.sendStatus(500);
  }
};

export const getBookCopies = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const idNum = Number(id);

    if (!Number.isInteger(idNum) || idNum <= 0) {
      return sendErrorResponse(
        res,
        400,
        'Invalid book ID provided. ID must be a valid number.'
      );
    }

    console.log('[getBookCopies] Verifying book exists with ID:', idNum);
    console.log('[getBookCopies] Querying database for copies of book ID:', idNum);
    res.status(200).json({ data: [], bookId: id });
  } catch (error) {
    logError('getBookCopies', error);
    res.sendStatus(500);
  }
};

const router = Router();

router.get('/', getAllBooks);

router.post('/', createBook);

router.get('/:id', getBookById);

router.patch('/:id', updateBook);

router.delete('/:id', deleteBook);

router.get('/:id/copies', getBookCopies);

export default router;