import React from "react";
import "../../styles/pages/Home/HeroSection.css";
import CountdownTimer from "./Timer";
import Carousel from "./Carousel";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-background" 
      style={{
        backgroundImage: "url('/assets/images/banner_bg.jpg')",
      }}>
      </div>

      <div className="countdown">
        <CountdownTimer />
      </div>

      <div className="event-info">
      <div class="next-show">
          <span>↑</span>
          <p>Next Show</p>
      </div>
        <p>Opening on Thursday, March 31st</p>
        <h1>The Sunny Hill Festival 2045</h1>
        <button className="cta-button">Purchase Tickets</button>
      </div>

      <div className="carousel">
      <Carousel /> 
      </div>
    </div>
  );
};

export default HeroSection;
