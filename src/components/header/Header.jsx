import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBriefcase, FaMobileAlt, FaPalette, FaBars } from "react-icons/fa";
import LOGO from "../../assets/logo.jpeg";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const links = [
    { to: "/", label: "Home", icon: <FaHome className="mr-2" /> },
    { to: "/jobs", label: "Jobs", icon: <FaBriefcase className="mr-2" /> },
    { to: "/apply", label: "Apply", icon: <FaMobileAlt className="mr-2" /> },
    { to: "/cmykpy", label: "CMYKPY", icon: <FaPalette className="mr-2" /> },
  ];

  return (
    <header
      className={`bg-white shadow-lg ${
        isVisible ? "animate-fadeIn" : "opacity-0"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={LOGO}
            alt="Company Logo"
            className="w-24 h-24 mr-3 transition-transform duration-300 ease-in-out"
          />
          <span className="text-gray-700 text-2xl font-bold group-hover:text-indigo-600 transition duration-300 ease-in-out">
            Rohini Venture
          </span>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="block md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <FaBars size={24} />
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="flex items-center text-gray-600 text-lg font-semibold hover:text-indigo-600 transition-all duration-300 ease-in-out hover:scale-105"
            >
              {link.icon} {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 py-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block py-2 text-gray-600 text-lg font-semibold hover:text-indigo-600 transition-all duration-300 ease-in-out"
              onClick={() => setIsMenuOpen(false)} // Close menu after clicking
            >
              {link.icon} {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
