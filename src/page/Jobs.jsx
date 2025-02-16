import React from 'react';
import { MapPin, Briefcase, Calendar, Building2, IndianRupee } from 'lucide-react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 flex flex-col h-full">
      <div className="p-4 flex-grow">
        {/* Header - Job Title and Apply Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 flex-grow">{job.title}</h2>
          <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm">
            Apply Now
          </button>
        </div>

        {/* Company and Location */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Building2 className="shrink-0" size={16} />
            <span className="font-medium truncate">{job.company}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="shrink-0" size={16} />
            <span className="truncate">{job.location}</span>
          </div>
        </div>

        {/* Job Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Briefcase className="shrink-0" size={16} />
            <span className="truncate">{job.type}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="shrink-0" size={16} />
            <span className="truncate">{job.experience}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <IndianRupee className="shrink-0" size={16} />
            <span className="truncate">{job.salary}</span>
          </div>
        </div>

        {/* Skills Required */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Skills Required</h3>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Accommodations */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Accommodations Available</h3>
          <div className="flex flex-wrap gap-2">
            {job.accommodations.map((accommodation, index) => (
              <span
                key={index}
                className="bg-green-50 text-green-600 px-2 py-1 rounded-full text-xs"
              >
                {accommodation}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-gray-200 p-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            Posted {job.postedDate}
          </span>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
};

const ExampleJobList = () => {
  const sampleJob = {
    title: "Software Developer",
    company: "TechCorp India",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "2-4 years",
    salary: "8-12 LPA",
    skills: ["React", "Node.js", "TypeScript", "MongoDB"],
    accommodations: ["Screen Reader Compatible", "Flexible Hours", "Remote Work"],
    postedDate: "2 days ago"
  };

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <JobCard job={sampleJob} />
        <JobCard job={sampleJob} />
        <JobCard job={sampleJob} />
      </div>
    </div>
  );
};

export default ExampleJobList;