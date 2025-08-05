
import { supabaseUrl, headers } from './supabase.js';

  export const timenow = new Date();

  const year = timenow.getFullYear();
  const month = String(timenow.getMonth() + 1).padStart(2, '0');
  const day = String(timenow.getDate()).padStart(2, '0');

  const hours = String(timenow.getHours()).padStart(2, '0');
  const minutes = String(timenow.getMinutes()).padStart(2, '0');
  const seconds = String(timenow.getSeconds()).padStart(2, '0');

  //return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

