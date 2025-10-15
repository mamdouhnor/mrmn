require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const pool = new Pool({
  host: process.env.DB_HOST || 'db.bvvquhgqsgxrpwlqgwic.supabase.co',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'postgres',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD,
  ssl: {
    rejectUnauthorized: false
  }
});

// Test database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('[ERROR] Database connection failed:', err.message);
  } else {
    console.log('[OK] Database connected successfully at:', res.rows[0].now);
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'MRMNSALT API is running',
    timestamp: new Date().toISOString()
  });
});

// Sample endpoint - Get all data from a table (adjust table name as needed)
app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM your_table_name LIMIT 10');
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error('[ERROR] Query failed:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log('========================================');
  console.log('  MRMNSALT Backend API Server');
  console.log('========================================');
  console.log(`[OK] Server running on http://localhost:${PORT}`);
  console.log(`[OK] Health check: http://localhost:${PORT}/api/health`);
  console.log('========================================');
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('[INFO] SIGTERM received, closing server...');
  pool.end();
  process.exit(0);
});
