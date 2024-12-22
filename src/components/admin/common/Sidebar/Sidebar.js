import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import {
  FaTachometerAlt,
  FaCogs,
  FaUsers,
  FaBell,
  FaCaretDown,
} from "react-icons/fa"; // Import icons
import "./Sidebar.css";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${!isOpen ? "collapsed" : ""}`}>
      <ul className="menu">
        <li className="menu-item">
          <Link to="/admin">
            <FaTachometerAlt className="icon" />
            <span className="sidebar-link-text">Dashboard</span>
          </Link>
        </li>

        <li className="menu-item">
          <Link to="#">
            <FaUsers className="icon" />
            <span className="sidebar-link-text">Users</span>
            <FaCaretDown className="submenu-icon" />
          </Link>
          <ul className="submenu">
            <li>
              <Link to="/admin/users/add">
                <span className="sidebar-link-text">Add User</span>
              </Link>
            </li>
            <li>
              <Link to="#">List Users</Link>
            </li>
          </ul>
        </li>

        <li className="menu-item">
          <Link to="#">
            <FaBell className="icon" />
            <span className="sidebar-link-text">Notifications</span>
            <FaCaretDown className="submenu-icon" />
          </Link>
          <ul className="submenu">
            <li>
              <Link to="#">Subscription</Link>
            </li>
            <li>
              <Link to="#">Messages</Link>
            </li>
          </ul>
        </li>

        <li className="menu-item">
          <Link to="#">
            <FaCogs className="icon" />
            <span className="sidebar-link-text">Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
