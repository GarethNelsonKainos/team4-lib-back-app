import { Request, Response, Router } from "express";

export const getAllBorrows = async (req: Request, res: Response) => {
  try {
    // TODO: Query database for all borrows with filters (member, copy, date range, status)
    res.status(200).json({ data: [] });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const createBorrow = async (req: Request, res: Response) => {
  try {
    const { member_id, copy_id } = req.body;

    if (!member_id || !copy_id) {
      return res.status(400).send();
    }

    // TODO: Validate member exists and has no overdue items
    // TODO: Validate member has < 3 active borrows
    // TODO: Validate copy exists and is Available
    // TODO: Insert borrow with borrow_date = today, return_date = null
    // TODO: Update copy status to 'Borrowed'
    
    res.status(201).json({
      data: { member_id, copy_id, borrow_date: new Date().toISOString().slice(0, 10) } 
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getBorrowById = async (req: Request, res: Response) => {
  try {
    const borrowId = parseInt(req.params.id as string, 10);

    if (isNaN(borrowId)) {
      return res.status(400).send();
    }

    // TODO: Query database for borrow by borrow_id with member + copy + book details
    res.status(200).json({ data: { borrow_id: borrowId } });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateBorrow = async (req: Request, res: Response) => {
  try {
    const borrowId = parseInt(req.params.id as string, 10);
    const { condition, late_fee } = req.body;

    if (isNaN(borrowId)) {
      return res.status(400).send();
    }

    // TODO: Validate borrow exists and return_date IS NULL
    // TODO: Update return_date = today, condition, late_fee
    // TODO: Update copy status to 'Available'
    
    res.status(200).json({ 
      data: { borrow_id: borrowId, return_date: new Date().toISOString().slice(0, 10), condition, late_fee } 
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteBorrow = async (req: Request, res: Response) => {
  try {
    const borrowId = parseInt(req.params.id as string, 10);

    if (isNaN(borrowId)) {
      return res.status(400).send();
    }

    // TODO: Delete borrow from database
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error });
  }
};

const router = Router();

router.get('/', getAllBorrows);

router.post('/', createBorrow);

router.get('/:id', getBorrowById);

router.put('/:id', updateBorrow);

router.delete('/:id', deleteBorrow);

export default router;