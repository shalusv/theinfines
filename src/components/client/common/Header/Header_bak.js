import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../../../assets/images/client/basic/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo */}
        <img src={logo} alt="Logo" className="logo" />

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <NavLink
            exact="true"
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
        </nav>

        {/* Hamburger menu icon */}
        <div className="menu-icon-container" onClick={toggleMenu}>
          <div className="menu-icon">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
