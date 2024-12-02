import React, { useState } from "react";
import "../styles/components/NavBar.css";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false); 
  
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <header className="navbar">
      <div className="navbar-top">
        <p>Hey! The Show Is Starting In 5 Days.</p>
        <a href="#contact">Contact Us Now!<span className="arrow">→</span></a>
      </div>
      <nav className="navbar-main">
        <h1 className="logo"><span className="highlight">Art</span>Xibition</h1>
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <span className="icon">&#9776;</span> 
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a
              href="#home"
              className={activeTab === "home" ? "active" : ""}
              onClick={() => handleTabClick("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeTab === "about" ? "active" : ""}
              onClick={() => handleTabClick("about")}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#rent"
              className={activeTab === "rent" ? "active" : ""}
              onClick={() => handleTabClick("rent")}
            >
              Rent Venue
            </a>
          </li>
          <li>
            <a
              href="#shows"
              className={activeTab === "shows" ? "active" : ""}
              onClick={() => handleTabClick("shows")}
            >
              Shows & Events
            </a>
          </li>
          <li>
            <a
              href="#tickets"
              className={activeTab === "tickets" ? "active" : ""}
              onClick={() => handleTabClick("tickets")}
            >
              Tickets
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
