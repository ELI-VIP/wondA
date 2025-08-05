
import { supabaseUrl, headers } from './supabase.js';

export const getNextId = async (table, idField) => {
  const res = await fetch(`${supabaseUrl}/rest/v1/${table}?select=${idField}&order=${idField}.desc&limit=1`, {
    headers
  });

  const data = await res.json();
  const lastId = data[0]?.[idField] || '0000';
  const nextId = String(parseInt(lastId) + 1).padStart(4, '0');

  return nextId;
};
