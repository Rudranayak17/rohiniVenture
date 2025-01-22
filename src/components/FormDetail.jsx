import React, { useState } from "react";
import { motion } from "framer-motion";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    profilePicture: null,
    professionalSummary: "",
    education: "",
    workExperience: [
      { jobTitle: "", company: "", duration: "", responsibilities: "" },
    ],
    skills: [],
    preferredJobFunctions: [],
    interview: "",
    employmentPreferences: "",
    availability: "",

    resume: null,
    coverLetter: null,
    
    consent: false,
    udid: "",
    disabilityCertificate: null,
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value, type, files, checked, multiple } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else if (type === "select-multiple") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: Array.from(e.target.selectedOptions, (option) => option.value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
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
        type: "spring",
        stiffness: 300,
      },
    },
    buttonTap: {
      scale: 0.95,
    },
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const formatLabel = (key) => {
    return key
      .replace(/([A-Z])/g, " $1") // Add space before capital letters
      .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter
  };

  return (
    <div className="flex-1 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Application Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={0}
          variants={animationVariants}
        >
          <label className="block text-gray-700 capitalize">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
            maxLength="50"
          />
        </motion.div>

        {/* Email */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={animationVariants}
        >
          <label className="block text-gray-700 capitalize">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          />
        </motion.div>

        {/* Phone */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={2}
          variants={animationVariants}
        >
          <label className="block text-gray-700 capitalize">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
            pattern="[0-9]{10,15}"
          />
        </motion.div>

        {/* Password */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={3}
          variants={animationVariants}
        >
          <label className="block text-gray-700 capitalize">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
            minLength="8"
          />
        </motion.div>

        {/* Confirm Password */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={4}
          variants={animationVariants}
        >
          <label className="block text-gray-700 capitalize">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
            minLength="8"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={0}
          variants={animationVariants}
        >
          <label className="block text-gray-700 capitalize">education</label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
            maxLength="50"
          />
        </motion.div>
        {/* Work Experience */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={5}
          variants={animationVariants}
        >
          <label className="block text-gray-700 capitalize">
            Work Experience
          </label>
          {formData.workExperience.map((work, index) => (
            <div key={index} className="space-y-4">
              <input
                type="text"
                name={`jobTitle-${index}`}
                value={work.jobTitle}
                onChange={(e) => {
                  const updatedWorkExperience = [...formData.workExperience];
                  updatedWorkExperience[index].jobTitle = e.target.value;
                  setFormData({
                    ...formData,
                    workExperience: updatedWorkExperience,
                  });
                }}
                placeholder="Job Title"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name={`company-${index}`}
                value={work.company}
                onChange={(e) => {
                  const updatedWorkExperience = [...formData.workExperience];
                  updatedWorkExperience[index].company = e.target.value;
                  setFormData({
                    ...formData,
                    workExperience: updatedWorkExperience,
                  });
                }}
                placeholder="Company"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name={`duration-${index}`}
                value={work.duration}
                onChange={(e) => {
                  const updatedWorkExperience = [...formData.workExperience];
                  updatedWorkExperience[index].duration = e.target.value;
                  setFormData({
                    ...formData,
                    workExperience: updatedWorkExperience,
                  });
                }}
                placeholder="Duration"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                name={`responsibilities-${index}`}
                value={work.responsibilities}
                onChange={(e) => {
                  const updatedWorkExperience = [...formData.workExperience];
                  updatedWorkExperience[index].responsibilities =
                    e.target.value;
                  setFormData({
                    ...formData,
                    workExperience: updatedWorkExperience,
                  });
                }}
                placeholder="Responsibilities"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={6}
          variants={animationVariants}
        >
          <label className="block text-gray-700 capitalize">Skills</label>
          <select
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            multiple
            required
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Digital Sales">Digital Sales</option>
            <option value="Marketing">Marketing</option>

            <option value="Finance">Finance</option>
            <option value="Content Development">Content Development</option>
            <option value="Graphic Designer">Graphic Designer</option>
            {/* Add more options as needed */}
          </select>
        </motion.div>

        {/* Preferred Job Functions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={7}
          variants={animationVariants}
        >
          <label className="block text-gray-700 capitalize">
            Preferred Job Functions
          </label>
          <select
            name="preferredJobFunctions"
            value={formData.preferredJobFunctions}
            onChange={handleChange}
            multiple
            required
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Software Developer">Software Developer</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="Product Manager">Product Manager</option>
            {/* Add more options as needed */}
          </select>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={8}
          variants={animationVariants}
        >
          <label className="block text-gray-700 capitalize">
            Interview available
          </label>
          <div className="  justify-center ">
            {/* Adds horizontal gap between radio buttons */}
            <div className="flex items-center">
              <input
                type="radio"
                name="interview"
                value="Part-time"
                onChange={handleChange}
                checked={formData.interview === "Part-time"}
                className="mr-2"
              />
              <label>online</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="interview"
                value="Remote"
                onChange={handleChange}
                checked={formData.interview === "Remote"}
                className="mr-2"
              />
              <label>offline</label>
            </div>
          </div>
        </motion.div>

        {/* Employment Preferences */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={8}
          variants={animationVariants}
        >
          <label className="block text-gray-700 capitalize">
            Employment Preferences
          </label>
          <div className="">
            {" "}
            {/* Adds horizontal gap between radio buttons */}
            <div className="flex items-center">
              <input
                type="radio"
                name="employmentPreferences"
                value="Part-time"
                onChange={handleChange}
                checked={formData.employmentPreferences === "Part-time"}
                className="mr-2"
              />
              <label>Part-time</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="employmentPreferences"
                value="Remote"
                onChange={handleChange}
                checked={formData.employmentPreferences === "Remote"}
                className="mr-2"
              />
              <label>Remote</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="employmentPreferences"
                value="Hybrid"
                onChange={handleChange}
                checked={formData.employmentPreferences === "Hybrid"}
                className="mr-2"
              />
              <label>Hybrid</label>
            </div>
          </div>
        </motion.div>

        {/* Availability */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={9}
          variants={animationVariants}
        >
          <label className="block text-gray-700 capitalize">Availability</label>
          <input
            type="date"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </motion.div>

        {/* Desired Salary Range */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          custom={10}
          variants={animationVariants}
        >
          <label className="block text-gray-700 capitalize">
            Desired Salary Range
          </label>
          <input
            type="text"
            name="desiredSalaryRange"
            value={formData.desiredSalaryRange}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter salary range"
          />
        </motion.div> */}

        {/* Resume Upload */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={11}
          variants={animationVariants}
        >
          <label className="block text-gray-700 capitalize">
            Resume Upload
          </label>
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            required
            accept=".pdf,.doc,.docx"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </motion.div>

        {/* Cover Letter Upload */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={12}
          variants={animationVariants}
        >
          <label className="block text-gray-700 capitalize">
            Cover Letter Upload (Optional)
          </label>
          <input
            type="file"
            name="coverLetter"
            onChange={handleChange}
            accept=".pdf,.doc,.docx"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </motion.div>

        {/* UDID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={14}
          variants={animationVariants}
        >
          <label className="block text-gray-700 capitalize">
            UDID (if applicable)
          </label>
          <input
            type="text"
            name="udid"
            value={formData.udid}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            maxLength="15"
          />
        </motion.div>

        {/* Disability Certificate Upload */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={15}
          variants={animationVariants}
        >
          <label className="block text-gray-700 capitalize">
            Disability Certificate (if applicable)
          </label>
          <input
            type="file"
            name="disabilityCertificate"
            onChange={handleChange}
            accept=".pdf,.doc,.docx"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={16}
          variants={animationVariants}
        >
          <div>
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
            />
            <label>I consent to the terms and data policies</label>
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={17}
          variants={animationVariants}
        >
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
            variants={animationVariants.buttonHover}
            whileTap={animationVariants.buttonTap}
          >
            Submit Application
          </button>
        </motion.div>
      </form>
    </div>
  );
};

export default Form;
