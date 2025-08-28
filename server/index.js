import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load env
dotenv.config();

// Setup
const app = express();
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
const corsOptions = {
  origin: ['https://wonda.name.ng', 'https://www.wonda.name.ng', 'dapper-starburst-68c518.netlify.app', 'http://localhost:3000'], 
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Routes
import viewRoutes from './routes/views.js';
import authRoutes from './routes/auth.js';
import registerRoute from './routes/register.js';
import apiRoutes from './routes/api.js';

app.use(viewRoutes);
app.use(authRoutes);
app.use(registerRoute);
app.use(apiRoutes);

// Start server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});



// Helper to get next ID in text format (e.g., '0001' -> '0002')
/*const getNextId = async (table, idField) => {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?select=${idField}&order=${idField}.desc&limit=1`, {
    headers
  });
  const data = await res.json();
  const lastId = data[0]?.[idField] || '0000';
  const nextId = String(parseInt(lastId) + 1).padStart(4, '0');
  return nextId;
};*/






/* app.post('/api/register', async (req, res) => {
  console.log("🔔 /api/register was called");

  try {
    const {
      company_name,
      industry,
      first_name,
      last_name,
      email
    } = req.body;

    console.log("Registering:", company_name, industry, first_name, last_name, email);

    const plainPassword = Math.random().toString(36).slice(-8);

    const response = await fetch(`${supabaseUrl}/rest/v1/company`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        company_name,
        industry,
        first_name,
        last_name,
        email
      })
    });

    const insertResult = await response.json();
    console.log('Insert result:', insertResult); 

    if (!response.ok) {
      throw new Error(`Supabase insert failed: ${JSON.stringify(insertResult)}`);
    }

    res.json({
      success: true,
      message: 'Registration complete',
      plainPassword
    });
  } catch (err) {
    console.error('❌ Error in /api/register:', err);
    res.status(500).json({
      success: false,
      message: 'Registration failed',
      error: err.message
    });
  }
}); */


