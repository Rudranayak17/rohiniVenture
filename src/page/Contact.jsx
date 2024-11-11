import React, { useState } from 'react';
import { motion } from 'framer-motion';
import contactus from "../assets/contact-us.gif";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    jobTitle: '',
    jobDescription: '',
    employmentType: '',  // New state for employment type
    numberOfPositions: '',
    requiredSkills: [],
    experienceLevel: '',
    budgetRange: '',
    projectDurationStart: '',
    projectDurationEnd: '',
    requirements: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMultiSelectChange = (e) => {
    const { options } = e.target;
    const selectedSkills = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedSkills.push(options[i].value);
      }
    }
    setFormData((prevData) => ({
      ...prevData,
      requiredSkills: selectedSkills,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to API)
    console.log(formData);
  };

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row w-full max-w-5xl">
        {/* Google Maps Embed on the left */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2 text-center text-blue-600">Our Location</h3>
          <iframe
            title="Google Maps Location"
            className="w-full h-[70%] border-0 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.088746313018!2d73.79879051520187!3d18.59365748730395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e00363b225%3A0xe94d3647b1888a9f!2sBVG%20House%2C%20Premier%20Plaza%2C%20Old%20Mumbai%20-%20Pune%20Hwy%2C%20Anand%20Nagar%2C%20Chinchwad%2C%20Pune%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411019!5e0!3m2!1sen!2sin!4v1601447858510!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Add the GIF on the right */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img src={contactus} alt="Contact Us" className="w-80 h-72 object-cover rounded-lg shadow-lg mb-6" />
          
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 w-full max-w-md"
            initial="hidden"
            whileInView="visible"
            variants={animationVariants}
          >
            <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold">Company Name </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              {/* Contact Person */}
              <div>
                <label className="block text-gray-700 font-semibold">Contact Person</label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold">Contact Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-gray-700 font-semibold">Contact Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              {/* Company Website */}
              <div>
                <label className="block text-gray-700 font-semibold">Company Website</label>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              {/* Job Title */}
              <div>
                <label className="block text-gray-700 font-semibold">Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              {/* Job Description */}
              <div>
                <label className="block text-gray-700 font-semibold">Job Description</label>
                <textarea
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              {/* Employment Type (Radio Buttons) */}
              <div>
                <label className="block text-gray-700 font-semibold">Employment Type</label>
                <div className="flex space-x-4">
                  <div>
                    <input
                      type="radio"
                      id="partTime"
                      name="employmentType"
                      value="Part-Time"
                      checked={formData.employmentType === 'Part-Time'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="partTime">Part-Time</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="remote"
                      name="employmentType"
                      value="Remote"
                      checked={formData.employmentType === 'Remote'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="remote">Remote</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="fullTime"
                      name="employmentType"
                      value="Full-Time"
                      checked={formData.employmentType === 'Full-Time'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="fullTime">Full-Time</label>
                  </div>
                </div>
              </div>

              {/* Number of Positions */}
              <div>
                <label className="block text-gray-700 font-semibold">Number of Positions</label>
                <input
                  type="number"
                  name="numberOfPositions"
                  value={formData.numberOfPositions}
                  onChange={handleChange}
                  min={1}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              {/* Required Skills */}
              <div>
                <label className="block text-gray-700 font-semibold">Required Skills</label>
                <select
                  name="requiredSkills"
                  multiple
                  value={formData.requiredSkills}
                  onChange={handleMultiSelectChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
          <option value="Digital Sales">Digital Sales</option>
          <option value="Marketing">Marketing</option>

          <option value="Finance">Finance</option>
          <option value="Content Development">Content Development</option>
          <option value="Graphic Designer">Graphic Designer</option>
                </select>
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-gray-700 font-semibold">Experience Level</label>
                <select
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                  <option value="junior">Junior</option>
                  <option value="mid">Mid</option>
                  <option value="senior">Senior</option>
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-gray-700 font-semibold">Budget Range</label>
                <input
                  type="text"
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              {/* Project Duration */}
              <div className="flex space-x-4">
                <div>
                  <label className="block text-gray-700 font-semibold">Project Start Date</label>
                  <input
                    type="date"
                    name="projectDurationStart"
                    value={formData.projectDurationStart}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">Project End Date</label>
                  <input
                    type="date"
                    name="projectDurationEnd"
                    value={formData.projectDurationEnd}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
              </div>

              {/* Requirements */}
              <div>
                <label className="block text-gray-700 font-semibold">Additional Requirements</label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-gray-700 font-semibold">Upload Resume</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-500 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
