// Copie para config.js e preencha com a URL e a chave publicável do projeto Supabase.
const SUPABASE_URL = 'https://SEU-PROJETO.supabase.co';
const SUPABASE_ANON_KEY = 'SUA_CHAVE_PUBLICAVEL';
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
