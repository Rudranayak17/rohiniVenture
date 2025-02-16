// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";

import About from '../components/About';
import StoriesList from '../components/StoriesList';
import Team from '../components/Team';
import HomeSection from '../components/HomeSection';

function Home() {
    const benefits = [
        {
          title: "Inclusive Hiring",
          description: "Committed to creating equal employment opportunities through specialized PWD recruitment",
          icon: "Users"
        },
        {
          title: "Customized Job Matching",
          description: "Expert matching of candidate skills with role requirements and accessibility needs",
          icon: "Target"
        },
        {
          title: "Accessible Training",
          description: "Comprehensive training programs designed for diverse learning needs",
          icon: "GraduationCap"
        },
        {
          title: "Supportive Environment",
          description: "Creating inclusive workplaces with necessary accommodations and support systems",
          icon: "Heart"
        }
      ];
    
      const hiringSteps = [
        {
          step: 1,
          title: "Initial Consultation",
          description: "We understand your organization's needs and diversity goals"
        },
        {
          step: 2,
          title: "Role Analysis",
          description: "Identify suitable positions and required accommodations"
        },
        {
          step: 3,
          title: "Candidate Selection",
          description: "Match qualified candidates based on skills and accessibility requirements"
        },
        {
          step: 4,
          title: "Inclusive Onboarding",
          description: "Support smooth transition with specialized training and accommodation setup"
        }
      ];
    
      const popularRoles = [
        "Administrative Assistant",
        "Digital Marketing Specialist",
        "Customer Service Representative",
        "Data Entry Specialist",
        "IT Support Technician",
        "Content Writer",
        "Quality Assurance Analyst",
        "Human Resources Assistant"
      ];
    
      const testimonials = [
        {
          name: "Sarah Chen",
          role: "HR Director",
          company: "TechCorp",
          text: "Rohini has transformed our hiring process, helping us build a truly inclusive workplace."
        },
        {
          name: "Raj Patel",
          role: "Successful Placement",
          company: "",
          text: "Thanks to Rohini, I found a role that perfectly matches my skills and accessibility needs."
        }
      ];
    
      const clients = [
        "TechCorp",
        "GlobalSolutions",
        "InnovateNow",
        "FutureWorks",
        "DigitalFirst"
      ];
    
      const partners = [
        "Disability Rights Network",
        "Accessible Workplace Alliance",
        "Inclusive Employment Initiative",
        "PWD Support Foundation"
      ];
    
    const images = [image3, image1, image4, image2, image5, image6];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [images.length]);

    const animationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
        <HomeSection currentImage={currentImage} images={images}/>

      

            <motion.div
                className="my-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                variants={animationVariants}
            >
                <About />
            </motion.div>

     


    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-6">
              Empowering Inclusive Workplaces Through Specialized Recruitment
            </h1>
            <p className="text-xl mb-8">
              Connecting talented individuals with disabilities to meaningful career opportunities
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
           work with us
            </button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Rohini</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How to Partner With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hiringSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-3xl font-bold text-blue-600 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Roles */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Roles We Excel In</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-blue-50 p-4 rounded-lg text-center"
              >
                {role}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Partners Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">
                  {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients & Partners */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Clients</h2>
              <div className="grid grid-cols-2 gap-4">
                {clients.map((client, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-100 p-4 rounded-lg text-center"
                  >
                    {client}
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Partners</h2>
              <div className="grid grid-cols-2 gap-4">
                {partners.map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-100 p-4 rounded-lg text-center"
                  >
                    {partner}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

        </>
    );
}

export default Home;
