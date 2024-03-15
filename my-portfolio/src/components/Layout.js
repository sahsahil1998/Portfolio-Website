import React from 'react';
import Sidebar from './Sidebar'; 
import '../css/layout.css';

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;