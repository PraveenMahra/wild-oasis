import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jjgpmomqnwtyjnbqygqk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZ3Btb21xbnd0eWpuYnF5Z3FrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwMDE4NzEsImV4cCI6MjAwOTU3Nzg3MX0.U0zPFypsPb61YpPEltEUV4g8dzyvYNP8pY8WEIH5HpU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
