import React, { useState } from "react";
import Sidebar from "../common/Sidebar/Sidebar";
import HeaderDashboard from "../common/HeaderDash/HeaderDash";
import { Routes, Route } from "react-router-dom";

import "../../../assets/root-admin.css";
import "./Dashboard.css";

// Admin Content Pages
import UsersPage from "../../../pages/admin/Users/UsersPageAdd";
import DashboardHome from "../../../pages/admin/DashboardHome/DashboardHome";
import UsersPageAdd from "../../../pages/admin/Users/UsersPageAdd";
import UsersPageList from "../../../pages/admin/Users/UsersPageList";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="dashboard-container">
      <HeaderDashboard toggleSidebar={toggleSidebar} />
      <div
        className={`dashboard-body ${
          isSidebarOpen ? "sidebar-open" : "sidebar-collapsed"
        }`}
      >
        <div className="sidebar-container">
          {/* <Sidebar isOpen={isSidebarOpen} /> */}
        </div>

        <div className="dashboard-content">
          <div className="dashboard-content-box">
            {/* <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="users/add" element={<UsersPageAdd />} />
              <Route path="users/list" element={<UsersPageList />} />
            </Routes> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
