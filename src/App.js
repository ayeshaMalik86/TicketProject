import React from "react";
import NavBar from "./components/NavBar"; 
import HomePage from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <NavBar /> 
      <main>
        <HomePage/>
      </main>
      <Footer/>
    </div>
  );
};

export default App;
