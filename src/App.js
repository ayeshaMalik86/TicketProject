import React from "react";
import NavBar from "./components/NavBar"; // Import the Navbar component
import HomePage from "./pages/Home";

const App = () => {
  return (
    <div>
      <NavBar /> {/* Display the navbar */}
      <main>
        <HomePage/>
      </main>
    </div>
  );
};

export default App;
