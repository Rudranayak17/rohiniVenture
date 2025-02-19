import React from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Get in Touch</h1>
        <p className="text-lg opacity-90 mt-3">
          We'd love to hear from you! Send us a message, and we'll respond as soon as possible.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", text: "contact@example.com" },
                  { icon: Phone, title: "Phone", text: "+1 (555) 123-4567" },
                  { icon: MapPin, title: "Location", text: "123 Business Street, New York, NY 10001" },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    text: "Mon-Fri: 9 AM - 6 PM | Sat: 10 AM - 4 PM",
                  },
                ].map(({ icon: Icon, title, text }, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <Icon className="w-7 h-7 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-medium">{title}</h3>
                      <p className="text-gray-600">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://via.placeholder.com/600x300"
                alt="Map location"
                className="w-full h-64 object-cover"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              {[
                { label: "Full Name", type: "text", placeholder: "John Doe" },
                { label: "Email", type: "email", placeholder: "john@example.com" },
                { label: "Subject", type: "text", placeholder: "How can we help?" },
              ].map(({ label, type, placeholder }, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
                  <input
                    type={type}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder={placeholder}
                  />
                </div>
              ))}

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2 shadow-md transition"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
