// src/pages/client/Home/Home.js
import React, { useEffect } from "react";
import "./HomePage.css";
import Hero from "../../../components/client/common/Hero/Hero"; // Import the Hero component
import Service from "../../../components/client/other/Service/Service";

const HomePage = () => {
  useEffect(() => {
    document.title = "Home | INFINES"; // Set the title for the Home page
  }, []);

  return (
    <div className="page-container">
      <Hero />
      <Service />
    </div>
  );
};

export default HomePage;
