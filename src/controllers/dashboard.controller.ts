import { Request, Response, NextFunction } from 'express';

// GET /dashboard
export const getDashboard = (req: Request, res: Response, next: NextFunction) => {
	res.status(200).json({ message: 'Dashboard endpoint' });
};

// GET /search
export const globalSearch = (req: Request, res: Response, next: NextFunction) => {
	res.status(200).json({ message: 'Search endpoint' });
};

// POST /bulk-action
export const bulkAction = (req: Request, res: Response, next: NextFunction) => {
	res.status(200).json({ message: 'Bulk action endpoint' });
};

// GET /export
export const exportData = (req: Request, res: Response, next: NextFunction) => {
	res.status(200).json({ message: 'Export endpoint' });
};
