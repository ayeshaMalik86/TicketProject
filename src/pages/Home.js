import React from "react";
import HeroSection from "../components/HomeComponents/HeroSection";
import EventVenues from "../components/HomeComponents/EventVenues";
import Venues from "../components/HomeComponents/Venues";
import EventCard from "../components/HomeComponents/EventCard";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <EventVenues/>
      <Venues/>
      <EventCard/>
    </main>
  );
};

export default HomePage;
