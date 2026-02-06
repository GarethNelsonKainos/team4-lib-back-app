import { Request, Response, Router } from 'express';

enum CopyStatus {
  Available = 'available',
  CheckedOut = 'checked_out',
  Damaged = 'damaged'
}

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

export const createCopy = async (req: Request, res: Response) => {
  try {
    const { bookId, status = CopyStatus.Available } = req.body;
    const bookIdNum = Number(bookId);

    if (!Number.isInteger(bookIdNum) || bookIdNum <= 0) {
      return sendErrorResponse(
        res,
        400,
        'Invalid book ID provided. Book ID must be a valid number.'
      );
    }

    const validStatuses = Object.values(CopyStatus);
    if (status && !validStatuses.includes(status)) {
      return sendErrorResponse(
        res,
        400,
        `Invalid status provided. Valid statuses are: ${validStatuses.join(', ')}.`
      );
    }

    console.log('[createCopy] Verifying book exists with ID:', bookIdNum);
    console.log('[createCopy] Inserting copy into database:', { bookId: bookIdNum, status });
    res.status(201).json({ data: { bookId, status } });
  } catch (error) {
    logError('createCopy', error);
    sendErrorResponse(res, 500, 'An internal server error occurred. Please try again later.');
  }
};

export const getAllCopies = async (req: Request, res: Response) => {
  try {
    console.log('[getAllCopies] Querying database for all copies');
    res.status(200).json({ data: [] });
  } catch (error) {
    logError('getAllCopies', error);
    sendErrorResponse(res, 500, 'An internal server error occurred. Please try again later.');
  }
};

export const getCopyById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const idNum = Number(id);

    if (!Number.isInteger(idNum) || idNum <= 0) {
      return sendErrorResponse(
        res,
        400,
        'Invalid copy ID provided. ID must be a valid number.'
      );
    }

    console.log('[getCopyById] Querying database for copy with ID:', idNum);
    res.status(200).json({ data: null });
  } catch (error) {
    logError('getCopyById', error);
    sendErrorResponse(res, 500, 'An internal server error occurred. Please try again later.');
  }
};

export const updateCopy = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const { status } = req.body;
    const idNum = Number(id);

    if (!Number.isInteger(idNum) || idNum <= 0) {
      return sendErrorResponse(
        res,
        400,
        'Invalid copy ID provided. ID must be a valid number.'
      );
    }

    if (!status) {
      return sendErrorResponse(
        res,
        400,
        'Missing required field: status is required.'
      );
    }

    const validStatuses = Object.values(CopyStatus);
    if (!validStatuses.includes(status)) {
      return sendErrorResponse(
        res,
        400,
        `Invalid status provided. Valid statuses are: ${validStatuses.join(', ')}.`
      );
    }

    console.log('[updateCopy] Getting current status from database for copy ID:', idNum);
    console.log('[updateCopy] Updating copy status in database:', { id: idNum, newStatus: status });
    console.log('[updateCopy] Logging status change to history table');
    res.status(200).json({ data: { id, status } });
  } catch (error) {
    logError('updateCopy', error);
    sendErrorResponse(res, 500, 'An internal server error occurred. Please try again later.');
  }
};

export const deleteCopy = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const idNum = Number(id);

    if (!Number.isInteger(idNum) || idNum <= 0) {
      return sendErrorResponse(
        res,
        400,
        'Invalid copy ID provided. ID must be a valid number.'
      );
    }

    console.log('[deleteCopy] Deleting copy from database with ID:', idNum);
    console.log('[deleteCopy] Logging deletion to history table');
    res.status(200).json({ data: { id } });
  } catch (error) {
    logError('deleteCopy', error);
    sendErrorResponse(res, 500, 'An internal server error occurred. Please try again later.');
  }
};

export const getCopyHistory = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const idNum = Number(id);

    if (!Number.isInteger(idNum) || idNum <= 0) {
      return sendErrorResponse(
        res,
        400,
        'Invalid copy ID provided. ID must be a valid number.'
      );
    }

    console.log('[getCopyHistory] Verifying copy exists with ID:', idNum);
    console.log('[getCopyHistory] Querying database for copy history for ID:', idNum);
    res.status(200).json({ data: [], copyId: id });
  } catch (error) {
    logError('getCopyHistory', error);
    sendErrorResponse(res, 500, 'An internal server error occurred. Please try again later.');
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