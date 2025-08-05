import express from 'express';
import fetch from 'node-fetch';
import { supabaseUrl, headers } from '../utils/supabase.js';

const router = express.Router();

router.get('/api/user', async (req, res) => {
  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/user`, { headers });
    const data = await response.json();

    if (!response.ok) throw new Error(data.message || 'Failed to fetch user data');
    res.json(data);

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
