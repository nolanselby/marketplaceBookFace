
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Heart, MapPin, Calendar, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { getListingById } from "@/data/mockListings";
import { Separator } from "@/components/ui/separator";

// Helper function to format numbers with commas
const numberWithCommas = (x: number): string => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ListingDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [listing, setListing] = useState(id ? getListingById(id) : undefined);

  if (!listing) {
    return <div>Listing not found</div>;
  }

  return (
    <div className="min-h-screen bg-marketplace-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        <div className="mb-4">
          <Link to="/" className="flex items-center text-marketplace-blue">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Listings
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-card overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3">
              <img 
                src={listing.imageUrl} 
                alt={`${listing.year} ${listing.make} ${listing.model}`}
                className="w-full h-80 md:h-[500px] object-cover"
              />
            </div>
            
            <div className="md:w-1/3 p-6">
              <div className="flex justify-between items-start">
                <h1 className="text-2xl font-bold">{listing.title}</h1>
                <button className="bg-white p-1.5 rounded-full border">
                  <Heart className="h-5 w-5 text-gray-700" />
                </button>
              </div>
              
              <div className="mt-2 text-3xl font-bold text-marketplace-green">
                ${listing.price.toLocaleString()}
              </div>
              
              <div className="flex items-center mt-2 text-marketplace-text-grey">
                <MapPin className="h-4 w-4 mr-1" />
                {listing.location}
                <span className="mx-2">•</span>
                <Calendar className="h-4 w-4 mr-1" />
                {listing.postedTime}
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-y-3">
                <div className="flex flex-col">
                  <span className="text-marketplace-text-grey text-sm">Year</span>
                  <span className="font-medium">{listing.year}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-marketplace-text-grey text-sm">Make</span>
                  <span className="font-medium">{listing.make}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-marketplace-text-grey text-sm">Model</span>
                  <span className="font-medium">{listing.model}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-marketplace-text-grey text-sm">Mileage</span>
                  <span className="font-medium">{numberWithCommas(listing.mileage)} miles</span>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <div className="flex flex-col space-y-4">
                <Button className="bg-marketplace-green hover:bg-marketplace-green/90 w-full">
                  Contact Seller
                </Button>
                <Button variant="outline" className="w-full">
                  Get Car History Report
                </Button>
              </div>
              
              <div className="mt-6 flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="h-10 w-10 rounded-full bg-gray-300 mr-3 flex-shrink-0"></div>
                <div>
                  <div className="font-medium">John Seller</div>
                  <div className="flex items-center text-sm text-marketplace-text-grey">
                    <Check className="h-4 w-4 mr-1 text-marketplace-blue" />
                    Verified Seller
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Description</h2>
            <p className="text-marketplace-text-grey mb-6">
              This {listing.year} {listing.make} {listing.model} is in excellent condition with only {numberWithCommas(listing.mileage)} miles. 
              Regular maintenance performed, clean title, and no accidents. Features include leather seats, 
              sunroof, navigation system, and premium sound. Recently had new brakes and tires installed.
              Looking for a quick sale, so price is firm but reasonable for the condition and features.
            </p>
            
            <h2 className="text-xl font-bold mb-4">Features</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2">
              {["Leather Seats", "Sunroof", "Navigation", "Bluetooth", "Backup Camera", "Keyless Entry"].map((feature) => (
                <div key={feature} className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-marketplace-green" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ListingDetail;
