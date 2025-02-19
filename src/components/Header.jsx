import React, { useState } from "react";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaUserCircle } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const drawerVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      x: 100,
      transition: { duration: 0.3 },
    },
  };

  return (
    <header className="bg-white w-full shadow-md z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Title */}
        <div className="text-2xl font-bold flex items-center">
          <img
            src={logo}
            alt="Rohini Venture Logo"
            className="w-12 h-12 mr-2"
          />
          <Link to="/" className="text-blue-600">
            Rohini Venture
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center gap-4">
          {/* Sign In Button for Mobile (Outside Drawer) */}
          <Link
            to="/signin"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <FaUserCircle className="text-lg" />
            <span>Sign In</span>
          </Link>
          <button
            className="text-blue-600 focus:outline-none p-2"
            onClick={toggleDrawer}
          >
            &#9776;
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center space-x-6">
            <li>
              <Link to="/jobs" className="hover:text-blue-600">
                Jobs
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/scheme" className="hover:text-blue-600">
                Scheme
              </Link>
            </li>
            <li>
              <Link to="/apply-hiring" className="hover:text-blue-600">
                Apply hiring
              </Link>
            </li>

            <li>
              <Link to="/apply" className="hover:text-blue-600">
                Apply
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/signin"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                <FaUserCircle />
                <span>Sign In</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
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
              <li>
                <Link
                  to="/jobs"
                  className="hover:text-blue-600"
                  onClick={toggleDrawer}
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-600"
                  onClick={toggleDrawer}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/scheme"
                  className="hover:text-blue-600"
                  onClick={toggleDrawer}
                >
                  Scheme
                </Link>
              </li>
              <li>
                <Link
                  to="/apply-hiring"
                  className="hover:text-blue-600"
                  onClick={toggleDrawer}
                >
                  apply-hiring
                </Link>
              </li>
              <li>
                <Link
                  to="/apply"
                  className="hover:text-blue-600"
                  onClick={toggleDrawer}
                >
                  Apply
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-600"
                  onClick={toggleDrawer}
                >
                  Contact
                </Link>
              </li>
              <li className="pt-2 border-t border-gray-200">
                <Link
                  to="/signin"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  onClick={toggleDrawer}
                >
                  <FaUserCircle />
                  <span>Sign In</span>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
