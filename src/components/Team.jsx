import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
    const teamMembers = [
        {
            name: "dummy-1",
            role: "CFO",
            image: "https://via.placeholder.com/150",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat nostrum quod cupiditate?",
        },
        {
            name: "dummy-2",
            role: "COO",
            image: "https://via.placeholder.com/150",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat nostrum quod cupiditate?",
        },
        {
            name: "dummy-3",
            role: "CTO",
            image: "https://via.placeholder.com/150",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci deserunt harum odio.",
        }
    ];

    const animationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3, // Add delay based on the index
                duration: 1, // Make the animation slower
            },
        }),
    };

    return (
        <div className="py-10">
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    Meet the Founder
                </h2>
                <div className="flex flex-col items-center text-center">
                    <img
                        src="https://media.licdn.com/dms/image/v2/D4D03AQGdOoXYO-_nOw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729965678971?e=1736380800&v=beta&t=T7rU4NtJx18ThZpeagmJLKB4J50L7wMCa-aBTUS_-Vw"
                        alt="Founder"
                        className="w-32 h-32 rounded-full mb-4"
                    />
                    <h3 className="text-2xl font-semibold">Akshay Sarode</h3>
                    <p className="text-gray-600 mt-2">Founder & CEO</p>
                    <p className="text-gray-600 mt-4">
                        Advisory, Flexi Talent, Trainings and Capital for Growing Companies
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section>
                <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            className="text-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={index}
                            variants={animationVariants}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                            <p className="text-gray-600 mt-2">{member.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Team;
