
import React from "react";
import { ScrollArea } from "./ui/scroll-area";

interface Offer {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

const offers: Offer[] = [
  {
    id: "1",
    title: "60% OFF",
    description: "On your first order",
    image: "https://source.unsplash.com/photo-1618160702438-9b02ab6515c9",
    color: "from-[#ff7e1f] to-[#ffa700]"
  },
  {
    id: "2",
    title: "Free Delivery",
    description: "On orders above $15",
    image: "https://source.unsplash.com/photo-1535268647677-300dbf3d78d1",
    color: "from-[#8b5cf6] to-[#d946ef]"
  },
  {
    id: "3",
    title: "Daily Deals",
    description: "Save up to 30%",
    image: "https://source.unsplash.com/photo-1493962853295-0fd70327578a",
    color: "from-[#0ea5e9] to-[#2dd4bf]"
  },
  {
    id: "4",
    title: "Happy Hour",
    description: "Special weekend offers",
    image: "https://source.unsplash.com/photo-1721322800607-8c38375eef04",
    color: "from-[#f97316] to-[#eab308]"
  }
];

const FeaturedOffers = () => {
  return (
    <div className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Best Offers For You</h2>
        
        <ScrollArea className="w-full whitespace-nowrap pb-4 custom-scrollbar">
          <div className="flex space-x-4">
            {offers.map((offer) => (
              <div 
                key={offer.id}
                className="w-80 flex-shrink-0 rounded-xl overflow-hidden shadow-md"
              >
                <div className={`relative h-32 bg-gradient-to-r ${offer.color} p-6`}>
                  <div className="absolute inset-0 opacity-20" 
                    style={{
                      backgroundImage: `url(${offer.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }} 
                  />
                  <div className="relative z-10 text-white">
                    <h3 className="text-2xl font-bold mb-1">{offer.title}</h3>
                    <p>{offer.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default FeaturedOffers;
