import { Router } from 'express';
import {
	getPopularBooks,
	getGenreAnalytics,
	getAuthorAnalytics,
	getMemberActivity,
	getCollectionUtilization,
	getBorrowingTrends,
	getCopyEfficiency,
	getOverdueSummary,
	getInventoryStatus,
	getMemberCompliance,
	getCollectionGaps
} from '../controllers/reports.controller';

const router = Router();

router.get('/popular-books', getPopularBooks);
router.get('/genre-analytics', getGenreAnalytics);
router.get('/author-analytics', getAuthorAnalytics);
router.get('/member-activity', getMemberActivity);
router.get('/collection-utilization', getCollectionUtilization);
router.get('/borrowing-trends', getBorrowingTrends);
router.get('/copy-efficiency', getCopyEfficiency);
router.get('/overdue-summary', getOverdueSummary);
router.get('/inventory-status', getInventoryStatus);
router.get('/member-compliance', getMemberCompliance);
router.get('/collection-gaps', getCollectionGaps);

export default router;
