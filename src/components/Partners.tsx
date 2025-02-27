import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Partners: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const clients = ["TechCorp", "GlobalSolutions", "InnovateNow", "FutureWorks", "DigitalFirst"];
  const partners = [
    "Disability Rights Network", 
    "Accessible Workplace Alliance", 
    "Inclusive Employment Initiative", 
    "PWD Support Foundation"
  ];

  return (
    <section id="partners" className="section-padding bg-white">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Network</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We collaborate with leading organizations committed to workplace inclusion and accessibility.
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Clients */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8">Our Clients</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span className="text-xl font-semibold text-gray-700">{client}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8">Our Partners</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center p-6 bg-primary-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span className="text-lg font-medium text-gray-800 text-center">{partner}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;