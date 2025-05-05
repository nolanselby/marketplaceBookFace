
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-card flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        <Input 
          type="text" 
          placeholder="Search make, model, or keyword" 
          className="pl-10" 
        />
      </div>
      <Button className="bg-marketplace-blue hover:bg-marketplace-blue/90">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
