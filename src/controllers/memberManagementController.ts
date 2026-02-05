import { Request, Response } from "express";

export const getAllMembers = async (req: Request, res: Response) => {
  try {
    // TODO: Query database for all members
    res.status(200).json({ success: true, message: 'Members retrieved', data: [] });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error retrieving members', error });
  }
};

export const createMember = async (req: Request, res: Response) => {
  try {
    const { member_id, member_name, phone_num, email_address, address_line1, address_line2, postal_code } = req.body;

    if (!member_id || !member_name) {
      return res.status(400).json({ success: false, message: 'member_id and member_name are required' });
    }

    // TODO: Insert member into database with membership_status = 'Active'
    res.status(201).json({ 
      success: true, 
      message: 'Member created successfully', 
      data: { member_id, member_name, phone_num, email_address, address_line1, address_line2, postal_code, membership_status: 'Active' } 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating member', error });
  }
};

export const getMemberById = async (req: Request, res: Response) => {
  try {
    const memberPkId = parseInt(req.params.id as string, 10);

    if (isNaN(memberPkId)) {
      return res.status(400).json({ success: false, message: 'Valid member ID is required' });
    }

    // TODO: Query database for member by member_pk_id
    res.status(200).json({ success: true, message: 'Member retrieved', data: { member_pk_id: memberPkId } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error retrieving member', error });
  }
};

export const updateMember = async (req: Request, res: Response) => {
  try {
    const memberPkId = parseInt(req.params.id as string, 10);
    const updates = req.body;

    if (isNaN(memberPkId)) {
      return res.status(400).json({ success: false, message: 'Valid member ID is required' });
    }

    // TODO: Update member in database
    res.status(200).json({ 
      success: true, 
      message: 'Member updated successfully', 
      data: { member_pk_id: memberPkId, ...updates } 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating member', error });
  }
};

export const deleteMember = async (req: Request, res: Response) => {
  try {
    const memberPkId = parseInt(req.params.id as string, 10);

    if (isNaN(memberPkId)) {
      return res.status(400).json({ success: false, message: 'Valid member ID is required' });
    }

    // TODO: Validate member has no active borrows
    // TODO: Delete member from database
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting member', error });
  }
};

export const getMemberBorrowingHistory = async (req: Request, res: Response) => {
  try {
    const memberPkId = parseInt(req.params.id as string, 10);

    if (isNaN(memberPkId)) {
      return res.status(400).json({ success: false, message: 'Valid member ID is required' });
    }

    // TODO: Query database for all borrows by member
    res.status(200).json({ 
      success: true, 
      message: 'Borrowing history retrieved', 
      data: [], 
      member_pk_id: memberPkId 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error retrieving borrowing history', error });
  }
};

export const getMemberCurrentBorrows = async (req: Request, res: Response) => {
  try {
    const memberPkId = parseInt(req.params.id as string, 10);

    if (isNaN(memberPkId)) {
      return res.status(400).json({ success: false, message: 'Valid member ID is required' });
    }

    // TODO: Query database for current borrows (return_date IS NULL)
    // TODO: Calculate due_date (borrow_date + 14 days) and is_overdue status
    res.status(200).json({ 
      success: true, 
      message: 'Current borrows retrieved', 
      data: [], 
      member_pk_id: memberPkId 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error retrieving current borrows', error });
  }
};
