import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  email: string;
  full_name: string;
  phone_number?: string;
  created_at: string;
  updated_at: string;
};

export type Listing = {
  id: string;
  title: string;
  price: number;
  year: number;
  make: string;
  model: string;
  mileage: number;
  location: string;
  description: string;
  image_url: string;
  seller_id: string;
  created_at: string;
  updated_at: string;
  status: 'active' | 'sold' | 'pending';
};

export type SavedListing = {
  id: string;
  user_id: string;
  listing_id: string;
  created_at: string;
}; 