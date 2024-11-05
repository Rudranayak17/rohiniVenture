import React, { useState } from 'react';
import { motion } from 'framer-motion';
import contactus from "../assets/contact-us.gif";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to API)
    console.log(formData);
  };

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row w-full max-w-5xl">
        {/* Google Maps Embed on the left */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2 text-center text-blue-600">Our Location</h3>
          <iframe
            title="Google Maps Location"
            className="w-full h-[70%] border-0 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.088746313018!2d73.79879051520187!3d18.59365748730395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e00363b225%3A0xe94d3647b1888a9f!2sBVG%20House%2C%20Premier%20Plaza%2C%20Old%20Mumbai%20-%20Pune%20Hwy%2C%20Anand%20Nagar%2C%20Chinchwad%2C%20Pune%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411019!5e0!3m2!1sen!2sin!4v1601447858510!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Add the GIF on the right */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img src={contactus} alt="Contact Us" className="w-80 h-72 object-cover rounded-lg shadow-lg mb-6" />
          
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 w-full max-w-md"
            initial="hidden"
            whileInView="visible"
            variants={animationVariants}
          >
            <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition duration-200 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
