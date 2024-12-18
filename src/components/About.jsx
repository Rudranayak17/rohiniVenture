import React, { useState } from 'react';
import { motion } from 'framer-motion';
import intro from "../assets/intro.mp4";
import { IoVolumeMute, IoVolumeHigh } from 'react-icons/io5';

const About = () => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative min-h-screen py-10">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={intro}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute top-5 right-5 z-10 bg-white bg-opacity-80 p-2 rounded-full text-gray-800 shadow-md"
      >
        {isMuted ? <IoVolumeMute size={30} /> : <IoVolumeHigh size={30} />}
      </button>

      {/* Content */}
      <div className="relative container mx-auto px-6 flex flex-col justify-end min-h-screen">
        {/* Section about Rohini Venture */}
        <motion.div
          className="text-center text-white"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold mb-4">About Rohini Venture</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Rohini Venture is a platform dedicated to empowering Persons with Disabilities (PWDs) by connecting them with flexible, rewarding, and relevant job opportunities. Partnering with leading companies, we foster inclusion, diversity, and business growth. Our mission is to create 1 million job opportunities for PWDs, transforming both businesses and lives.
          </p>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="mt-10 text-center text-white"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold mb-4">Our Achievements</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <AchievementCard number="0" description="Trained Employees" />
            <AchievementCard number="0" description="Cities Reached" />
            <AchievementCard number="0" description="Corporate Clients" />
            <AchievementCard number="0" description="Job Sites Supported" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const AchievementCard = ({ number, description }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg p-6 text-center w-64 md:w-48 lg:w-64"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-bold text-blue-600">{number}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default About;
