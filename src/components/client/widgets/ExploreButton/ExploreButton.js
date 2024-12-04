import React from "react";
import { useNavigate } from "react-router-dom"; // Use 'useNavigate' for v6
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import "./ExploreButton.css";

const ExploreButton = ({ text, to }) => {
  const navigate = useNavigate(); // Initialize the navigation function

  const handleClick = () => {
    navigate(to); // Navigate to the route passed as the 'to' prop
  };

  return (
    <div className="explore" onClick={handleClick}>
      <div className="explore-button">
        <LuChevronLeft />
        <span className="title">{text}</span>
        <LuChevronRight />
      </div>
    </div>
  );
};

export default ExploreButton;
