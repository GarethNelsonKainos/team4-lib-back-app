import { Router } from 'express';
import {
  getAllMembers,
  createMember,
  getMemberById,
  updateMember,
  deleteMember,
  getMemberBorrowingHistory,
  getMemberCurrentBorrows
} from '../controllers/memberManagementController';

const router = Router();

router.get('/', getAllMembers);

router.post('/', createMember);

router.get('/:id', getMemberById);

router.put('/:id', updateMember);

router.delete('/:id', deleteMember);

router.get('/:id/borrowing-history', getMemberBorrowingHistory);

router.get('/:id/current-borrows', getMemberCurrentBorrows);

export default router;
