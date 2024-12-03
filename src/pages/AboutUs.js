import React from "react";
import RadioCityEvent from "../components/AboutComponents/RadioCityEvent";
import EventDetails from "../components/AboutComponents/EventDetails";
import FestivalSuggestions from "../components/AboutComponents/FestivalSuggestions";

const AboutPage = () => {
  return (
    <main>
      <RadioCityEvent/>
      <EventDetails/>
      <FestivalSuggestions/>
    </main>
  );
};

export default AboutPage;
