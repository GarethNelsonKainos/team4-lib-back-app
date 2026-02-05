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
    console.log('\n/books - Manage books');
    console.log('/copies - Manage book copies');
    console.log('/members - Manage library members');
    console.log('/borrows - Manage borrowing records');
    console.log('/dashboard - View library dashboard');
    console.log('/reports - Generate library reports\n');
    console.log('🚀 Server is up and running!');
});