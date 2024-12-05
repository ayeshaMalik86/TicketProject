import React from "react";
import "../../styles/pages/RentRevenue/ReservationForm.css";

const ReservationForm = () => {
  return (
    <div className="reservation-form-container">
      <h1 className="form-title">Reservation Application</h1>
      <form className="reservation-form">
        <div className="form-row">
          <input type="text" name="name" placeholder="Your Name*" required />
          <input type="email" name="email" placeholder="Your Email*" required />
        </div>
        <div className="form-row">
          <input type="tel" name="phone" placeholder="Phone Number*" required />
          <input
            type="text"
            name="company"
            placeholder="Company / Organization*"
            required
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            name="venue"
            placeholder="Venue Requested*"
            required
          />
          <input
            type="text"
            name="eventType"
            placeholder="Type Of Event*"
            required
          />
        </div>
        <div className="form-row">
          <input
            type="date"
            name="primaryDate"
            placeholder="Date Requested (Primary Date)*"
            required
          />
          <input
            type="date"
            name="secondaryDate"
            placeholder="Date Requested (Secondary Date)*"
            required
          />
        </div>
        <div className="form-row full-width">
          <textarea
            name="eventDetails"
            placeholder="About The Event You Are Hosting"
            rows="4"
          />
        </div>
        <button type="submit" className="submit-button">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
