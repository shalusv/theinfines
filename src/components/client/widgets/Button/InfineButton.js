// src/components/client/common/widgets/Buttons/InfineButton.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./InfineButton.css";

const InfineButton = ({ type, size, onClick, to, children }) => {
  const className = `btn ${type} ${size}`;

  // Determine whether to render a Link or a button
  const renderButton = () => {
    if (type === "link" && to) {
      return (
        <Link to={to} className={className}>
          {children}
        </Link>
      );
    } else if (type === "redirect" && to) {
      return (
        <Link to={to} className={className}>
          {children}
        </Link>
      );
    } else {
      return (
        <button className={className} onClick={onClick}>
          {children}
        </button>
      );
    }
  };

  return renderButton();
};

export default InfineButton;
