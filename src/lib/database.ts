import { supabase } from './supabase';
import type { Listing, Profile, SavedListing } from './supabase';

export async function getListings() {
  const { data, error } = await supabase
    .from('listings')
    .select('*')
    .eq('status', 'active')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data as Listing[];
}

export async function getListingById(id: string) {
  const { data, error } = await supabase
    .from('listings')
    .select('*, profiles(full_name, phone_number)')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data as Listing & { profiles: Pick<Profile, 'full_name' | 'phone_number'> };
}

export async function createListing(listing: Omit<Listing, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('listings')
    .insert([listing])
    .select()
    .single();

  if (error) throw error;
  return data as Listing;
}

export async function updateListing(id: string, updates: Partial<Listing>) {
  const { data, error } = await supabase
    .from('listings')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data as Listing;
}

export async function deleteListing(id: string) {
  const { error } = await supabase
    .from('listings')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

export async function saveListing(userId: string, listingId: string) {
  const { data, error } = await supabase
    .from('saved_listings')
    .insert([{ user_id: userId, listing_id: listingId }])
    .select()
    .single();

  if (error) throw error;
  return data as SavedListing;
}

export async function unsaveListing(userId: string, listingId: string) {
  const { error } = await supabase
    .from('saved_listings')
    .delete()
    .eq('user_id', userId)
    .eq('listing_id', listingId);

  if (error) throw error;
}

export async function getSavedListings(userId: string) {
  const { data, error } = await supabase
    .from('saved_listings')
    .select('listing_id, listings(*)')
    .eq('user_id', userId);

  if (error) throw error;
  return data.map(item => item.listings) as Listing[];
}

export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data as Profile;
}

export async function updateUserProfile(userId: string, updates: Partial<Profile>) {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();

  if (error) throw error;
  return data as Profile;
} 