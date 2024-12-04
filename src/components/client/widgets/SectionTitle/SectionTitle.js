import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ title, position }) => {
  return (
    <div className="section-title">
      <h2 className={`${position ? "odd" : ""}`}>{title}</h2>
    </div>
  );
};

export default SectionTitle;
