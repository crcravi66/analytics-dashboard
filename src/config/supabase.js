
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://wrigjupghdrqopcmlcdf.supabase.co"

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyaWdqdXBnaGRycW9wY21sY2RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5NzYxODQsImV4cCI6MjA0NDU1MjE4NH0.xCG-BmNfiPLsafz2ngbRNQdCX3pJGq6p0ib2R0ABmDo"


const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)



export default supabase;





