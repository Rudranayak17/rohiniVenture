import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Accessibility, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Achievements', to: 'achievements' },
    { name: 'Partners', to: 'partners' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex items-center cursor-pointer"
          >
            <Accessibility className="w-8 h-8 mr-2 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">Rohini Venture</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-700 hover:text-primary-600 font-medium cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-3">
            <a href="#" className="btn btn-outline">
              Apply as Job Seeker
            </a>
            <a href="#" className="btn btn-primary">
              Hire Talent
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-700 hover:text-primary-600 font-medium py-2 cursor-pointer"
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-3 pt-2">
            <a href="#" className="btn btn-outline w-full text-center">
              Apply as Job Seeker
            </a>
            <a href="#" className="btn btn-primary w-full text-center">
              Hire Talent
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;