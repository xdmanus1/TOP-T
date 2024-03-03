// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Header.jsx';
import LandingPage from './LandingPage.jsx';
import AboutPage from './about.jsx';
import PortfolioPage from './ChatPage.jsx';
import OrderPage from './OrderPage.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/PortfolioPage" element={<PortfolioPage />} />
        <Route path="/OrderPage" element={<OrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
