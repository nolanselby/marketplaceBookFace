import { Search, Bell, MessageCircle, User, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-marketplace-blue text-2xl font-bold mr-4">MarketplaceBookFace</h1>
          </Link>
          <div className="hidden md:flex relative w-96">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input 
              type="text" 
              placeholder="Search cars, trucks, SUVs..." 
              className="pl-10 bg-gray-100 border-none" 
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Link to="/sell">
            <Button className="bg-marketplace-green hover:bg-marketplace-green/90">
              <Plus className="h-4 w-4 mr-1" />
              Sell
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="md:hidden bg-white px-4 py-2 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <Input 
            type="text" 
            placeholder="Search cars, trucks, SUVs..." 
            className="pl-10 bg-gray-100 border-none" 
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
