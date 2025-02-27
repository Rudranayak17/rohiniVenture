import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Users, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            About Rohini Venture
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-700">
            Rohini Venture is a platform dedicated to empowering Persons with Disabilities (PWDs) by connecting them with flexible, rewarding, and relevant job opportunities. Partnering with leading companies, we foster inclusion, diversity, and business growth. Our mission is to create 1 million job opportunities for PWDs, transforming both businesses and lives.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Heart className="w-12 h-12 text-primary-500" />,
              title: "Our Mission",
              description: "To create 1 million job opportunities for PWDs, transforming both businesses and lives through inclusive employment."
            },
            {
              icon: <Users className="w-12 h-12 text-primary-500" />,
              title: "Our Community",
              description: "Building a supportive network of employers, PWDs, and advocates committed to workplace inclusion and accessibility."
            },
            {
              icon: <Target className="w-12 h-12 text-primary-500" />,
              title: "Our Approach",
              description: "Personalized matching of talented PWDs with employers who value diversity, skills, and unique perspectives."
            },
            {
              icon: <Award className="w-12 h-12 text-primary-500" />,
              title: "Our Impact",
              description: "Transforming workplaces into inclusive environments where PWDs can thrive professionally and personally."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="card text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;