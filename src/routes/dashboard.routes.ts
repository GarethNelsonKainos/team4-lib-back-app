import { Router } from 'express';
import {
	getDashboard,
	globalSearch,
	bulkAction,
	exportData
} from '../controllers/dashboard.controller';

const router = Router();

// GET /dashboard
router.get('/', getDashboard);

// GET /dashboard/search
router.get('/search', globalSearch);

// POST /dashboard/bulk-action
router.post('/bulk-action', bulkAction);

// GET /dashboard/export
router.get('/export', exportData);

export default router;
