import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
    whatsapp: '',
    email: '',
    position: '',
    subject: '',
    qualification: '',
    college: '',
    experience: '',
    currentSalary: '',
    expectedSalary: '',
    city: '',
    state: '',
    pincode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
    buttonHover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 300,
      },
    },
    buttonTap: {
      scale: 0.95,
    },
  };

  return (
    <div className="flex-1 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Application Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {Object.keys(formData).map((key, index) => (
          <motion.div
            key={key}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={animationVariants}
          >
            <label className="block text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
            {key === 'gender' ? (
              <select
                name={key}
                value={formData[key]}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="" disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            ) : (
              <input
                type={key === 'age' || key.includes('Salary') ? 'number' : 'text'}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                required={key !== 'qualification' && key !== 'college' && key !== 'experience'}
                pattern={key === 'whatsapp' ? "[0-9]{10}" : undefined}
                className="w-full p-2 border border-gray-300 rounded"
              />
            )}
          </motion.div>
        ))}
        <motion.button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          whileHover="buttonHover"
          whileTap="buttonTap"
          variants={animationVariants}
        >
          Submit
        </motion.button>
      </form>
    </div>
  );
};

export default Form;
