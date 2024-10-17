// src/components/client/common/Hero/Hero.js
import React from "react";
import "./Hero.css";
import InfineButton from "../../widgets/Button/InfineButton";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to The Infines</h1>
        <p>
          We provide the best web development services to grow your business.
        </p>
        <InfineButton type="redirect"></InfineButton>
      </div>
    </section>
  );
};

export default Hero;
