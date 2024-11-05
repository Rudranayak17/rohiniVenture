import { motion } from 'framer-motion';

const HomeSection = ({ images, currentImage }) => {
    return (
        <section
            id="home"
            className="relative bg-fixed bg-cover bg-center h-screen transition-all duration-1000"
            style={{ backgroundImage: `url(${images[currentImage]})` }}
        >
            <div className="absolute inset-0 bg-black opacity-45"></div>
            <div className="relative h-full flex flex-col items-center justify-end text-center text-white px-4 pb-28">
                <motion.h1
                    className="text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: -50 }}  // Starting state
                    animate={{ opacity: 1, y: 0 }}    // Final state
                    transition={{ duration: 0.5 }}     // Animation duration
                >
                    Welcome to Rohini Venture
                </motion.h1>
                <motion.p
                    className="text-xl max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}   // Starting state
                    animate={{ opacity: 1, y: 0 }}     // Final state
                    transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with a slight delay
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, qui. Aspernatur sed nemo sit deleniti distinctio! Iure, aliquid. Aliquam, nulla ipsum debitis dolorem doloribus vero nemo ad. Alias, ut facere!
                </motion.p>
            </div>
        </section>
    );
};

export default HomeSection;
