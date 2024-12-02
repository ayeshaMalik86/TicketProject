import React from "react";
import NavBar from "./NavBar"; // Import your Navbar component

const Layout = ({ children }) => {
  return (
    <>
      <NavBar /> {/* Navbar appears at the top */}
      <main>{children}</main> {/* This renders the content of each page */}
    </>
  );
};

export default Layout;
