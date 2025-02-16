import React, { useState } from 'react';
import { 
  Building2, 
  Briefcase, 
  GraduationCap, 
  IndianRupee,
  Users,
  Calendar,
  MapPin
} from 'lucide-react';

const RecruitmentForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    department: '',
    positions: '',
    location: '',
    employmentType: 'full-time',
    experienceMin: '',
    experienceMax: '',
    salaryMin: '',
    salaryMax: '',
    qualifications: '',
    skills: '',
    responsibilities: '',
    benefits: '',
    deadline: '',
    accommodations: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Hiring Requirement</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Job Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Title *
              </label>
              <div className="flex items-center">
                <Briefcase className="text-gray-400 w-5 h-5 absolute ml-3" />
                <input
                  type="text"
                  name="jobTitle"
                  required
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="pl-10 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. Senior Software Developer"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department *
              </label>
              <div className="flex items-center">
                <Building2 className="text-gray-400 w-5 h-5 absolute ml-3" />
                <input
                  type="text"
                  name="department"
                  required
                  value={formData.department}
                  onChange={handleChange}
                  className="pl-10 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. Engineering"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Positions *
              </label>
              <div className="flex items-center">
                <Users className="text-gray-400 w-5 h-5 absolute ml-3" />
                <input
                  type="number"
                  name="positions"
                  required
                  value={formData.positions}
                  onChange={handleChange}
                  className="pl-10 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. 2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <div className="flex items-center">
                <MapPin className="text-gray-400 w-5 h-5 absolute ml-3" />
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="pl-10 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. Bangalore, India"
                />
              </div>
            </div>
          </div>

          {/* Employment Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Employment Type *
              </label>
              <select
                name="employmentType"
                required
                value={formData.employmentType}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience Required (Years) *
              </label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  name="experienceMin"
                  required
                  value={formData.experienceMin}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Min"
                />
                <input
                  type="number"
                  name="experienceMax"
                  required
                  value={formData.experienceMax}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Max"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Salary Range (LPA) *
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <IndianRupee className="text-gray-400 w-5 h-5 absolute ml-3" />
                  <input
                    type="number"
                    name="salaryMin"
                    required
                    value={formData.salaryMin}
                    onChange={handleChange}
                    className="pl-10 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Min"
                  />
                </div>
                <div className="flex items-center">
                  <IndianRupee className="text-gray-400 w-5 h-5 absolute ml-3" />
                  <input
                    type="number"
                    name="salaryMax"
                    required
                    value={formData.salaryMax}
                    onChange={handleChange}
                    className="pl-10 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Qualifications and Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Required Qualifications *
            </label>
            <div className="flex items-center">
              <GraduationCap className="text-gray-400 w-5 h-5 absolute ml-3" />
              <textarea
                name="qualifications"
                required
                value={formData.qualifications}
                onChange={handleChange}
                rows="3"
                className="pl-10 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="List required educational qualifications"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Required Skills *
            </label>
            <textarea
              name="skills"
              required
              value={formData.skills}
              onChange={handleChange}
              rows="3"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="List required technical skills and competencies"
            />
          </div>

          {/* Job Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Responsibilities *
            </label>
            <textarea
              name="responsibilities"
              required
              value={formData.responsibilities}
              onChange={handleChange}
              rows="4"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe the key responsibilities and duties"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Benefits & Perks
            </label>
            <textarea
              name="benefits"
              value={formData.benefits}
              onChange={handleChange}
              rows="3"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="List employee benefits and perks"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Application Deadline *
              </label>
              <div className="flex items-center">
                <Calendar className="text-gray-400 w-5 h-5 absolute ml-3" />
                <input
                  type="date"
                  name="deadline"
                  required
                  value={formData.deadline}
                  onChange={handleChange}
                  className="pl-10 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Workplace Accommodations
              </label>
              <input
                type="text"
                name="accommodations"
                value={formData.accommodations}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. Wheelchair accessible, flexible hours"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Requirement
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecruitmentForm;