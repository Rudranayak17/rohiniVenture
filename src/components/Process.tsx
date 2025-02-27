import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Process: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      number: "1",
      title: "Initial Consultation",
      description: "We understand your organization's needs and diversity goals"
    },
    {
      number: "2",
      title: "Role Analysis",
      description: "Identify suitable positions and required accommodations"
    },
    {
      number: "3",
      title: "Candidate Selection",
      description: "Match qualified candidates based on skills and accessibility requirements"
    },
    {
      number: "4",
      title: "Inclusive Onboarding",
      description: "Support smooth transition with specialized training and accommodation setup"
    }
  ];

  return (
    <section id="process" className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Partner With Us</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our streamlined process ensures a smooth experience for both employers and job seekers.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-200 -translate-x-1/2 z-0"></div>
          
          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:order-last md:pl-12'}`}>
                  <div className="card">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center my-4 md:my-0">
                  <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-last md:pl-12' : 'md:pr-12'}`}>
                  {index % 2 === 0 ? (
                    <div className="hidden md:block h-full"></div>
                  ) : (
                    <div className="card md:hidden">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;