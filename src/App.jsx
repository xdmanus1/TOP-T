// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import statement
import Navbar from './Header.jsx';
import LandingPage from './LandingPage.jsx';
import AboutPage from './about.jsx'; // Updated import statement for AboutPage component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<LandingPage />} /> {/* Updated Route declaration */}
        <Route path="/About" element={<AboutPage />} /> {/* Updated Route declaration */}
      </Routes>
    </Router>
  );
}

export default App;
