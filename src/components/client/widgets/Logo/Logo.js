import React from "react";
import PropTypes from "prop-types";
import "./Logo.css"; // Import the updated CSS styles

const Logo = ({ logoSrc, topText, tagline, type }) => {
  return (
    <div className={`logo-container ${type}`}>
      <div className="top-text">{topText}</div>
      <img src={logoSrc} alt="Logo" className="logo" />
      <p className="tagline">{tagline}</p>
    </div>
  );
};

Logo.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  topText: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["header", "footer"]).isRequired, // Type can be either header or footer
};

export default Logo;
