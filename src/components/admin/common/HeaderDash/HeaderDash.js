import React from "react";
import "./HeaderDash.css";

const HeaderDashboard = ({ toggleSidebar, isOpen }) => {
  return (
    <header className="header-dashboard">
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <h1 className="header-title">Admin Dashboard</h1>
      <div className="header-actions">
        <button className="header-btn">Profile</button>
        <button className="header-btn">Logout</button>
      </div>
    </header>
  );
};

export default HeaderDashboard;
