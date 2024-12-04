import React from "react";
import "../../styles/pages/Tickets/TicketsList.css";

const tickets = [
  {
    title: "Wonderful Festival",
    price: "$25",
    ticketsLeft: 150,
    time: "Thursday, 05:00 PM to 10:00 PM",
    location: "908 Copacabana Beach, Rio de Janeiro",
    img: "/assets/images/ticket-01.jpg",
  },
  {
    title: "Golden Festival",
    price: "$45",
    ticketsLeft: 200,
    time: "Sunday, 06:00 PM to 10:00 PM",
    location: "789 Copacabana Beach, Rio de Janeiro",
    img: "/assets/images/ticket-02.jpg",
  },
  {
    title: "Water Splash Festival",
    price: "$65",
    ticketsLeft: 260,
    time: "Tuesday, 07:00 PM to 11:00 PM",
    location: "456 Copacabana Beach, Rio de Janeiro",
    img: "/assets/images/ticket-03.jpg",
  },
  {
    title: "Tiger Festival",
    price: "$20",
    ticketsLeft: 340,
    time: "Thursday, 06:40 PM to 10:40 PM",
    location: "123 Copacabana Beach, Rio de Janeiro",
    img: "/assets/images/ticket-04.jpg",
  },
  {
    title: "Woodland Festival",
    price: "$30",
    ticketsLeft: 420,
    time: "Wednesday, 05:00 PM to 09:00 PM",
    location: "1122 Copacabana Beach, Rio de Janeiro",
    img: "/assets/images/ticket-05.jpg",
  },
  {
    title: "Winter Festival",
    price: "$40",
    ticketsLeft: 520,
    time: "Saturday, 05:00 PM to 09:00 PM",
    location: "220 Copacabana Beach, Rio de Janeiro",
    img: "/assets/images/ticket-06.jpg",
  },
];

const TicketsList = () => {
  return (
    <div className="tickets-page">
      <h1>Tickets Page</h1>
      <div className="tickets-grid">
        {tickets.map((ticket, index) => (
          <div key={index} className="ticket-card">
            <img src={ticket.img} alt={ticket.title} />
            <div className="ticket-section-img"></div>
            <div className="ticket-info">
            <p className="price">1 ticket from <strong>{ticket.price}</strong></p>
              <p className="tickets-left">There Are {ticket.ticketsLeft} Tickets Left For This Show</p>
              <h3>{ticket.title}</h3>
              <p><img src="/assets/images/clock.png" alt="location"/> {ticket.time}</p>
              <p><img src="/assets/images/pin.png" alt="location"/> {ticket.location}</p>
              <button className="purchase-btn">Purchase Tickets</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="page-btn">Prev</button>
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        <button className="page-btn">Next</button>
      </div>
    </div>
  );
};

export default TicketsList;
