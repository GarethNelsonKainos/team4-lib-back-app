import express from 'express';
import booksRouter from './routes/books.routes';
import copiesRouter from './routes/copies.routes';

const app = express();
const PORT = process.env.PORT || 123;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/books', booksRouter);
app.use('/copies', copiesRouter);

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
  console.log('  GET    /copies/:id/history\n');
});