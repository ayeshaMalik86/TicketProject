import React from "react";
import "../../styles/pages/Home/Venues.css";

const VenueCard = ({ image, title, description, capacity, price }) => (
  <div className="venue-card">
    <img src={image} alt={title} className="venue-image" />
    <div className="venue-info">
      <h3 className="venue-title">{title}</h3>
      <p className="venue-description">{description}</p>
      <div className="venue-details">
        <span>Capacity: {capacity}</span>
        <span>From: ${price}</span>
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
      capacity: "800",
      price: "45",
    },
    {
      image: "/assets/images/venue-02.jpg",
      title: "Madison Square Garden",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      capacity: "4000",
      price: "55",
    },
    {
      image: "/assets/images/venue-03.jpg",
      title: "Royce Hall",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      capacity: "7000",
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
