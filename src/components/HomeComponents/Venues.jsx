import React from "react";
import "../../styles/pages/Home/Venues.css";

const VenueCard = ({ image, title, description, capacity, price, sitemap }) => (
  <div className="venue-card">
    <div className="venue-image">
    <img src={image} alt={title}  />
    </div>
    <div className="venue-info">
        <div className="venue-button">
        <button className="purchase-ticket">
            Purchase <br/>Ticket
        </button>
        </div>
        <div className="card-content">
      <h3 className="venue-title">{title}</h3>
      <p className="venue-description">{description}</p>
      <div className="venue-details">
        <span><img src="/assets/images/sitemap.png" alt="sitemap"></img> {sitemap}</span>
        <span><img src="/assets/images/user.png" alt="user"></img> {capacity}</span> 
      </div>
      <p className="ticket">1 ticket <br/>from <span className="bold">${price}</span></p>
      </div>
    </div>
  </div>
);

const Venues = () => {
  const venues = [
    {
      image: "/assets/images/venue-01.jpg",
      title: "Radio City Musical Hall",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      capacity: "500",
      sitemap:"250",
      price: "45",
    },
    {
      image: "/assets/images/venue-02.jpg",
      title: "Madison Square Garden",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      capacity: "650",
      sitemap:"450",
      price: "55",
    },
    {
      image: "/assets/images/venue-03.jpg",
      title: "Royce Hall",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      capacity: "700",
      sitemap:"450",
      price: "65",
    },
  ];

  return (
    <div className="venues-container">
      <h2 className="venues-title">Our Venues & Tickets</h2>
      <div className="venues-grid">
        {venues.map((venue, index) => (
          <VenueCard key={index} {...venue} />
        ))}
      </div>
    </div>
  );
};

export default Venues;
