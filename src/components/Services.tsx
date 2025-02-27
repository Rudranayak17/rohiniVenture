import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Users, 
  Briefcase, 
  BookOpen, 
  Heart 
} from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Users className="w-12 h-12 text-primary-500" />,
      title: "Inclusive Hiring",
      description: "Committed to creating equal employment opportunities through specialized PWD recruitment"
    },
    {
      icon: <Briefcase className="w-12 h-12 text-primary-500" />,
      title: "Customized Job Matching",
      description: "Expert matching of candidate skills with role requirements and accessibility needs"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-primary-500" />,
      title: "Accessible Training",
      description: "Comprehensive training programs designed for diverse learning needs"
    },
    {
      icon: <Heart className="w-12 h-12 text-primary-500" />,
      title: "Supportive Environment",
      description: "Creating inclusive workplaces with necessary accommodations and support systems"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Rohini</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We specialize in connecting talented PWDs with employers who value diversity, creating meaningful partnerships that benefit everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card flex items-start p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mr-6 mt-1">{service.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;