import express from 'express';
import booksRouter from './routes/books.routes';
import copiesRouter from './routes/copies.routes';
import membersRouter from './routes/members.routes';
import borrowsRouter from './routes/borrows.routes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/books', booksRouter);
app.use('/copies', copiesRouter);
app.use('/members', membersRouter);
app.use('/borrows', borrowsRouter);

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Team4 Library Backend API', status: 'running' });
});

// Start server
app.listen(PORT, () => {
  const asciiArt = `
    ╔════════════════════════════════════════╗
    ║                                        ║
    ║     🚀 Team4 Backend Library Ready! 🚀 ║
    ║                                        ║
    ║  ┌──────────────────────────────────┐  ║
    ║  │    > Server running on :${PORT}      │  ║
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
});