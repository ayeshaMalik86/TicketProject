import React from 'react';
import "../../styles/pages/Home/EventCard.css";

const EventCard = () => {
  return (
    <div className='event-card'>
    <div className="event-container">
      <div className="event-item">
        <img src="assets/images/event-01.jpg" alt="Radio City Musical Hall" className="event-image" />
        <div className="event-details">
          <h3>Radio City Musical Hall</h3>
          <p><img src="assets/images/clock.png" alt="time"/> Tuesday: 15:30–19:30</p>
          <p><img src="assets/images/pin.png" alt="place"/> Copacabana Beach, Rio de Janeiro</p>
        </div>
      </div>
      <div className="event-item">
        <img src="assets/images/event-02.jpg" alt="Madison Square Garden" className="event-image" />
        <div className="event-details">
          <h3>Madison Square Garden</h3>
          <p><img src="assets/images/clock.png" alt="time"/> Wednesday: 08:00–14:00</p>
          <p><img src="assets/images/pin.png" alt="place"/> Copacabana Beach, Rio de Janeiro</p>
        </div>
      </div>
      <div className="event-item">
        <img src="assets/images/event-03.jpg" alt="Royce Hall" className="event-image" />
        <div className="event-details">
          <h3>Royce Hall</h3>
          <p><img src="assets/images/clock.png" alt="time"/> Thursday: 09:00–23:00</p>
          <p><img src="assets/images/pin.png" alt="place"/> Copacabana Beach, Rio de Janeiro</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EventCard;
