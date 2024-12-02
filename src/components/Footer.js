import React from "react";
import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="newsletter">
        <p>Subscribe Our Newsletter:</p>
        <input type="email" placeholder="Your Email Address" />
        <button>Submit</button>
      </div>
      <div className="footer-content">
        <div className="footer-column-address">
          <h3>Sunny Hill Festival Address</h3>
          <p>5 College St NW,</p>
          <p>Norcross, GA 30071</p>
          <p>United States</p>
        </div>
        <div className="footer-column-links">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#info">Info</a></li>
            <li><a href="#venues">Venues</a></li>
            <li><a href="#guides">Guides</a></li>
            <li><a href="#videos">Videos</a></li>
            <li><a href="#outreach">Outreach</a></li>
          </ul>
        </div>
        <div className="footer-column-time">
          <h3>Open Hours</h3>
          <p>Mon to Fri: 10:00 AM to 8:00 PM</p>
          <p>Sat - Sun: 11:00 AM to 4:00 PM</p>
          <p>Holidays: Closed</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>São Conrado, Rio de Janeiro</p>
        <p>Copyright 2045 ArtXibition Company</p>
      </div>
      <div className="footer-below">
        <div className="logo">
            <span className="highlight">Art</span>Xibition
        </div>
        <div className="nav-links1">
        <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#rent">Rent Venue</a>
            </li>
            <li>
              <a href="#shows"> Shows & Events</a>
            </li>
            <li>
                <a href="#tickets"> Tickets</a>
                </li>
          </ul>
        </div>
      <div className="social-icons">
        <a href="#twitter"><img src="/assets/images/twitter.png" alt=""/></a>
        <a href="#facebook"><img src="/assets/images/facebook.png" alt=""/></a>
        <a href="#behance"><img src="/assets/images/behance.png" alt=""/></a>
        <a href="#instagram"><img src="/assets/images/instagram.png" alt=""/></a>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
