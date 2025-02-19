import React, { useState } from 'react';
import { Search, Building2, GraduationCap, FileCheck, Bell } from 'lucide-react';

const InternshipSchemePage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const schemes = [
    {
      id: 1,
      title: "National Apprenticeship Training Scheme (NATS)",
      company: "Ministry of Education",
      approvalNo: "GOV/2024/NATS/001",
      duration: "12 months",
      stipend: "₹12,000 - ₹15,000",
      positions: ["Engineering", "Management", "Digital Marketing"],
      deadline: "March 30, 2025",
      status: "Active",
      description: "Government initiative for fresh graduates to gain industrial experience through practical training."
    },
    {
      id: 2,
      title: "Digital India Internship Program",
      company: "Ministry of Electronics & IT",
      approvalNo: "GOV/2024/DI/157",
      duration: "6 months",
      stipend: "₹10,000",
      positions: ["Software Development", "UI/UX Design", "Data Analysis"],
      deadline: "April 15, 2025",
      status: "Active",
      description: "Internship program focused on digital transformation projects across government sectors."
    },
    {
      id: 3,
      title: "Research & Innovation Fellowship",
      company: "CSIR Labs",
      approvalNo: "GOV/2024/CSIR/089",
      duration: "24 months",
      stipend: "₹25,000",
      positions: ["Research", "Laboratory Work", "Documentation"],
      deadline: "May 1, 2025",
      status: "Upcoming",
      description: "Research-based internship program for postgraduate students in scientific laboratories."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Government Approved Internship Schemes</h1>
      
          </div>
        </div>
      </header>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search schemes..."
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Durations</option>
              <option>6 Months</option>
              <option>12 Months</option>
              <option>24 Months</option>
            </select>
            <select className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Departments</option>
              <option>Engineering</option>
              <option>IT</option>
              <option>Research</option>
            </select>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {['all', 'active', 'upcoming', 'closed'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Schemes List */}
        <div className="space-y-6">
          {schemes.map((scheme) => (
            <div key={scheme.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{scheme.title}</h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Building2 className="w-4 h-4 mr-1" />
                      {scheme.company}
                    </div>
                    <div className="flex items-center">
                      <FileCheck className="w-4 h-4 mr-1" />
                      {scheme.approvalNo}
                    </div>
                    <div className="flex items-center">
                      <GraduationCap className="w-4 h-4 mr-1" />
                      {scheme.duration}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{scheme.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {scheme.positions.map((position, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {position}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    scheme.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {scheme.status}
                  </span>
                  <p className="text-sm text-gray-500 mt-2">Deadline: {scheme.deadline}</p>
                  <p className="text-sm font-medium text-gray-900 mt-2">Stipend: {scheme.stipend}</p>
                </div>
              </div>
              <div className="mt-4 flex justify-end space-x-4">
                <button className="text-blue-600 hover:text-blue-800 font-medium">View Details</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipSchemePage;