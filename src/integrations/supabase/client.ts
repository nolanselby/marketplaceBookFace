// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://jbiqwurzkyvniwunjhmg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpiaXF3dXJ6a3l2bml3dW5qaG1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NjgzODksImV4cCI6MjA2MjA0NDM4OX0.jV7NZ-fwj1fllRTJD1PjDWDpOjotAhGQUrpUDvdVkDo";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);