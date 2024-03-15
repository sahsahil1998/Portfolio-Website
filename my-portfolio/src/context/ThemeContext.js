import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light-mode');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light-mode';
    setTheme(currentTheme);
    document.body.className = currentTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light-mode' ? 'night-mode' : 'light-mode';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};