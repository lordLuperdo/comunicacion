import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://bwiorcfaxwlujvdqalcc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3aW9yY2ZheHdsdWp2ZHFhbGNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2NTA2NDMsImV4cCI6MjAzMjIyNjY0M30.j8sOxA86XXcoN1Z5_FAsJvbXfgVj1vrD2MvLow5qk8U';

export const supabase = createClient(supabaseUrl, supabaseKey);