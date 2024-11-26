import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import logo from "../../../../assets/images/client/basic/logo.png";
import { FiAlignCenter, FiArrowDown } from "react-icons/fi";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Company Logo" className="logo-image" />
      </div>

      <button
        className={`menu-button ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FiArrowDown /> : <FiAlignCenter />}
      </button>

      <div className={`navigation ${isMenuOpen ? "open" : ""}`} ref={navRef}>
        <div className="navigation-box">
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link home ${isActive ? "active-link" : ""}`
                }
                onClick={handleLinkClick} // Close menu on link click
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
                onClick={handleLinkClick} // Close menu on link click
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
                onClick={handleLinkClick} // Close menu on link click
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
                onClick={handleLinkClick} // Close menu on link click
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
