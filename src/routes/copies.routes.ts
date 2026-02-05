import { Router } from 'express';
import {
  createCopy,
  getCopyById,
  updateCopy,
  getCopyHistory,
  deleteCopy,
  getAllCopies
} from '../controllers/copies.controller';

const router = Router();

router.post('/', createCopy);

router.get('/', getAllCopies);

router.get('/:id', getCopyById);

router.put('/:id', updateCopy);

router.delete('/:id', deleteCopy);

router.get('/:id/history', getCopyHistory);

export default router;