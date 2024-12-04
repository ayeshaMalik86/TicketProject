import React from "react";
import TicketsSection from "../components/TicketsComponents/TicketSection";
import TicketsList from "../components/TicketsComponents/TicketsList";

const TicketsPage = () => {
  return (
    <main>
        <TicketsSection/>
        <TicketsList/>
    </main>
  );
};

export default TicketsPage;
