import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {

    const animationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.5 },
        }),
    };

    const lineVariants = {
        hidden: { width: 0 },
        visible: {
            width: "100%",
            transition: { duration: 0.5 },
        },
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-16 px-4">
            {/* Vision */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center mb-12 max-w-3xl"
            >
                <motion.h1 className="text-4xl font-bold mb-4" variants={animationVariants} custom={0}>
                    Our Vision
                </motion.h1>
                <motion.div className="bg-blue-500 h-1 mx-auto mb-4" variants={lineVariants} />
                <motion.p className="text-lg text-gray-600" variants={animationVariants} custom={1}>
                    To lead a million Persons with Disabilities (PWDs) into flexible, respectful job opportunities.
                </motion.p>
            </motion.section>

            {/* Mission */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center mb-12 max-w-3xl"
            >
                <motion.h1 className="text-4xl font-bold mb-4" variants={animationVariants} custom={2}>
                    Our Mission
                </motion.h1>
                <motion.div className="bg-blue-500 h-1 mx-auto mb-4" variants={lineVariants} />
                <motion.p className="text-lg text-gray-600" variants={animationVariants} custom={3}>
                    We are creating an inclusive world where PWDs thrive in careers, enabled by skills, technology, and a strong community that makes career growth and success possible.
                </motion.p>
            </motion.section>

            {/* Values */}
    {/* Values */}
<motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="text-center mb-12 max-w-3xl"
>
    <motion.h1 className="text-4xl font-bold mb-4" variants={animationVariants} custom={4}>
        Our Values
    </motion.h1>
    <motion.div className="bg-blue-500 h-1 mx-auto mb-4" variants={lineVariants} />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
            {
                title: "Leadership for Opportunity",
                description: "We are committed to leading the way in creating respectful and flexible job opportunities for Persons with Disabilities, setting the standard for inclusive hiring practices across industries.",
            },
            {
                title: "Possibility and Progress",
                description: "We believe in creating possibilities that enable every PWD to achieve meaningful career growth. Our initiatives are driven by the potential we see in each individual and the progress we create for our partners.",
            },
            {
                title: "Community of Inclusion",
                description: "Our work centers on building a cohesive community where PWDs, employers, and partners contribute to each other’s growth and success. We create networks that lead collaboration, understanding, and shared purpose.",
            },
            {
                title: "Integrity and Trust",
                description: "We uphold integrity in all interactions, building trust through transparent and ethical practices. We respect each partner and individual, ensuring fairness and accountability in our work.",
            },
            {
                title: "Commitment to Impact",
                description: "Our mission is to drive real outcomes that benefit PWDs and the organizations we serve. We focus on measurable results that create lasting change for our stakeholders and fulfill our vision of an inclusive world.",
            },
            {
                title: "Respect for Every Contribution",
                description: "We value each person’s achievements and potential, recognizing that every effort brings us closer to our shared goals. Celebrating contributions, we nurture a culture of acknowledgment and appreciation.",
            },
        ].map((value, index) => (
            <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 5}
                variants={animationVariants}
            >
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
            </motion.div>
        ))}
    </div>
</motion.section>


            {/* Company Overview */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center mb-12 max-w-3xl"
            >
                <motion.h1 className="text-4xl font-bold mb-4" variants={animationVariants} custom={11}>
                    Company Overview
                </motion.h1>
                <motion.div className="bg-blue-500 h-1 mx-auto mb-4" variants={lineVariants} />
                <motion.p className="text-lg text-gray-600" variants={animationVariants} custom={12}>
                    Rohini is dedicated to creating pathways for Persons with Disabilities (PWDs) to thrive in the workforce by connecting them with corporates, government, and skilling partners. Focused on flexibility, respect, and skill alignment, Rohini leads a future where PWDs contribute meaningfully to the workforce. Through our PWD Talent Bank and targeted skilling programs, we provide access to roles that contribute to both personal and business goals, delivering outcomes for companies and enriching lives across communities.
                </motion.p>
            </motion.section>

            {/* Meet the Founder */}
            <section className="py-10">
                <h2 className="text-3xl font-bold mb-6 text-center">Meet the Founder</h2>
                <motion.div
                    className="flex flex-col items-center text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={13}
                    variants={animationVariants}
                >
                    <img
                        src="https://media.licdn.com/dms/image/v2/D4D03AQGdOoXYO-_nOw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729965678971?e=1736380800&v=beta&t=T7rU4NtJx18ThZpeagmJLKB4J50L7wMCa-aBTUS_-Vw"
                        alt="Founder"
                        className="w-32 h-32 rounded-full mb-4"
                        loading="lazy"
                    />
                    <h3 className="text-2xl font-semibold">Akshay Sarode</h3>
                    <p className="text-gray-600 mt-2">Founder & CEO</p>
                    <p className="text-gray-600 mt-4">
                        Advisory, Flexi Talent, Trainings, and Capital for Growing Companies
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default AboutPage;
