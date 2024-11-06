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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, qui. Aspernatur sed nemo sit deleniti distinctio! Iure, aliquid. Aliquam, nulla ipsum debitis dolorem doloribus vero nemo ad. Alias, ut facere!
                </motion.p>
                {/* <motion.button
                    className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    onClick={() => navigate('/apply')}
                >
                    Apply Now
                </motion.button> */}
  <motion.button className="group relative h-16 w-64 flex items-center justify-center text-base font-bold text-gray-50 bg-sky-800 border rounded-lg overflow-hidden hover:bg-sky-300 hover:text-sky-900 hover:underline hover:underline-offset-4 hover:decoration-2 duration-500"  onClick={() => navigate('/apply')} initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}>
  <span class="relative z-20">Apply Now</span>
{/*   
  <!-- Primary Circle --> */}
  <span class="absolute right-1 top-1 w-12 h-12 bg-sky-400 rounded-full blur-lg group-hover:blur-none transition-all duration-700 transform group-hover:scale-125 group-hover:-translate-y-2"></span>
  
  {/* <!-- Secondary Circle --> */}
  <span class="absolute right-8 top-3 w-20 h-20 bg-cyan-600 rounded-full blur-xl group-hover:blur-md transition-all duration-1000 transform group-hover:scale-150 group-hover:-translate-x-3"></span>
  
  {/* <!-- Border effect --> */}
  <span class="absolute inset-0 border border-transparent rounded-lg group-hover:border-sky-300 transition-all duration-500"></span>
</motion.button>


            </div>
        </section>
    );
};

export default HomeSection;
