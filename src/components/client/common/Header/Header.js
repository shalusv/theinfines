// src/components/client/common/Header/Header.js
import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/images/client/basic/logo.png" alt="The Infines Logo" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <nav className={`nav ${isOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faHome} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faInfoCircle} />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBriefcase} />
              <span>Services</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
