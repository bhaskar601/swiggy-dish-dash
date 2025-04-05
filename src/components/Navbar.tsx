
import React from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  MapPin, 
  ChevronDown, 
  ShoppingBag, 
  User, 
  Menu
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-swiggy-primary">SwiggyDash</span>
          </Link>

          {/* Location selector - hidden on mobile */}
          <div className="hidden md:flex items-center gap-2 text-sm ml-8">
            <MapPin className="h-4 w-4 text-swiggy-primary" />
            <span className="font-medium truncate max-w-[150px]">New York, NY</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>

          {/* Search bar - hidden on mobile when not active */}
          <div className={`${isSearchOpen ? 'flex absolute top-16 left-0 right-0 px-4 py-3 bg-white shadow-md md:shadow-none md:relative md:top-0 md:py-0' : 'hidden md:flex'} flex-1 max-w-xl mx-auto md:mx-8`}>
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search for restaurant, cuisine or a dish" 
                className="w-full pl-10 pr-4 py-2 rounded-md border-gray-300 focus:border-swiggy-primary focus:ring-swiggy-primary"
              />
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            <Link to="/cart" className="hidden md:flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              <span className="font-medium">Cart</span>
            </Link>

            <Link to="/login" className="hidden md:flex items-center gap-2">
              <User className="h-5 w-5" />
              <span className="font-medium">Login</span>
            </Link>

            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 py-2 border-t md:hidden">
            <div className="flex items-center gap-2 py-2">
              <MapPin className="h-4 w-4 text-swiggy-primary" />
              <span className="text-sm font-medium">New York, NY</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
            <Link to="/cart" className="flex items-center gap-2 py-2">
              <ShoppingBag className="h-5 w-5" />
              <span className="font-medium">Cart</span>
            </Link>
            <Link to="/login" className="flex items-center gap-2 py-2">
              <User className="h-5 w-5" />
              <span className="font-medium">Login</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
