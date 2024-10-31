import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaBars } from "react-icons/fa";
import logo from "../../../../assets/images/client/basic/logo.png";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Company Logo" className="logo-image" />
      </div>

      {/* Menu button, visible on small screens */}
      <button
        className={`menu-button ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <FaBars />
      </button>

      <div className={`navigation ${isMenuOpen ? "open" : ""}`}>
        <div className="navigation-box">
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link home ${isActive ? "active-link" : ""}`
                }
              >
                <FaHome />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
