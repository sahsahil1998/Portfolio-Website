import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-switch-wrapper" onClick={toggleTheme}>
      {theme === 'night-mode' ? (
        <FontAwesomeIcon icon={faSun} aria-hidden="true" />
      ) : (
        <FontAwesomeIcon icon={faMoon} aria-hidden="true" />
      )}
    </div>
  );
};

export default ThemeToggle;