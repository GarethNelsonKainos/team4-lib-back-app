import { Request, Response, Router } from 'express';

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    // TODO: Query database for all books
    res.status(200).json({ data: [] });
  } catch (error) {
    res.status(500).json({ errorCode: 500, requestBody: req.body });
  }
};

export const createBook = async (req: Request, res: Response) => {
  try {
    const { title, author, isbn, publishedYear } = req.body;

    if (!title || !author || !isbn) {
      return res.status(400).json({ errorCode: 400, requestBody: req.body });
    }

    // TODO: Validate ISBN format
    // TODO: Insert book into database
    
    res.status(201).json({ data: { title, author, isbn, publishedYear } });
  } catch (error) {
    res.status(500).json({ errorCode: 500, requestBody: req.body });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({ errorCode: 400, requestBody: req.body });
    }

    // TODO: Query database for book by ID
    res.status(200).json({ data: null });
  } catch (error) {
    res.status(500).json({ errorCode: 500, requestBody: req.body });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const { title, author, isbn, publishedYear } = req.body;

    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({ errorCode: 400, requestBody: req.body });
    }

    if (!title && !author && !isbn && !publishedYear) {
      return res.status(400).json({ errorCode: 400, requestBody: req.body });
    }

    // TODO: Update book in database
    res.status(200).json({ data: { id, title, author, isbn, publishedYear } });
  } catch (error) {
    res.status(500).json({ errorCode: 500, requestBody: req.body });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({ errorCode: 400, requestBody: req.body });
    }

    // TODO: Delete book from database
    res.status(200).json({ data: { id } });
  } catch (error) {
    res.status(500).json({ errorCode: 500, requestBody: req.body });
  }
};

export const getBookCopies = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({ errorCode: 400, requestBody: req.body });
    }

    // TODO: Verify book exists
    // TODO: Query database for copies of this book
    res.status(200).json({ data: [], bookId: id });
  } catch (error) {
    res.status(500).json({ errorCode: 500, requestBody: req.body });
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