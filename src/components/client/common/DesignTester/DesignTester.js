import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for routing
import "./DesignTester.css"; // Ensure this path is correct
import logo from "../../../../assets/images/client/basic/logo.png"; // Updated path to your logo
import { FaHome } from "react-icons/fa";

const DesignTester = () => {
  return (
    <div className="header-container">
      <header className="header">
        <div className="logo-container">
          <div className="top-text">THE</div>
          <img src={logo} alt="Logo" className="logo" />
          <p className="tagline">solutions</p>
        </div>
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                exact // Add exact if you want it to match the exact path
              >
                <FaHome />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default DesignTester;
