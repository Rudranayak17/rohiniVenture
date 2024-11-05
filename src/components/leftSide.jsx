import React from 'react';
import { motion } from 'framer-motion';

const Side = () => {
  const animationVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="flex-1 p-4 bg-white rounded-lg shadow-md"
      initial="hidden"
      whileInView="visible"
      variants={animationVariants}
    >
      <h2 className="text-2xl font-bold mb-4">Job Application</h2>
      <p className="mb-2">तुमच्या आवडीचा जॉब उपलब्ध नसल्यास apply करा.</p>
      <p className="mb-4">आपका पसंदीदा जॉब उपलब्ध नहीं है तो apply करे।</p>
      <p className="mb-4">Please complete the form to apply for a position with us.</p>
      <p>उपलब्ध जॉब्स पहा. उपलब्ध जॉब देखिये.</p>
    </motion.div>
  );
};

export default Side;
