import express from 'express';
import booksRouter from './routes/books.routes';
import copiesRouter from './routes/copies.routes';
import membersRouter from './routes/members.routes';
import borrowsRouter from './routes/borrows.routes';
import dashboardRouter from './routes/dashboard.routes';
import reportsRouter from './routes/reports.routes';

const app = express();
const PORT = process.env.PORT || 123;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/books', booksRouter);
app.use('/copies', copiesRouter);
app.use('/members', membersRouter);
app.use('/borrows', borrowsRouter);
app.use('/dashboard', dashboardRouter);
app.use('/reports', reportsRouter);

// Health check endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Team4 Library Backend API', status: 'running' });
});

// Start server
app.listen(PORT, () => {
  const paddedPort = PORT.toString().padStart(4, '0');
  const asciiArt = `
    ╔════════════════════════════════════════╗
    ║                                        ║
    ║   🚀 Team4 Backend Library Ready! 🚀   ║
    ║                                        ║
    ║  ┌──────────────────────────────────┐  ║
    ║  │    > Server running on :${paddedPort}     │  ║
    ║  │    > All systems operational ✓   │  ║
    ║  └──────────────────────────────────┘  ║
    ║                                        ║
    ╚════════════════════════════════════════╝
  `;

    console.log(asciiArt);
    console.log('✨ Application initialized successfully!\n');
    console.log('📚 Available endpoints:');
    console.log('  GET    /books');
    console.log('  POST   /books');
    console.log('  GET    /books/:id');
    console.log('  POST   /books/:id');
    console.log('  DELETE /books/:id');
    console.log('  GET    /books/:id/copies');
    console.log('  POST   /copies');
    console.log('  GET    /copies/:id');
    console.log('  PUT    /copies/:id');
    console.log('  GET    /copies/:id/history');
    console.log('  GET    /members');
    console.log('  POST   /members');
    console.log('  GET    /members/:id');
    console.log('  PUT    /members/:id');
    console.log('  DELETE /members/:id');
    console.log('  GET    /members/:id/borrowing-history');
    console.log('  GET    /members/:id/current-borrows');
    console.log('  GET    /borrows');
    console.log('  POST   /borrows');
    console.log('  GET    /borrows/:id');
    console.log('  PUT    /borrows/:id');
    console.log('  DELETE /borrows/:id\n');
    console.log('  GET    /dashboard');
    console.log('  GET    /dashboard/search');
    console.log('  POST   /dashboard/bulk-action');
    console.log('  GET    /dashboard/export');
    console.log('  GET    /reports/popular-books');
    console.log('  GET    /reports/genre-analytics');
    console.log('  GET    /reports/author-analytics');
    console.log('  GET    /reports/member-activity');
    console.log('  GET    /reports/collection-utilization');
    console.log('  GET    /reports/borrowing-trends');
    console.log('  GET    /reports/copy-efficiency');
    console.log('  GET    /reports/overdue-summary');
    console.log('  GET    /reports/inventory-status');
    console.log('  GET    /reports/member-compliance');
    console.log('  GET    /reports/collection-gaps\n');
    console.log('🚀 Server is up and running!');
});