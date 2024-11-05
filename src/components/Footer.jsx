import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'; // Importing social media icons
import image from "../assets/image.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Connect with Us Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Connect with Us</h2>
            <p className="mt-2">
              Phone: <a href="tel:+11234567890" className="text-blue-400 hover:underline">(123) 456-7890</a>
            </p>
            <p>
              Email: <a href="mailto:contact@example.com" className="text-blue-400 hover:underline">contact@example.com</a>
            </p>
          </div>

          {/* Address Section - Responsive Design */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Address</h2>
            <p className="mt-2 text-sm md:text-base">BVG House, Premier Plaza, Old Mumbai - Pune Hwy, Anand Nagar, Chinchwad, Pune, Pimpri-Chinchwad, Maharashtra 411019</p>
          </div>

          {/* Associate Partner Section with Bigger Icon and Text Below */}
          <div className="flex flex-col items-center">
            <img src={image} alt="QuickHire Logo" className="w-20 h-20 object-contain mb-2" />
            <h2 className="text-lg font-bold">Our brand QuickHire</h2>
          </div>
        </div>

        {/* Social Media Icons Section */}
        <div className="flex justify-center mt-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-3 text-blue-400 hover:text-blue-300">
            <FaInstagram size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-3 text-blue-400 hover:text-blue-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="mx-3 text-blue-400 hover:text-blue-300">
            <FaYoutube size={24} />
          </a>
          <a href="https://www.linkedin.com/in/akshay-s-a8507a63/" target="_blank" rel="noopener noreferrer" className="mx-3 text-blue-400 hover:text-blue-300">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
