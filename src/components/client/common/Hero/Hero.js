import React from "react";
import "./Hero.css";
import InfineButton from "../../widgets/Button/InfineButton";
import heroImage from "../../../../assets/images/client/hero/hero-bg.jpg"; // Update with your image path

const Hero = () => {
  return (
    <section className="hero-section hero-pad">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h2>
          Innovate. Create. Grow. with{" "}
          <span style={{ color: "#0f75bc" }}>infines</span>
        </h2>
        <p>
          At <span className="company-name">infines</span>, we’re not just
          building websites; we’re crafting digital experiences that elevate
          your brand and drive success. Our team of experts is dedicated to
          delivering innovative web development solutions, stunning logo
          designs, and enterprise applications tailored to your unique needs.
          Join us on a journey to transform your ideas into reality and watch
          your business thrive in the digital landscape.
        </p>
        <InfineButton
          to="/about"
          type="redirect"
          className="hero-btn"
          label="Discover More"
        />
      </div>
    </section>
  );
};

export default Hero;
