// utils/supabase.js
import dotenv from 'dotenv';
dotenv.config(); // ✅ this is needed to load .env variables

export const supabaseUrl = process.env.SUPABASE_URL;
export const supabaseKey = process.env.SUPABASE_ANON_KEY;

export const headers = {
  apikey: supabaseKey,
  Authorization: `Bearer ${supabaseKey}`,
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
