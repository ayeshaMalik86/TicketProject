import React from "react";
import NavBar from "./components/NavBar"; 
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutUs"; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar /> 
        <main>
          <Routes> 
            <Route path="/" element={<HomePage />} /> 
            <Route path="/about" element={<AboutPage />} /> 
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
