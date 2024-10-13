
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">About Our Company</h1>
        
        <p className="text-lg text-gray-700 mb-6">
          It all began with one man’s goal towards his nation’s progress. The man – Mr. Hanmant Gaikwad as an engineering student, in 1997, combined his two passions – one for India’s development and the other to help the poor and needy.
        </p>
        
        <p className="text-lg text-gray-700 mb-6">
          Bharat Vikas Pratishthan is a non-profit organisation launched by Mr. Gaikwad in 1993. It assists rural youth to utilise their skills and provide services to various establishments.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          From a single idea to offer easy employment to the nation, the NGO has bloomed into a full-fledged company. It has been following a steady path of progress over the past 2 decades.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          This has led it to emerge as the BVG Group, headquartered in Pune, Maharashtra, the largest integrated services enterprise in India. The company’s powerful objective is in tune with the government’s Swachh Bharat initiative.
        </p>

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
