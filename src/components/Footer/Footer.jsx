import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Connect with Us</h2>
            <p className="mt-2">
              Phone: <a href="tel:+11234567890" className="text-blue-400 hover:underline">(123) 456-7890</a>
            </p>
            <p>
              Email: <a href="mailto:contact@example.com" className="text-blue-400 hover:underline">contact@example.com</a>
            </p>
            <p>Head Office: 123 Main St, City, Country</p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Address</h2>
            <p className="mt-2">456 Another St, City, Country</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
