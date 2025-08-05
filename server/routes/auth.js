import express from 'express';
import fetch from 'node-fetch';
import { supabaseUrl, headers } from '../utils/supabase.js';


const router = express.Router();

router.post('/api/login', async (req, res) => {
  const { loginType } = req.body;

  if (loginType === 'individual') {
    const { individualUserId, individualPassword } = req.body;

    try {
      const response = await fetch(
        `${supabaseUrl}/rest/v1/user?user_id=eq.${individualUserId}&user_pass=eq.${individualPassword}`,
        { headers }
      );
      const data = await response.json();
      res.json({ success: data.length > 0 });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }

  } else if (loginType === 'company') {
    const { companyId, companyUserId, password } = req.body;

    try {
      const response = await fetch(
        `${supabaseUrl}/rest/v1/comp_users?company_id=eq.${companyId}&comp_userid=eq.${companyUserId}&password=eq.${password}`,
        { headers }
      );
      const data = await response.json();
      res.json({ success: data.length > 0 });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }

  } else {
    res.status(400).json({ success: false, message: 'Invalid login type' });
  }
});

export default router;
