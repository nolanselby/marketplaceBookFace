
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ListingCard from "@/components/ListingCard";
import FilterSidebar from "@/components/FilterSidebar";
import SearchBar from "@/components/SearchBar";
import { mockListings } from "@/data/mockListings";

const Index = () => {
  const [listings] = useState(mockListings);

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
              {listings.map((listing) => (
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
