// src/pages/client/Home/Home.js
import React from "react";
import "./Home.css";
import Hero from "../../../components/client/common/Hero/Hero"; // Import the Hero component

const Home = () => {
  return (
    <div className="page-container">
      {" "}
      {/* Use the common page-container class */}
      <Hero />
    </div>
  );
};

export default Home;
