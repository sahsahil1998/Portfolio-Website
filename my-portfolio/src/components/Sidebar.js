import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import '../css/sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/">
              <i className="fa-solid fa-house"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <i className="fa-solid fa-user-tie"></i> About Me
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <i className="fa-solid fa-briefcase"></i> Projects
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <i className="fa-solid fa-envelope"></i> Contact
            </Link>
          </li>
        </ul>
      </nav>
      <ThemeToggle />
    </div>
  );
};

export default Sidebar;