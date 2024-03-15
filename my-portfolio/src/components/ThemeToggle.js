import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  // Determine the hover text based on the current theme
  const hoverText = theme === 'night-mode' ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <div className="theme-switch-wrapper" onClick={toggleTheme} title={hoverText}>
      {theme === 'night-mode' ? (
        <FontAwesomeIcon icon={faSun} aria-hidden="true" />
      ) : (
        <FontAwesomeIcon icon={faMoon} aria-hidden="true" />
      )}
    </div>
  );
};

export default ThemeToggle;