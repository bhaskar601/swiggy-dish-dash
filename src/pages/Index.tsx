
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FoodCategories from "@/components/FoodCategories";
import FeaturedOffers from "@/components/FeaturedOffers";
import RestaurantList from "@/components/RestaurantList";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FoodCategories />
        <FeaturedOffers />
        <RestaurantList />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
