import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://whldfrxjqhokrhahbjxf.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndobGRmcnhqcWhva3JoYWhianhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg4Mzk3ODUsImV4cCI6MjAwNDQxNTc4NX0.cZrJ3vz3Q0ERAdbyLOUoM_v3lH5oA7ZHgkWylcEAh8w';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
