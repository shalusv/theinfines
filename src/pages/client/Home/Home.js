// src/pages/client/Home/Home.js
import React from "react";
import "./Home.css";
import Button from "../../../components/client/widgets/Button/InfineButton";
import InfineButton from "../../../components/client/widgets/Button/InfineButton";

const Home = () => {
  return (
    <div className="home">
      <section className="home-content">
        <h2>Welcome to The Infines</h2>
        <p>
          At The Infines, we specialize in providing top-notch web development
          services for businesses worldwide. Our experienced team of developers
          will help you build, design, and maintain your online presence.
        </p>
        <InfineButton type="link" size="large" to="/services">
          Explore Our Services
        </InfineButton>
        <div></div>
      </section>
    </div>
  );
};

export default Home;
