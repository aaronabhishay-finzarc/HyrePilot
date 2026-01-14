import { createClient } from '@supabase/supabase-js';
import { getBaseUrl } from './utils/config';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. Database functionality will not work.');
  console.warn('SUPABASE_URL:', supabaseUrl ? 'Set' : 'Missing');
  console.warn('SUPABASE_ANON_KEY:', supabaseAnonKey ? 'Set' : 'Missing');
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key',
  {
    auth: {
      redirectTo: getBaseUrl(),
      persistSession: true,
      autoRefreshToken: true,
    }
  }
); 