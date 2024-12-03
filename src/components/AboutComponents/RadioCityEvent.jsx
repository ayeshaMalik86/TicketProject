import React from "react";
import "../../styles/pages/About/RadioCityEvent.css";

const RadioCityEvent = () => {
  return (
    <div className="radio-city-event">
      <div className="event-header"  style={{
        backgroundImage: "url('/assets/images/about_bg.jpg')",
      }}>
        <div className="radio-event-heading">
        <h1>Radio City Musical Hall</h1>
        <p>September 24–28, 2045 in Rio de Janeiro</p>
        </div>
      </div>
      <div className="radio-event-content">
        <div className="radio-event-image">
          <img
            src="/assets/images/about-image.jpg"
            alt="Concert crowd"
          />
        </div>
        <div className="map-card">
        <div className="radio-map-img">
          <img src="/assets/images/about-map-image.jpg"
            alt="about-map"/>
        </div>
        <div className="radio-event-details">
          <h1><strong>Radio City Musical Hall</strong></h1>
          <p>August 24 Friday</p>
          <p>09:30 AM – 07:00 PM</p>
          <p className="ticket-cost">🎟 Tickets Starting From $34.00</p>
          <button className="radio-purchase-button">Purchase Tickets</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default RadioCityEvent;
