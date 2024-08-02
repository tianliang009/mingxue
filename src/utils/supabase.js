import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://lvslrgbhijxmscggmriy.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2c2xyZ2JoaWp4bXNjZ2dtcml5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5MzQ2NDYsImV4cCI6MjAzNDUxMDY0Nn0._iinMpt5fHXKFXD-O7H2J6aTDgksRAb1n9mM62mobUo"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;