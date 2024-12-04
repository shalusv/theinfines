import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h2>Transform Your Business</h2>
          <p>
            We specialize in creating cutting-edge websites and digital
            experiences that drive results. Partner with us to bring your vision
            to life and stand out in today's competitive digital landscape.
          </p>
          <Link to="/services" className="hero-btn">
            Discover Our Solutions
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
