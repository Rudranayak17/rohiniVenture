import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100  py-10">
      <div className="container mx-auto px-6">
   
        {/* New section about Rohini Venture */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-center mb-4">About Rohini Venture</h2>
          <p className="text-lg text-gray-700 mb-6">
            Rohini Venture is a Possibility Platform dedicated to enabling People with Disabilities (PWD) by connecting them to flexible, rewarding, and relevant job opportunities. We collaborate with leading companies to provide the best talent, fostering inclusion, diversity, and business growth. Our mission is to create 1 million jobs for PWD candidates, transforming businesses and lives with infinite potential.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-center mb-4">Our Achievements</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <AchievementCard number="0" description="Trained Employees" />
            <AchievementCard number="0" description="Cities" />
            <AchievementCard number="0" description="Clients" />
            <AchievementCard number="0" description="Sites" />
          </div>
        </div>
      </div>
    </div>
  );
};

const AchievementCard = ({ number, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center w-64">
      <h3 className="text-2xl font-bold text-blue-600">{number}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default About;
