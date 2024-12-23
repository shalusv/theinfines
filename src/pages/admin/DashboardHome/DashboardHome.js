import React from "react";
import "./DashboardHome.css";

const DashboardHome = () => {
  return (
    <div className="dashboard-home">
      <div className="welcome-section">
        <h1 className="welcome-title">Welcome to the Admin Dashboard</h1>
        <p className="welcome-description">
          Stay in control of your application with real-time insights, user
          management, and customizable notifications. Use the sidebar to
          navigate through different sections.
        </p>
      </div>

      <div className="stats-container">
        <div className="stat-box">
          <h3>Users</h3>
          <p>120 Active</p>
        </div>
        <div className="stat-box">
          <h3>Notifications</h3>
          <p>35 New</p>
        </div>
        <div className="stat-box">
          <h3>Settings</h3>
          <p>5 Pending</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
