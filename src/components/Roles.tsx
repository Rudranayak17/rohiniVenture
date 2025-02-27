import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FileText, 
  BarChart, 
  Headphones, 
  Database, 
  Monitor, 
  Edit, 
  CheckCircle, 
  Users 
} from 'lucide-react';

const Roles: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const roles = [
    {
      icon: <FileText className="w-6 h-6 text-primary-500" />,
      title: "Administrative Assistant"
    },
    {
      icon: <BarChart className="w-6 h-6 text-primary-500" />,
      title: "Digital Marketing Specialist"
    },
    {
      icon: <Headphones className="w-6 h-6 text-primary-500" />,
      title: "Customer Service Representative"
    },
    {
      icon: <Database className="w-6 h-6 text-primary-500" />,
      title: "Data Entry Specialist"
    },
    {
      icon: <Monitor className="w-6 h-6 text-primary-500" />,
      title: "IT Support Technician"
    },
    {
      icon: <Edit className="w-6 h-6 text-primary-500" />,
      title: "Content Writer"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary-500" />,
      title: "Quality Assurance Analyst"
    },
    {
      icon: <Users className="w-6 h-6 text-primary-500" />,
      title: "Human Resources Assistant"
    }
  ];

  return (
    <section id="roles" className="section-padding bg-white">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Roles We Excel In</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We specialize in connecting talented PWDs with a variety of roles across industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              className="card flex items-center p-6 hover:bg-primary-50 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="mr-4">{role.icon}</div>
              <h3 className="font-medium">{role.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roles;