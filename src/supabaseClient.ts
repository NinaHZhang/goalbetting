import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mkqxpzhwjhcssspxbanb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rcXhwemh3amhjc3NzcHhiYW5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2NzYxNTEsImV4cCI6MjA2NTI1MjE1MX0.ai61eeWgWXbpIRje7FOHT8BNIkC0LvHNHTpgyCz1GPs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);