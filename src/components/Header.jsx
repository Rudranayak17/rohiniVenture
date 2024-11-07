// src/components/Header.js
import React, { useState } from 'react';
import logo from "../assets/logo.jpeg";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact } from 'react-icons/fa'; // Import React icon

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants
  const drawerVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      x: 100, // Off-screen
      transition: { duration: 0.3 },
    },
  };

  return (
    <header className="bg-white w-full shadow-md z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Title */}
        <div className="text-2xl font-bold flex items-center">
          <img src={logo} alt="Rohini Venture Logo" className="w-20 h-20 mr-2" />

          <Link to="/" className="text-blue-600">Rohini Venture</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={toggleDrawer}>
          <button className="text-blue-600 focus:outline-none">
            &#9776; {/* Unicode for hamburger icon */}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li><Link to="/jobs" className="hover:text-blue-600">Jobs</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
            <li><Link to="/apply" className="hover:text-blue-600">Apply</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
            {/* <li><Link to="/cmykpy" className="hover:text-blue-600">CMYKPY</Link></li> */}
          </ul>
        </nav>
      </div>

      {/* Drawer Menu for Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg absolute top-16 right-0 w-48 z-20"
            initial="closed"
            animate="open"
            exit="closed"
            variants={drawerVariants}
          >
            <ul className="flex flex-col space-y-2 p-4">
              <li><Link to="/jobs" className="hover:text-blue-600" onClick={toggleDrawer}>Jobs</Link></li>
              <li><Link to="/about" className="hover:text-blue-600" onClick={toggleDrawer}>About</Link></li>
              <li><Link to="/apply" className="hover:text-blue-600" onClick={toggleDrawer}>Apply</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600" onClick={toggleDrawer}>Contact</Link></li>
              <li><Link to="/cmykpy" className="hover:text-blue-600" onClick={toggleDrawer}>CMYKPY</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
