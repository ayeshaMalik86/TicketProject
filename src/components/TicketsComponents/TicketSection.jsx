import React from "react";
import "../../styles/pages/Tickets/TicketsSection.css";

const TicketsSection = () => {
  return (
    <section className="ticket-section">
      <div className="banner" style={{
        backgroundImage: "url('/assets/images/shows_events_bg.jpg')",
      }}>
        <h1>Tickets On Sale Now!</h1>
        <p>
          Check out upcoming and past Shows & Events and grab <br/>your ticket right
          now.
        </p>
      </div>
      <div className="filter-section">
        <p>Sort The Upcoming Shows & Events By:  </p>
        <div className="filter-options">
          <select>
            <option>Month</option>
          </select>
          <select>
            <option>Location</option>
          </select>
          <select>
            <option>Price</option>
          </select>
          <button className="filter-btn">Submit</button>
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;
