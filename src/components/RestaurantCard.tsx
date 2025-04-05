
import React from "react";
import { Link } from "react-router-dom";
import { Star, Clock, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface RestaurantCardProps {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  discount?: string;
  isPromoted?: boolean;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  id,
  name,
  image,
  cuisine,
  rating,
  deliveryTime,
  discount,
  isPromoted
}) => {
  return (
    <Link to={`/restaurant/${id}`} className="block">
      <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-48 object-cover"
          />
          
          {discount && (
            <div className="absolute bottom-0 left-0 right-0 bg-swiggy-primary text-white text-sm font-medium py-1 px-2">
              {discount}
            </div>
          )}
          
          {isPromoted && (
            <div className="absolute top-2 left-2 bg-gray-900/70 text-white text-xs font-medium py-1 px-2 rounded-sm flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              Promoted
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-bold text-lg truncate">{name}</h3>
          <div className="flex items-center mt-1 mb-2">
            <div className={cn(
              "flex items-center px-1 rounded text-white text-sm mr-2",
              rating >= 4.0 ? "bg-green-500" : rating >= 3.0 ? "bg-orange-500" : "bg-red-500"
            )}>
              <Star className="h-3 w-3 mr-1 fill-current" />
              <span>{rating}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="h-3 w-3 mr-1" />
              <span>{deliveryTime}</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm truncate">{cuisine}</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
