import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import {
  logout,
  selectCurrentIsAuth,
  selectCurrentUser,
} from "../redux/reducer/auth";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectCurrentIsAuth);
  const user = useSelector(selectCurrentUser);
  // console.log(user.role)
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
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
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="text-blue-600 font-medium">
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="text-red-600 font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/signin"
              className="text-blue-600 font-medium flex items-center gap-2"
            >
              <FaUserCircle className="text-lg" />
              <span>Sign In</span>
            </Link>
          )}
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
            {user?.role === "admin" && (
              <li>
                <Link to="/admin" className="hover:text-blue-600">
                  Admin
                </Link>
              </li>
            )}
            {user?.role === "jobSeeker" && (
              <li>
                <Link to="/apply" className="hover:text-blue-600">
                  Apply
                </Link>
              </li>
            )}
            {user?.role === "jobProvider" && (
              <li>
                <Link to="/apply-hiring" className="hover:text-blue-600">
                  Apply Hiring
                </Link>
              </li>
            )}

            <li>
              <Link to="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <Link to="/profile" className="hover:text-blue-600">
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-red-600 px-4 py-2 rounded-md hover:text-red-700"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/signin"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  <FaUserCircle />
                  <span>Sign In</span>
                </Link>
              </li>
            )}
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
                  onClick={toggleDrawer}
                  className="hover:text-blue-600"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={toggleDrawer}
                  className="hover:text-blue-600"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/scheme"
                  onClick={toggleDrawer}
                  className="hover:text-blue-600"
                >
                  Scheme
                </Link>
              </li>

              {user?.role === "jobSeeker" && (
                <li>
                  <Link
                    to="/apply"
                    onClick={toggleDrawer}
                    className="hover:text-blue-600"
                  >
                    Apply
                  </Link>
                </li>
              )}

              {user?.role === "jobProvider" && (
                <li>
                  <Link
                    to="/apply-hiring"
                    onClick={toggleDrawer}
                    className="hover:text-blue-600"
                  >
                    Apply Hiring
                  </Link>
                </li>
              )}

              <li>
                <Link
                  to="/contact"
                  onClick={toggleDrawer}
                  className="hover:text-blue-600"
                >
                  Contact
                </Link>
              </li>
              <li className="pt-2 border-t border-gray-200">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/profile"
                      onClick={toggleDrawer}
                      className="hover:text-blue-600"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="text-red-600 hover:text-red-700 block w-full text-left mt-2"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to="/signin"
                    onClick={toggleDrawer}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    <FaUserCircle />
                    <span>Sign In</span>
                  </Link>
                )}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
