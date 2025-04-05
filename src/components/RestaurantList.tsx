
import React from "react";
import RestaurantCard from "./RestaurantCard";

interface Restaurant {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  discount?: string;
  isPromoted?: boolean;
}

// Sample data for restaurants
const restaurantData: Restaurant[] = [
  {
    id: "1",
    name: "Pizza Paradise",
    image: "https://source.unsplash.com/photo-1493962853295-0fd70327578a",
    cuisine: "Italian, Pizza, Fast Food",
    rating: 4.3,
    deliveryTime: "25-35 min",
    discount: "50% OFF up to $10",
    isPromoted: true
  },
  {
    id: "2",
    name: "Burger Barn",
    image: "https://source.unsplash.com/photo-1535268647677-300dbf3d78d1",
    cuisine: "American, Burgers, Fries",
    rating: 4.1,
    deliveryTime: "20-30 min",
    discount: "Free Delivery"
  },
  {
    id: "3",
    name: "Sushi Sensation",
    image: "https://source.unsplash.com/photo-1721322800607-8c38375eef04",
    cuisine: "Japanese, Sushi, Healthy",
    rating: 4.5,
    deliveryTime: "30-45 min"
  },
  {
    id: "4",
    name: "Taco Town",
    image: "https://source.unsplash.com/photo-1618160702438-9b02ab6515c9",
    cuisine: "Mexican, Tacos, Burritos",
    rating: 3.9,
    deliveryTime: "25-40 min",
    isPromoted: true
  },
  {
    id: "5",
    name: "Curry House",
    image: "https://source.unsplash.com/photo-1493962853295-0fd70327578a",
    cuisine: "Indian, Curry, Spicy",
    rating: 4.2,
    deliveryTime: "35-45 min",
    discount: "Buy 1 Get 1 Free"
  },
  {
    id: "6",
    name: "Noodle Palace",
    image: "https://source.unsplash.com/photo-1535268647677-300dbf3d78d1",
    cuisine: "Chinese, Noodles, Soups",
    rating: 3.8,
    deliveryTime: "20-35 min"
  }
];

const RestaurantList: React.FC = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Top Restaurants Near You</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {restaurantData.map((restaurant) => (
            <RestaurantCard 
              key={restaurant.id}
              {...restaurant}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;
