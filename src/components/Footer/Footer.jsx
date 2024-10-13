import React from 'react';
import image from "../../assets/image.jpeg";

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
            <h2 className="text-lg font-bold">Associate Partner QuickHire</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
