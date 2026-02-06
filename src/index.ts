import express from 'express';
import dashboardRouter from './controllers/dashboard.controller';
import reportsRouter from './controllers/reports.controller';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
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
    console.log('/dashboard - View library dashboard');
    console.log('/reports - Generate library reports\n');
    console.log('🚀 Server is up and running!');
});