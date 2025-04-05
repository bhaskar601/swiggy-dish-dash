
import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

const categories: Category[] = [
  { 
    id: "pizza", 
    name: "Pizza", 
    icon: "🍕",
    color: "bg-red-100"
  },
  { 
    id: "burger", 
    name: "Burger", 
    icon: "🍔",
    color: "bg-amber-100"
  },
  { 
    id: "sushi", 
    name: "Sushi", 
    icon: "🍣",
    color: "bg-blue-100"
  },
  { 
    id: "indian", 
    name: "Indian", 
    icon: "🍛",
    color: "bg-orange-100"
  },
  { 
    id: "desserts", 
    name: "Desserts", 
    icon: "🍰",
    color: "bg-pink-100"
  },
  { 
    id: "healthy", 
    name: "Healthy", 
    icon: "🥗",
    color: "bg-green-100"
  },
  { 
    id: "mexican", 
    name: "Mexican", 
    icon: "🌮",
    color: "bg-yellow-100"
  },
  { 
    id: "breakfast", 
    name: "Breakfast", 
    icon: "🥞",
    color: "bg-purple-100"
  },
  { 
    id: "chinese", 
    name: "Chinese", 
    icon: "🍜",
    color: "bg-red-100"
  },
  { 
    id: "italian", 
    name: "Italian", 
    icon: "🍝",
    color: "bg-green-100"
  }
];

const FoodCategories = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">What are you craving today?</h2>
        
        <ScrollArea className="w-full whitespace-nowrap pb-4 custom-scrollbar">
          <div className="flex space-x-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className={cn(
                  "flex flex-col items-center p-4 rounded-lg transition-all",
                  category.color,
                  selectedCategory === category.id
                    ? "ring-2 ring-swiggy-primary"
                    : "hover:scale-105"
                )}
                onClick={() => setSelectedCategory(
                  selectedCategory === category.id ? null : category.id
                )}
              >
                <span className="text-3xl mb-2">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default FoodCategories;
