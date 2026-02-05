import { Request, Response } from "express";
import { Router } from 'express';

export const getAllMembers = async (req: Request, res: Response) => {
  try {
    // TODO: Query database for all members
    res.status(200).json({ data: [] });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const createMember = async (req: Request, res: Response) => {
  try {
    const { member_id, member_name, phone_num, email_address, address_line1, address_line2, postal_code } = req.body;

    if (!member_id || !member_name) {
      return res.status(400).send();
    }

    // TODO: Insert member into database with membership_status = 'Active'
    res.status(201).json({ 
      data: { member_id, member_name, phone_num, email_address, address_line1, address_line2, postal_code, membership_status: 'Active' } 
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getMemberById = async (req: Request, res: Response) => {
  try {
    const memberPkId = parseInt(req.params.id as string, 10);

    if (isNaN(memberPkId)) {
      return res.status(400).send();
    }

    // TODO: Query database for member by member_pk_id
    res.status(200).json({ data: { member_pk_id: memberPkId } });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateMember = async (req: Request, res: Response) => {
  try {
    const memberPkId = parseInt(req.params.id as string, 10);
    const updates = req.body;

    if (isNaN(memberPkId)) {
      return res.status(400).send();
    }

    // TODO: Update member in database
    res.status(200).json({ 
      data: { member_pk_id: memberPkId, ...updates } 
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteMember = async (req: Request, res: Response) => {
  try {
    const memberPkId = parseInt(req.params.id as string, 10);

    if (isNaN(memberPkId)) {
      return res.status(400).send();
    }

    // TODO: Validate member has no active borrows
    // TODO: Delete member from database
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getMemberBorrowingHistory = async (req: Request, res: Response) => {
  try {
    const memberPkId = parseInt(req.params.id as string, 10);

    if (isNaN(memberPkId)) {
      return res.status(400).send();
    }

    // TODO: Query database for all borrows by member
    res.status(200).json({ 
      data: [], 
      member_pk_id: memberPkId 
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getMemberCurrentBorrows = async (req: Request, res: Response) => {
  try {
    const memberPkId = parseInt(req.params.id as string, 10);

    if (isNaN(memberPkId)) {
      return res.status(400).send();
    }

    // TODO: Query database for current borrows (return_date IS NULL)
    // TODO: Calculate due_date (borrow_date + 14 days) and is_overdue status
    res.status(200).json({ 
      data: [], 
      member_pk_id: memberPkId 
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const router = Router();

router.get('/', getAllMembers);

router.post('/', createMember);

router.get('/:id', getMemberById);

router.put('/:id', updateMember);

router.delete('/:id', deleteMember);

router.get('/:id/borrowing-history', getMemberBorrowingHistory);

router.get('/:id/current-borrows', getMemberCurrentBorrows);

export default router;
