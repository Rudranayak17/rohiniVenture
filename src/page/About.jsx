import React, { useMemo } from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
    const teamMembers = useMemo(() => [
        { name: "dummy-1", role: "CFO", image: "https://via.placeholder.com/150", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat nostrum quod cupiditate?" },
        { name: "dummy-2", role: "COO", image: "https://via.placeholder.com/150", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat nostrum quod cupiditate?" },
        { name: "dummy-3", role: "CTO", image: "https://via.placeholder.com/150", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci deserunt harum odio." }
    ], []);

    const animationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.5 }, // Reduced duration and delay
        }),
    };

    const lineVariants = {
        hidden: { width: 0 },
        visible: {
            width: "100%",
            transition: { duration: 0.5 }, // Reduced duration
        },
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-16 px-4">
            {/* Introduction */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center mb-12 max-w-3xl"
            >
                <motion.h1 className="text-4xl font-bold mb-4" variants={animationVariants} custom={0}>
                    About our website
                </motion.h1>
                <motion.div className="bg-blue-500 h-1 mx-auto mb-4" variants={lineVariants} />
                <motion.p className="text-lg text-gray-600" variants={animationVariants} custom={1}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eos maiores, praesentium atque ipsum accusamus quasi numquam porro, sunt repellendus natus illo incidunt in. Inventore eius officia dolores molestiae expedita?
                </motion.p>
            </motion.section>

            {/* Key Features */}
            <section className="mb-12 max-w-5xl">
                <h2 className="text-3xl font-bold mb-6 text-center">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Array(6).fill("").map((_, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={index + 2} // Adjust delay
                            variants={animationVariants}
                        >
                            <h3 className="text-xl font-semibold mb-4">Lorem ipsum dolor sit amet.</h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda excepturi rerum quod fugiat reiciendis facilis consequatur suscipit quidem, quis velit.
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Meet the Founder */}
            <section className="py-10">
                <h2 className="text-3xl font-bold mb-6 text-center">Meet the Founder</h2>
                <motion.div
                    className="flex flex-col items-center text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={8}
                    variants={animationVariants}
                >
                    <img
                        src="https://media.licdn.com/dms/image/v2/D4D03AQGdOoXYO-_nOw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729965678971?e=1736380800&v=beta&t=T7rU4NtJx18ThZpeagmJLKB4J50L7wMCa-aBTUS_-Vw"
                        alt="Founder"
                        className="w-32 h-32 rounded-full mb-4"
                        loading="lazy" // Lazy loading for images
                    />
                    <h3 className="text-2xl font-semibold">Akshay Sarode</h3>
                    <p className="text-gray-600 mt-2">Founder & CEO</p>
                    <p className="text-gray-600 mt-4">
                        Advisory, Flexi Talent, Trainings and Capital for Growing Companies
                    </p>
                </motion.div>
            </section>

            {/* Our Team */}
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
                            custom={9 + index}
                            variants={animationVariants}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                                loading="lazy" // Lazy loading for images
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

export default AboutPage;
