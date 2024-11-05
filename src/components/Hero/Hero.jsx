import React from 'react';
import { motion } from 'framer-motion';
import BookSlider from '../../assets/image7.jpeg';

const Hero = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="md:w-2/3 bg-gray-100 rounded-lg p-6 shadow-md mb-4 xl:mb-0"
        variants={containerVariants}
      >
        <h1 className="text-2xl font-bold text-center mb-4 text-subhead"> 
          मुख्यमंत्री युवा कार्य प्रशिक्षण योजना (CMYKPY)
        </h1>
        <p className="text-gray-700 mb-4">
          बेरोजगार तरुणांच्या आर्थिक विकासासाठी मोफत कौशल्य प्रशिक्षण देण्यासाठी महाराष्ट्र सरकारने मुख्यमंत्री युवा कार्य प्रशिक्षण योजना सुरू केली आहे.
          राज्यातील जे तरुण बेरोजगार आहेत आणि ज्यांची आर्थिक परिस्थिती चांगली नाही, अशांना महाराष्ट्र मुख्यमंत्री युवा कार्य प्रशिक्षण योजनेचा लाभ घेता येईल.
          या योजनेद्वारे, प्रत्येक पात्र तरुणांना प्रत्येक महिन्याला 10,000 रुपये शिक्षण शुल्क देण्याचीही सरकारची तरतूद आहे.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-subhead">योजनेचे उद्दिष्ट</h2>
        <p className="text-gray-700 mb-4">
          राज्यातील युवकांना चांगल्या नोकऱ्या आणि उपजीविकेच्या संधींसाठी आवश्यक कामाचे प्रशिक्षण देऊ न त्यांना नोकऱ्या मिळवून
          देण्यासाठी मदत करणे तसेच स्वावलंबी व सक्षम बनवणे हे महाराष्ट्र शासनाचे उद्दिष्ट आहे.
          या योजनेच्या माध्यमातून सर्व बेरोजगार तरुणांना मोफत कौशल्य प्रशिक्षणासोबतच दरमहा 10,000 रुपये शिक्षण शुल्क देखील शासनाकडून दिले जाणार आहे.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-subhead">पात्रता निकष</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>अर्जदार हा मूळचा महाराष्ट्राचा असावा.</li>
          <li>अर्जदार तरुणाचे वय १८ - ३५ वर्षे च्या दरम्यान असावे.</li>
          <li>
            अर्जदाराने प्रथम 
            <a 
              href="https://cmykpy.mahaswayam.gov.in/UserLogin.aspx" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 no-underline hover:underline"
            >
              येथे नोंदणी करणे आवश्यक आहे
            </a>.
          </li>
          <li>अर्जदार तरुण बेरोजगार असणे आवश्यक आहे.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2 text-subhead">लाभ</h2>
        <p className="text-gray-700 mb-4">
          लाभार्थ्यांना शासनाकडून ६ महिने, खालीलप्रमाणे दरमहा विद्यावेतन दिले जाईल:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>१२ वी पास - रू. ६०००</li>
          <li>ITI-डिप्लोमा - रू. ८०००</li>
          <li>पदवीधर-द्वीपदवीधर - रू. १०,०००</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2 text-subhead">आवश्यक कागदपत्रे</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>आधार कार्ड</li>
          <li>शाळेचे प्रमाणपत्र</li>
          <li>पासपोर्ट आकाराचा फोटो</li>
          <li>रहिवासी प्रमाणपत्र</li>
          <li>बँक पासबुक</li>
          <li>ओळखपत्र</li>
          <li>मोबाईल नंबर आधार नंबर व बँकेशी संलग्न केलेला असावा (दोन्हीकडे एकच मोबाइल नंबर असावा)</li>
        </ul>
      </motion.div>

      {/* Slider section */}
      <motion.div
        className="md:w-1/3 relative max-w-md h-3/4 overflow-hidden mx-auto mt-auto mb-auto"
        variants={imageVariants}
      >
        <img
          src={BookSlider}
          alt=""
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
