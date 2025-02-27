import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
  end: number;
  label: string;
  duration?: number;
  delay?: number;
}

const Counter: React.FC<CounterProps> = ({ end, label, duration = 2, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = end / (duration * 60);
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        start += increment;
        setCount(Math.min(Math.floor(start), end));

        if (start >= end) {
          clearInterval(interval);
        }
      }, 16.67); // ~60fps

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [inView, end, duration, delay]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay }}
    >
      <h3 className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">{count}+</h3>
      <p className="text-lg text-gray-700">{label}</p>
    </motion.div>
  );
};

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="achievements" className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Through dedication and partnership, we've made significant strides in creating inclusive workplaces across India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter end={500} label="Trained Employees" delay={0.1} />
          <Counter end={25} label="Cities Reached" delay={0.2} />
          <Counter end={75} label="Corporate Clients" delay={0.3} />
          <Counter end={120} label="Job Sites Supported" delay={0.4} />
        </div>
      </div>
    </section>
  );
};

export default Achievements;