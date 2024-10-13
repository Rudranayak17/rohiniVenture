import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBriefcase, FaMobileAlt, FaPalette } from "react-icons/fa";
import LOGO from "../../assets/logo.jpeg";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header
      className={`bg-white shadow-lg ${
        isVisible ? "animate-fadeIn" : "opacity-0"
      }`}
    >
      <nav className="container mx-auto  px-6 flex justify-center">
        {/* Navigation Links */}
        <div className="flex space-x-8 ">
          <Link to="/" className="flex items-center ">
            <img
              src={LOGO}
              alt="Company Logo"
              className="w-32 h-32 mr-3 group-hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <span className="text-gray-700 text-2xl font-bold group-hover:text-indigo-600 transition duration-300 ease-in-out">
              Rohini Venture
            </span>
          </Link>

          <Link
            to="/"
            className="flex items-center text-gray-600 text-lg font-semibold hover:text-indigo-600 transition-all duration-300 ease-in-out hover:scale-105"
          >
            <FaHome className="mr-2" /> Home
          </Link>

          <Link
            to="/jobs"
            className="flex items-center text-gray-600 text-lg font-semibold hover:text-indigo-600 transition-all duration-300 ease-in-out hover:scale-105"
          >
            <FaBriefcase className="mr-2" /> Jobs
          </Link>

          <Link
            to="/apply"
            className="flex items-center text-gray-600 text-lg font-semibold hover:text-indigo-600 transition-all duration-300 ease-in-out hover:scale-105"
          >
            <FaMobileAlt className="mr-2" /> Apply
          </Link>

          <Link
            to="/cmykpy"
            className="flex items-center text-gray-600 text-lg font-semibold hover:text-indigo-600 transition-all duration-300 ease-in-out hover:scale-105"
          >
            <FaPalette className="mr-2" /> CMYKPY
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
