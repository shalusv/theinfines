import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../../../assets/images/client/basic/logo.png";
import { FaHome, FaBars } from "react-icons/fa";

const DesignTester = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-container">
      <header className="header">
        <div className="logo-container">
          <div className="top-text">THE</div>
          <img src={logo} alt="Logo" className="logo" />
          <p className="tagline">solutions</p>
        </div>

        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? "active-link" : ""} home`
                }
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
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>
      </header>
    </div>
  );
};

export default DesignTester;
