import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Jobs = () => {
  const naviagte=useNavigate()
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-10">
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
        Work From Home Opportunities!
      </motion.h1>
      
      {/* Descriptive text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        className="text-lg text-gray-600 mb-6 text-center"
      >
        We are looking for 400 PWD candidates aged 18 to 35 to join BVG.
      </motion.p>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        className="text-md text-gray-500 mb-4 text-center"
      >
        This is a work-from-home opportunity offering a stipend of ₹10,000 and future business opportunities with BVG.
      </motion.p>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        className="text-md text-gray-500 text-center"
      >
        Apply now and take the first step toward building your career with us!
      </motion.p>
      
      {/* Apply Button */}
      <motion.button
      onClick={()=>naviagte("/apply")}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
        className="bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-600 transition"
      >
        Apply Now
      </motion.button>
    </div>
  );
};

export default Jobs;
