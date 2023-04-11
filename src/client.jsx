import { createClient } from '@supabase/supabase-js'

const URL = 'https://rhxtbgxdoefmvnevhzgn.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoeHRiZ3hkb2VmbXZuZXZoemduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExODcwMDcsImV4cCI6MTk5Njc2MzAwN30.Ztyl9soPlKe33anRrunzVSBWpk-bbSEcgRm8nc9g9Xk';

export const supabase = createClient(URL, API_KEY);