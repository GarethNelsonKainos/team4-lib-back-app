import { Request, Response, Router } from 'express';

enum CopyStatus {
  Available = 'available',
  CheckedOut = 'checked_out',
  Damaged = 'damaged'
}

export const createCopy = async (req: Request, res: Response) => {
  try {
    const { bookId, status = CopyStatus.Available } = req.body;

    if (!bookId || isNaN(parseInt(bookId))) {
      return res.status(400).json({ errorCode: 400, requestBody: req.body });
    }

    const validStatuses = Object.values(CopyStatus);
    if (status && !validStatuses.includes(status)) {
      return res.status(400).json({ errorCode: 400, requestBody: req.body });
    }

    // TODO: Verify book exists
    // TODO: Insert copy into database
    res.status(201).json({ data: { bookId, status } });
  } catch (error) {
    res.status(500).json({ errorCode: 500, requestBody: req.body });
  }
};

export const getAllCopies = async (req: Request, res: Response) => {
  try {
    // TODO: Query database for all copies
    res.status(200).json({ data: [] });
  } catch (error) {
    res.status(500).json({ errorCode: 500, requestBody: req.body });
  }
};

export const getCopyById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({ errorCode: 400, requestBody: req.body });
    }

    // TODO: Query database for copy by ID
    res.status(200).json({ data: null });
  } catch (error) {
    res.status(500).json({ errorCode: 500, requestBody: req.body });
  }
};

export const updateCopy = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const { status } = req.body;

    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({ errorCode: 400, requestBody: req.body });
    }

    if (!status) {
      return res.status(400).json({ errorCode: 400, requestBody: req.body });
    }

    const validStatuses = Object.values(CopyStatus);
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ errorCode: 400, requestBody: req.body });
    }

    // TODO: Get current copy status from database
    // TODO: Update copy status in database
    // TODO: Log status change to history
    res.status(200).json({ data: { id, status } });
  } catch (error) {
    res.status(500).json({ errorCode: 500, requestBody: req.body });
  }
};

export const deleteCopy = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({ errorCode: 400, requestBody: req.body });
    }

    // TODO: Delete copy from database
    // TODO: Log deletion to history
    res.status(200).json({ data: { id } });
  } catch (error) {
    res.status(500).json({ errorCode: 500, requestBody: req.body });
  }
};

export const getCopyHistory = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({ errorCode: 400, requestBody: req.body });
    }

    // TODO: Verify copy exists
    // TODO: Query database for copy history
    res.status(200).json({ data: [], copyId: id });
  } catch (error) {
    res.status(500).json({ errorCode: 500, requestBody: req.body });
  }
};

const router = Router();

router.post('/', createCopy);

router.get('/', getAllCopies);

router.get('/:id', getCopyById);

router.put('/:id', updateCopy);

router.delete('/:id', deleteCopy);

router.get('/:id/history', getCopyHistory);

export default router;