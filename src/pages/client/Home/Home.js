// src/pages/client/Home/Home.js
import React, { useEffect } from "react";
import "./Home.css";
import Hero from "../../../components/client/common/Hero/Hero"; // Import the Hero component

const Home = () => {
  useEffect(() => {
    document.title = "Home | INFINES"; // Set the title for the Home page
  }, []);

  return (
    <div className="page-container">
      <Hero title="" />
      <Hero title="extra" />
    </div>
  );
};

export default Home;
