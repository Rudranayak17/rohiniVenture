import React from 'react';
import { motion } from 'framer-motion';

const Story = ({ candidateName, storyContent, imageUrl, sharelink }) => {
  // Limit the length of the story content
  const maxLength = 1000; // Set the desired max length for the story content
  const truncatedContent = storyContent.length > maxLength ? `${storyContent.substring(0, maxLength)}...` : storyContent;

  // Animation variants for Framer Motion
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Slow down the animation for a smoother effect
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row border p-4 rounded-lg shadow-lg mb-6 min-w-[300px] min-h-[200px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={animationVariants}
    >
      <div className="md:w-1/2 md:pr-4">
        <img src={imageUrl} alt={candidateName} className="w-full h-auto rounded-lg mb-4 md:mb-0" />
      </div>
      <div className="md:w-1/2 md:pl-4">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">{candidateName}</h3>
        <p className="text-gray-600">{truncatedContent}</p>
        <a 
          href={sharelink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline mt-2 inline-block"
        >
          Learn More
        </a>
      </div>
    </motion.div>
  );
};

export default Story;
