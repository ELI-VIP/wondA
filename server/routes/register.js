import express from 'express';
import fetch from 'node-fetch';
import { supabaseUrl, headers } from '../utils/supabase.js';
import { getNextId } from '../utils/db_util.js';
import { timenow } from '../utils/time_util.js';
import { generatePassword } from '../utils/auth_util.js';


const router = express.Router();

router.post('/api/registerr', async (req, res) => {
  const { company_name, industry, superfirst_name, superlast_name, super_email, super_phone } = req.body;

  const password = generatePassword(10);

  try {
    const company_id = await getNextId('company', 'company_id');

    // Insert into 'company'
    const companyResponse = await fetch(`${supabaseUrl}/rest/v1/company`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        company_name,
        industry,
        superfirst_name,
        superlast_name,
        super_email,
        company_id,
        created_at: timenow,
        phone_number: super_phone 
      })
    });

    const companyText = await companyResponse.text();
    let companyResult = {};

    try {
      companyResult = JSON.parse(companyText);
    } catch {}

    if (!companyResponse.ok) {
      throw new Error(companyResult.message || 'Company insert failed');
    }

    // Insert into 'user'
    const user_id = await getNextId('user', 'user_id');

    const userResponse = await fetch(`${supabaseUrl}/rest/v1/user`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        company_name,
        first_name: superfirst_name,
        last_name: superlast_name,
        email: super_email,
        user_id,
        base_role: "Super Admin",
        phone_number: super_phone,
        created_at: timenow,
        user_pass: password
      })
    });

    const userText = await userResponse.text();
    let userResult = {};

    try {
      userResult = JSON.parse(userText);
    } catch {}

    if (!userResponse.ok) {
      throw new Error(userResult.message || 'User insert failed');
    }

    // Insert into 'comp_users' — now BEFORE res.json()
    const compuserResponse = await fetch(`${supabaseUrl}/rest/v1/comp_users`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        first_name: superfirst_name,
        last_name: superlast_name,
        email: super_email,
        company_id,
        comp_userid: user_id,
        role: "Super Admin",
        phone_number: super_phone,
        join_at: timenow,
        password
      })
    });

    const compuserText = await compuserResponse.text();
    let compuserResult = {};

    try {
      compuserResult = JSON.parse(compuserText);
    } catch {}

    if (!compuserResponse.ok) {
      throw new Error(compuserResult.message || 'Comp_users insert failed');
    }

    // ✅ Only now send one final response
    return res.json({ success: true, message: 'Registration complete' });

  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

export default router;
