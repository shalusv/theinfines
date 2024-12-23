import React, { useState } from "react";
import HeaderDashboard from "../common/HeaderDash/HeaderDash";
import Sidebar from "../common/Sidebar/Sidebar";

import "../../../assets/root-admin.css";
import "./Dashboard.css";
import { Route, Routes } from "react-router-dom";
import DashboardHome from "../../../pages/admin/DashboardHome/DashboardHome";
import UsersPageAdd from "../../../pages/admin/Users/UsersPageAdd";
import UsersPageList from "../../../pages/admin/Users/UsersPageList";
import SettingsPage from "../../../pages/admin/Settings/SettingsPage";
import NotificationSubscriptionPage from "../../../pages/admin/Notifications/NotificationSubscriptionPage";
import NotificationMessagesPage from "../../../pages/admin/Notifications/NotificationMessagesPage";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="dashboard-container">
      <HeaderDashboard toggleSidebar={toggleSidebar} />
      <div className="dashboard-body">
        {/* Pass the `isSidebarOpen` prop here */}
        <Sidebar isOpen={isSidebarOpen} />
        <div
          className={`dashboard-content ${!isSidebarOpen ? "collapsed" : ""}`}
        >
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/users/add" element={<UsersPageAdd />} />
            <Route path="/users/list" element={<UsersPageList />} />
            <Route
              path="/notifications/messages"
              element={<NotificationMessagesPage />}
            />
            <Route
              path="/notifications/subscription"
              element={<NotificationSubscriptionPage />}
            />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
