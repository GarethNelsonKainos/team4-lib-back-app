import { Router } from 'express';
import {
  getAllBorrows,
  createBorrow,
  getBorrowById,
  updateBorrow,
  deleteBorrow
} from '../controllers/borrowController';

const router = Router();

router.get('/', getAllBorrows);

router.post('/', createBorrow);

router.get('/:id', getBorrowById);

router.put('/:id', updateBorrow);

router.delete('/:id', deleteBorrow);

export default router;
