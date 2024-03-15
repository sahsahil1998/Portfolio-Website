import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import '../css/sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <ThemeToggle />
    </div>
  );
};

export default Sidebar;