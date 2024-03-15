import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './components/pages/HomePage';
import About from './components/pages/AboutPage';
import Projects from './components/pages/ProjectsPage';
import Contact from './components/pages/ContactPage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/projects" element={<Layout><Projects /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;