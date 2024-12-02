import React from "react";
import "../../styles/pages/Home/EventVenues.css";

const EventVenues = () => {
  return (
    <div className="container">
      <div className="text-content">
      <div className="header">
        <h1>Three Amazing Venues for Events</h1>
        <p>
          ArtXibition Event Template is brought to you by Tooplate website and it
          includes a total of 7 HTML pages. These are{" "}
          <a href="#homepage">Homepage</a>,{" "}
          <a href="#about">About</a>,{" "}
          <a href="#rent-venue">Rent a Venue</a>,{" "}
          <a href="#shows">Shows & Events</a>,{" "}
          <a href="#details">Event Details</a>,{" "}
          <a href="#tickets">Tickets</a>, and{" "}
          <a href="#ticket-details">Ticket Details</a>.
        </p>
        <p>
          You can use this event template for your commercial or business website.
          Pellentesque et neque et sapien pulvinar condimentum vitae non ipsum.
        </p>
      </div>

      <div className="address">
        <div className="address-icon">
        <img src="/assets/images/maps-and-flags.png" alt=""></img>
        <h3>Visit Us</h3>
        </div>
        <p>5 College St NW, Norcross, GA 30071, United States</p>
        <a href="#directions">Need Directions?<span > →</span> </a>
      </div>
      </div>
      <div className="map">
        <img src="assets/images/map-image.jpg" alt=""></img>
      </div>

      
    </div>
  );
};

export default EventVenues;
