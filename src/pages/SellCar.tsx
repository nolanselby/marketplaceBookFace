
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Plus, X } from "lucide-react";

const SellCar = () => {
  const [images, setImages] = useState<string[]>([]);
  
  // Mock image upload handler
  const handleImageUpload = () => {
    // In a real implementation, we would handle file uploads here
    const mockImageUrls = [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
    ];
    
    setImages(prev => [...prev, ...mockImageUrls.slice(0, 1)]);
  };
  
  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };
  
  return (
    <div className="min-h-screen bg-marketplace-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Sell Your Car</h1>
          <p className="text-marketplace-text-grey">List your vehicle and connect with buyers</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-card overflow-hidden p-6">
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Upload Photos</h2>
            <p className="text-marketplace-text-grey mb-4">Add up to 20 photos of your vehicle (first photo will be the main image)</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {images.map((url, index) => (
                <div key={index} className="relative h-40 bg-gray-100 rounded-lg overflow-hidden">
                  <img src={url} alt={`Car image ${index + 1}`} className="w-full h-full object-cover" />
                  <button 
                    className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md"
                    onClick={() => removeImage(index)}
                  >
                    <X className="h-4 w-4 text-red-500" />
                  </button>
                </div>
              ))}
              
              <button
                onClick={handleImageUpload}
                className="h-40 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50"
              >
                <Upload className="h-8 w-8 mb-2" />
                <span>Add Photos</span>
              </button>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Vehicle Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="vin">VIN (Vehicle Identification Number)</Label>
                <Input id="vin" type="text" placeholder="Enter VIN to auto-fill details" className="mt-1" />
                <p className="text-xs text-marketplace-text-grey mt-1">
                  The VIN is a 17-character identifier unique to your vehicle
                </p>
              </div>
              
              <div className="md:pt-7">
                <Button variant="outline" className="w-full">
                  Auto-fill with VIN
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <Label htmlFor="year">Year</Label>
                <Input id="year" type="number" placeholder="2020" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="make">Make</Label>
                <Input id="make" type="text" placeholder="Toyota" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="model">Model</Label>
                <Input id="model" type="text" placeholder="Camry" className="mt-1" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <Label htmlFor="trim">Trim</Label>
                <Input id="trim" type="text" placeholder="SE" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="mileage">Mileage</Label>
                <Input id="mileage" type="number" placeholder="45000" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="bodyType">Body Type</Label>
                <select id="bodyType" className="w-full h-10 px-3 mt-1 rounded-md border border-input bg-background">
                  <option value="">Select Type</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="truck">Truck</option>
                  <option value="coupe">Coupe</option>
                  <option value="convertible">Convertible</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Listing Title</Label>
                <Input id="title" type="text" placeholder="2020 Toyota Camry SE - Low Miles" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="price">Price ($)</Label>
                <Input id="price" type="number" placeholder="18500" className="mt-1" />
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Vehicle Description</h2>
            <Textarea 
              placeholder="Describe your vehicle's condition, features, and history. Be detailed and honest to attract serious buyers."
              className="min-h-[120px]"
            />
            <Button variant="outline" className="mt-2">
              <Plus className="h-4 w-4 mr-1" />
              Generate Description
            </Button>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="location">Location (City, State)</Label>
                <Input id="location" type="text" placeholder="Portland, OR" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" className="mt-1" />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button variant="outline" className="mr-2">Save as Draft</Button>
            <Button className="bg-marketplace-green hover:bg-marketplace-green/90">
              List for Sale ($3.00)
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SellCar;
