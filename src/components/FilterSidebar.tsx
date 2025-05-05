
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [yearRange, setYearRange] = useState([1990, 2025]);
  const [mileageRange, setMileageRange] = useState([0, 200000]);
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-card">
      <h2 className="font-semibold text-xl mb-4">Filters</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-2">Price Range</h3>
          <div className="flex justify-between mb-2">
            <span>${priceRange[0].toLocaleString()}</span>
            <span>${priceRange[1].toLocaleString()}</span>
          </div>
          <Slider 
            defaultValue={[0, 100000]} 
            max={100000} 
            step={1000}
            onValueChange={setPriceRange}
          />
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Year</h3>
          <div className="flex justify-between mb-2">
            <span>{yearRange[0]}</span>
            <span>{yearRange[1]}</span>
          </div>
          <Slider 
            defaultValue={[1990, 2025]} 
            min={1990} 
            max={2025} 
            step={1}
            onValueChange={setYearRange} 
          />
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Mileage</h3>
          <div className="flex justify-between mb-2">
            <span>{mileageRange[0].toLocaleString()} mi</span>
            <span>{mileageRange[1].toLocaleString()} mi</span>
          </div>
          <Slider 
            defaultValue={[0, 200000]} 
            max={200000} 
            step={5000}
            onValueChange={setMileageRange}
          />
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Vehicle Type</h3>
          <div className="space-y-2">
            {["Sedan", "SUV", "Truck", "Coupe", "Van", "Convertible", "Wagon", "Hatchback"].map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox id={`type-${type}`} />
                <Label htmlFor={`type-${type}`}>{type}</Label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Distance</h3>
          <div className="flex space-x-2">
            <Input type="number" placeholder="ZIP Code" className="w-1/2" />
            <select className="w-1/2 border rounded-md p-2">
              <option>5 miles</option>
              <option>10 miles</option>
              <option>25 miles</option>
              <option>50 miles</option>
              <option>100 miles</option>
              <option>250 miles</option>
              <option>500 miles</option>
              <option>Nationwide</option>
            </select>
          </div>
        </div>
        
        <div className="flex space-x-2 pt-4">
          <Button variant="outline" className="w-1/2">Reset</Button>
          <Button className="w-1/2 bg-marketplace-blue hover:bg-marketplace-blue/90">Apply</Button>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
