import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect with Us</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Have questions or ready to start your inclusive hiring journey? Reach out to our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="card flex flex-col items-center text-center p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Phone className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">9359123713 and 9860401545</p>
          </motion.div>

          <motion.div
            className="card flex flex-col items-center text-center p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Mail className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">akshaysarode@rohiniventure.com</p>
          </motion.div>

          <motion.div
            className="card flex flex-col items-center text-center p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <MapPin className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-600">C5, Aboli Building, HDFC Colony, Chinchwad 411019</p>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      placeholder="enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      placeholder="example@gmail.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="How can we help you?"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full sm:w-auto">
                  Send Message
                </button>
              </form>
            </div>
            <div className="bg-primary-600 p-8 lg:p-12 text-white">
              <h3 className="text-2xl font-semibold mb-6">How We Can Help</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white text-primary-600 flex items-center justify-center font-bold text-sm mr-3">1</div>
                  <p>Connect with qualified PWD candidates for your open positions</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white text-primary-600 flex items-center justify-center font-bold text-sm mr-3">2</div>
                  <p>Get guidance on creating accessible workplaces</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white text-primary-600 flex items-center justify-center font-bold text-sm mr-3">3</div>
                  <p>Learn about government incentives for hiring PWDs</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white text-primary-600 flex items-center justify-center font-bold text-sm mr-3">4</div>
                  <p>Register as a job seeker to find suitable opportunities</p>
                </li>
              </ul>
              <div className="mt-8">
                <p className="mb-4">Ready to make a difference?</p>
                <a href="#" className="btn bg-white text-primary-600 hover:bg-gray-100">
                  Partner With Us
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;