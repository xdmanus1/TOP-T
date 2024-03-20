import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Header.jsx';
import LandingPage from './LandingPage.jsx';
import AboutPage from './about.jsx';
import PortfolioPage from './ChatPage.jsx';
import OrderPage from './OrderPage.jsx';
import TodoList from './TodoList.jsx';
import Login from './GoogleLogin.jsx';
import AdminPanel from './AdminPanel.jsx';
import DevlogPage from './DevlogPage.jsx';
import './firebase.js'; // Import firebase.js here

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/PortfolioPage" element={<PortfolioPage />} />
        <Route path="/OrderPage" element={<OrderPage />} />
        <Route path="/TodoList" element={<TodoList />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
        <Route path="/DevlogPage" element={<DevlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
