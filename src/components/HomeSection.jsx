import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HomeSection = ({ images, currentImage }) => {
    const navigate = useNavigate();

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
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Welcome to Rohini Venture
                </motion.h1>
                <motion.p
                    className="text-xl max-w-3xl mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    At Rohini, we envision a world where Persons with Disabilities (PWDs) find meaningful, flexible, and respectful job opportunities. We are committed to building pathways for PWDs to thrive by connecting them with the skills, technology, and supportive community that make career growth and success possible.
                </motion.p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    {/* Apply as Hire Button */}
                    <motion.button
                        className="group relative h-16 w-full sm:w-64 flex items-center justify-center text-base font-bold text-gray-50 bg-sky-800 border rounded-lg overflow-hidden hover:bg-sky-300 hover:text-sky-900 hover:underline hover:underline-offset-4 hover:decoration-2 duration-500"
                        onClick={() => navigate('/contact')}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <span className="relative z-20">Apply as Hire</span>
                    </motion.button>

                    {/* Apply as Job Seeker Button */}
                    <motion.button
                        className="group relative h-16 w-full sm:w-64 flex items-center justify-center text-base font-bold text-gray-50 bg-sky-800 border rounded-lg overflow-hidden hover:bg-sky-300 hover:text-sky-900 hover:underline hover:underline-offset-4 hover:decoration-2 duration-500"
                        onClick={() => navigate('/apply')}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <span className="relative z-20">Apply as Job Seeker</span>
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default HomeSection;
