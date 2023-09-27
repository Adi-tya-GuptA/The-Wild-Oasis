import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lydtklrinqsqkdnycchu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5ZHRrbHJpbnFzcWtkbnljY2h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU3OTI3MTAsImV4cCI6MjAxMTM2ODcxMH0.3l9H7rtdTMLcKT76HBUdOtt8UOnFzxSZfcpYGjws1GA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
