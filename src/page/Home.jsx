// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";

import About from '../components/About';
import StoriesList from '../components/StoriesList';
import Team from '../components/Team';
import HomeSection from '../components/HomeSection';

function Home() {
    const images = [image3, image1, image4, image2, image5, image6];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [images.length]);

    const animationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
        <HomeSection currentImage={currentImage} images={images}/>

            <motion.div
                className="my-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                variants={animationVariants}
            >
                <StoriesList />
            </motion.div>

            <motion.div
                className="my-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                variants={animationVariants}
            >
                <About />
            </motion.div>

            <motion.div
                className="my-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                variants={animationVariants}
            >
                <Team />
            </motion.div>
        </>
    );
}

export default Home;
