
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-swiggy-light to-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Hungry? <span className="text-swiggy-primary">We Deliver!</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Order food from the best restaurants and get it delivered to your doorstep in minutes.
            </p>
            
            <div className="bg-white p-4 rounded-md shadow-lg max-w-lg">
              <div className="mb-4">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Enter your delivery location
                </label>
                <div className="flex">
                  <Input 
                    id="location"
                    placeholder="Enter your full address" 
                    className="rounded-l-md flex-grow"
                  />
                  <Button className="rounded-l-none bg-swiggy-primary hover:bg-swiggy-dark">
                    <Search className="h-4 w-4 mr-2" /> Find Food
                  </Button>
                </div>
              </div>
              
              <div className="text-xs text-gray-500">
                <span className="font-medium">POPULAR CITIES:</span> New York, Los Angeles, Chicago, Houston, Phoenix, Philadelphia
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <img 
              src="https://source.unsplash.com/photo-1618160702438-9b02ab6515c9" 
              alt="Delicious food"
              className="rounded-xl shadow-xl max-w-full mx-auto md:max-w-lg"
            />
            <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-full shadow-md text-sm font-medium text-swiggy-primary">
              30 min delivery
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
