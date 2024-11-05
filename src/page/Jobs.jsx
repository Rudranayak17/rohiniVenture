import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Jobs = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Icon */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mb-4"
      >
        <FaBriefcase className="text-6xl text-blue-500" />
      </motion.div>
      
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="text-3xl font-bold mb-4"
      >
        Jobs Coming Soon!
      </motion.h1>
      
      {/* Descriptive text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        className="text-lg text-gray-600 mb-6 text-center"
      >
        We're working hard to bring you exciting job opportunities.
      </motion.p>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        className="text-md text-gray-500 mb-4 text-center"
      >
        Stay tuned for updates, and make sure to check back soon for the latest listings and career resources!
      </motion.p>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        className="text-md text-gray-500 text-center"
      >
        In the meantime, feel free to explore our other features and resources.
      </motion.p>
    </div>
  );
};

export default Jobs;
