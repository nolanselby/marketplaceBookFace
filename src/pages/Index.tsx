import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import ListingCard from "@/components/ListingCard";
import FilterSidebar from "@/components/FilterSidebar";
import SearchBar from "@/components/SearchBar";
import { getListings } from "@/lib/database";
import type { Listing } from "@/lib/supabase";

const Index = () => {
  const { data: listings, isLoading, error } = useQuery<Listing[]>({
    queryKey: ['listings'],
    queryFn: getListings
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-marketplace-background">
        <Navbar />
        <main className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center h-64">
            <div className="text-lg">Loading listings...</div>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-marketplace-background">
        <Navbar />
        <main className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center h-64">
            <div className="text-lg text-red-500">Error loading listings. Please try again later.</div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-marketplace-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Find Your Next Car</h1>
          <p className="text-marketplace-text-grey">Browse cars from private sellers nationwide</p>
        </div>
        
        <div className="mb-6">
          <SearchBar />
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <FilterSidebar />
          </div>
          
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {listings?.map((listing) => (
                <ListingCard key={listing.id} {...listing} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
