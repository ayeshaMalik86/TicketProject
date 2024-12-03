import React from "react";
import "../../styles/pages/About/EventDetails.css";

const EventDetails = () => {
  return (
    <div className="event-details-container">
        <div className="event-content">
      <div className="about-section">
        <h1>About The Upcoming Show</h1>
        <p>
          ArtXibition Event Template is brought to you by Tooplate website and it
          includes a total of 7 HTML pages. These are{" "}
          <a href="/">Homepage</a>, <a href="/">About</a>,{" "}
          <a href="/">Rent a venue</a>, <a href="/">Shows & events</a>,{" "}
          <a href="/">Event details</a>, <a href="/">Tickets</a>, and{" "}
          <a href="/">Ticket details</a>. You can feel free to modify any page
          as you like. If you have any questions, please visit our Contact page.
        </p>
      </div>

      <div className="restricted-section">
        <h2>Items That Are Restricted</h2>
        <ul>
          <li>Flash Cameras</li>
          <li>Food & Drinks</li>
          <li>Any kind of flashy objects</li>
        </ul>
      </div>

      <div className="directions-section">
        <h2>Directions & Car Parking</h2>
        <p>
          Art party vegan mixtape before they sold out raclette, cliche banh mi
          mumblecore ugh hell of. Art party kene ugh umami, readymade tbh small
          batch austin distillery aesthetic. Shoreditch narwhal livers edge
          actually godar affogato sartorial waistcoat ugh raw denim stumptown.
        </p>
        <a href="/">Need Directions? →</a>
      </div>
      </div>
      <div className="tickets-section">
        <h2><img src="/assets/images/clock-blk.png" alt=""/> Get The Next Show Tickets</h2>
        <div className="ticket-item">
          <h3>Copacabana Festival</h3>
          <div className="ticket-item-sub">
          <div className="ticket-item-content">
          <p>Sep 24 Fri</p>
          <p> 08:30 AM - 11:00 PM</p>
          </div>
          <div className="ticket-item-img">
            <img src="/assets/images/grocery-store.png" alt="cart"></img>
            </div>
            </div>
        </div>
        <div className="ticket-item">
          <h3>Rock Music Festival</h3>
          <div className="ticket-item-sub">
          <div className="ticket-item-content">
          <p>Sep 22 Wed</p>
          <p> 11:00 AM - 09:00 PM</p>
          </div>
          <div className="ticket-item-img">
            <img src="/assets/images/grocery-store.png" alt="cart"></img>
            </div>
            </div>
        </div>
        <div className="ticket-item">
          <h3>Water Splash Festival</h3>
          <div className="ticket-item-sub">
          <div className="ticket-item-content">
          <p>July 18 Friday</p>
          <p> 10:00 AM - 11:00 PM</p>
          </div>
          <div className="ticket-item-img">
            <img src="/assets/images/grocery-store.png" alt="cart"></img>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
