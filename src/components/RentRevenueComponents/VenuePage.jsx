import React from "react";
import "../../styles/pages/RentRevenue/VenuePage.css";

const VenuePage = () => {
  return (
    <div className="venue-container">
      <header className="venue-header" style={{
        backgroundImage: "url('/assets/images/rent_venue_bg.jpg')",
      }}>
        <h1>Are You Looking For A Venue?</h1>
        <p>Check out our venues, pick your choice and fill the reservation <br/>application.</p>
      </header>
      
      <nav className="venue-nav">
        <ul>
          <li>Madison Square Garden</li>
          <li>Radio City Musical Hall</li>
          <li>Royce Hall</li>
        </ul>
        <button className="purchase-tickets-btn">Purchase Tickets</button>
      </nav>
      
      <main className="venue-main">
        <section className="venue-details">
          <h2>Madison Square Garden</h2>
          <p>
            ArtXibition Event Template is brought to you by Tooplate website and it included total
            7 HTML pages. These are Homepage, About, Rent a venue, shows & events, event details,
            tickets, and ticket details. You can feel free to modify any page as you like. If you
            have any question, please visit our Contact page.
          </p>
          <p className="price-details">
            <span>Madison Square Garden</span>
            <span>$2,840 per day</span>
            <span>860 Guests</span>
          </p>
        </section>
        
        <div className="venue-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            title="Google Map"
            allowFullScreen
          ></iframe>
          <h3>Any Question?</h3>
          <p>
            Tumeric air affogato sare torial waistcoat denim stumber.
          </p>
          <a className="directions" href="/">Need Directions? →</a>
        </div>
      </main>
    </div>
  );
};

export default VenuePage;
