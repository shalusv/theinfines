// src/components/client/common/Hero/Hero.js
import React from "react";
import "./Hero.css";
import InfineButton from "../../widgets/Button/InfineButton";

const Hero = ({ title }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>{title}</h1>
        <h1>Welcome to The Infines</h1>
        <p>
          We provide the best web development services to grow your business.
        </p>
        <InfineButton to="design-tester" type="redirect"></InfineButton>
      </div>
    </section>
  );
};

export default Hero;
