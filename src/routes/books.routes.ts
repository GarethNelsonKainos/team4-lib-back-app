import { Router } from 'express';
import {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
  getBookCopies
} from '../controllers/books.controller';

const router = Router();

router.get('/', getAllBooks);

router.post('/', createBook);

router.get('/:id', getBookById);

router.post('/:id', updateBook);

router.delete('/:id', deleteBook);

router.get('/:id/copies', getBookCopies);

export default router;
