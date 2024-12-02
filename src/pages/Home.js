import React from "react";
import HeroSection from "../components/HomeComponents/HeroSection";
import EventVenues from "../components/HomeComponents/EventVenues";
import Venues from "../components/HomeComponents/Venues";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <EventVenues/>
      <Venues/>
    </main>
  );
};

export default HomePage;
