import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import Header from './components/Header';
//import About from './components/About';
//import Vision from './components/Vision';
//import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import OrionLogo from './assets/Orion-Labs-Modern-Design.svg';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <header className="bg-gray-800 p-5 flex justify-between items-center">
          <img src={OrionLogo} alt="Orion Labs Logo" className="w-12 h-12" />
          <nav className="flex space-x-5">
            <Link to="/" className="hover:text-blue-400">Home</Link>
            <Link to="/about" className="hover:text-blue-400">About</Link>
            <Link to="/contact-us" className="hover:text-blue-400">Contact Us</Link>
          </nav>
        </header>

        <main className="p-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;