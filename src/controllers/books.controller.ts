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
    // TODO: Query database for all books
    res.status(200).json({ data: [] });
  } catch (error) {
    logError('getAllBooks', error);
    sendErrorResponse(res, 500, 'An internal server error occurred. Please try again later.');
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

    // TODO: Validate ISBN format
    // TODO: Insert book into database
    
    res.status(201).json({ data: { title, author, isbn, publishedYear } });
  } catch (error) {
    logError('createBook', error);
    sendErrorResponse(res, 500, 'An internal server error occurred. Please try again later.');
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    if (!id || isNaN(parseInt(id))) {
      return sendErrorResponse(
        res,
        400,
        'Invalid book ID provided. ID must be a valid number.'
      );
    }

    // TODO: Query database for book by ID
    res.status(200).json({ data: null });
  } catch (error) {
    logError('getBookById', error);
    sendErrorResponse(res, 500, 'An internal server error occurred. Please try again later.');
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const { title, author, isbn, publishedYear } = req.body;

    if (!id || isNaN(parseInt(id))) {
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

    // TODO: Update book in database
    res.status(200).json({ data: { id, title, author, isbn, publishedYear } });
  } catch (error) {
    logError('updateBook', error);
    sendErrorResponse(res, 500, 'An internal server error occurred. Please try again later.');
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    if (!id || isNaN(parseInt(id))) {
      return sendErrorResponse(
        res,
        400,
        'Invalid book ID provided. ID must be a valid number.'
      );
    }

    // TODO: Delete book from database
    res.status(200).json({ data: { id } });
  } catch (error) {
    logError('deleteBook', error);
    sendErrorResponse(res, 500, 'An internal server error occurred. Please try again later.');
  }
};

export const getBookCopies = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    if (!id || isNaN(parseInt(id))) {
      return sendErrorResponse(
        res,
        400,
        'Invalid book ID provided. ID must be a valid number.'
      );
    }

    // TODO: Verify book exists
    // TODO: Query database for copies of this book
    res.status(200).json({ data: [], bookId: id });
  } catch (error) {
    logError('getBookCopies', error);
    sendErrorResponse(res, 500, 'An internal server error occurred. Please try again later.');
  }
};

const router = Router();

router.get('/', getAllBooks);

router.post('/', createBook);

router.get('/:id', getBookById);

router.put('/:id', updateBook);

router.delete('/:id', deleteBook);

router.get('/:id/copies', getBookCopies);

export default router;