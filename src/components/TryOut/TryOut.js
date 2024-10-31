import React, { useState } from "react";
import "./TryOut.css";
import logo from "../../assets/images/client/basic/logo.png"; // Update the logo path

const TryOut = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="tryout-header">
      <div className="tryout-logo">
        <img src={logo} alt="Logo" />
      </div>
      <button
        className={`tryout-menu-toggle ${isOpen ? "tryout-active" : ""}`}
        onClick={toggleMenu}
      >
        ☰
      </button>
      <nav className={`tryout-nav-links ${isOpen ? "tryout-open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default TryOut;
