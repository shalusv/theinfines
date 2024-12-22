import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faCog,
  faEnvelope,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Import the Sidebar CSS

function Sidebar() {
  const [isSubmenuVisible, setSubmenuVisible] = useState(false);
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!isCollapsed);

  // Handle mouse enter and leave for submenu visibility
  const handleMouseEnter = () => setSubmenuVisible(true);
  const handleMouseLeave = () => setSubmenuVisible(false);

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      {/* Toggle Button for Sidebar Collapse/Expand */}
      <div className="toggle-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </div>

      <ul className="menu">
        <li className="menu-item">
          <Link to="/admin" className="link">
            <FontAwesomeIcon icon={faHome} className="icon" />
            {!isCollapsed && <span>Home</span>}
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/admin/messages" className="link">
            <FontAwesomeIcon icon={faInfoCircle} className="icon" />
            {!isCollapsed && <span>Messages</span>}
          </Link>
        </li>
        <li
          className="menu-item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link className="link">
            <FontAwesomeIcon icon={faCog} className="icon" />
            {!isCollapsed && <span>users</span>}
          </Link>
          {/* Submenu should always be rendered, visibility controlled by hover */}
          <ul className={`submenu ${isSubmenuVisible ? "visible" : ""}`}>
            <li>
              <Link to="/admin/users/add">Add user</Link>
            </li>
            <li>
              <Link to="/admin/users/list">List Users</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <Link to="/admin/subscription" className="link">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            {!isCollapsed && <span>subscription</span>}
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/admin" className="link">
            <FontAwesomeIcon icon={faHome} className="icon" />
            {!isCollapsed && <span>Home</span>}
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/admin/messages" className="link">
            <FontAwesomeIcon icon={faInfoCircle} className="icon" />
            {!isCollapsed && <span>Messages</span>}
          </Link>
        </li>
        <li
          className="menu-item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link className="link">
            <FontAwesomeIcon icon={faCog} className="icon" />
            {!isCollapsed && <span>users</span>}
          </Link>
          {/* Submenu should always be rendered, visibility controlled by hover */}
          <ul className={`submenu ${isSubmenuVisible ? "visible" : ""}`}>
            <li>
              <Link to="/admin/users/add">Add user</Link>
            </li>
            <li>
              <Link to="/admin/users/list">List Users</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <Link to="/admin/subscription" className="link">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            {!isCollapsed && <span>subscription</span>}
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/admin" className="link">
            <FontAwesomeIcon icon={faHome} className="icon" />
            {!isCollapsed && <span>Home</span>}
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/admin/messages" className="link">
            <FontAwesomeIcon icon={faInfoCircle} className="icon" />
            {!isCollapsed && <span>Messages</span>}
          </Link>
        </li>
        <li
          className="menu-item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link className="link">
            <FontAwesomeIcon icon={faCog} className="icon" />
            {!isCollapsed && <span>users</span>}
          </Link>
          {/* Submenu should always be rendered, visibility controlled by hover */}
          <ul className={`submenu ${isSubmenuVisible ? "visible" : ""}`}>
            <li>
              <Link to="/admin/users/add">Add user</Link>
            </li>
            <li>
              <Link to="/admin/users/list">List Users</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <Link to="/admin/subscription" className="link">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            {!isCollapsed && <span>subscription</span>}
          </Link>
        </li>
      </ul>

      {/* Tooltip */}
      <div className="tooltip-container">
        <button className="tooltip-button" data-tooltip="Click me!">
          {!isCollapsed && <span>Hover me</span>}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
