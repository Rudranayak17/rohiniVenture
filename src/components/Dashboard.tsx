import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Users, 
  Briefcase, 
  Building, 
  UserCheck, 
  TrendingUp, 
  BarChart2, 
  PieChart,
  Calendar
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Mock data - in a real application, this would come from an API
  const [stats] = useState({
    totalJobSeekers: 1245,
    activeJobSeekers: 876,
    totalEmployers: 87,
    activeJobs: 134,
    placementsThisMonth: 42,
    placementsTotal: 523,
    successRate: 78,
    upcomingInterviews: 56
  });

  // Monthly placement data for chart visualization
  const monthlyData = [
    { month: 'Jan', placements: 32 },
    { month: 'Feb', placements: 38 },
    { month: 'Mar', placements: 45 },
    { month: 'Apr', placements: 40 },
    { month: 'May', placements: 35 },
    { month: 'Jun', placements: 48 },
  ];

  // Calculate the max value for the chart scaling
  const maxPlacements = Math.max(...monthlyData.map(item => item.placements));

  return (
    <section id="dashboard" className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Admin Dashboard</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Track job seeker and employer statistics to monitor our impact and growth.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { 
              title: "Total Job Seekers", 
              value: stats.totalJobSeekers, 
              icon: <Users className="w-8 h-8 text-primary-500" />,
              color: "bg-blue-50 text-blue-700"
            },
            { 
              title: "Active Employers", 
              value: stats.totalEmployers, 
              icon: <Building className="w-8 h-8 text-purple-500" />,
              color: "bg-purple-50 text-purple-700"
            },
            { 
              title: "Active Jobs", 
              value: stats.activeJobs, 
              icon: <Briefcase className="w-8 h-8 text-green-500" />,
              color: "bg-green-50 text-green-700"
            },
            { 
              title: "Total Placements", 
              value: stats.placementsTotal, 
              icon: <UserCheck className="w-8 h-8 text-orange-500" />,
              color: "bg-orange-50 text-orange-700"
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="card flex items-center p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className={`p-4 rounded-full ${stat.color.split(' ')[0]} mr-4`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-gray-600 text-sm">{stat.title}</p>
                <h3 className={`text-2xl font-bold ${stat.color.split(' ')[1]}`}>{stat.value.toLocaleString()}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts and Additional Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Monthly Placements Chart */}
          <motion.div
            className="card p-6 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Monthly Placements</h3>
              <BarChart2 className="w-5 h-5 text-gray-500" />
            </div>
            <div className="h-64 flex items-end space-x-6 pb-6 px-4">
              {monthlyData.map((item, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div 
                    className="w-full bg-primary-500 rounded-t-md transition-all duration-500"
                    style={{ 
                      height: `${(item.placements / maxPlacements) * 100}%`,
                      minHeight: '20px',
                      animation: inView ? `growUp 1s ease forwards ${index * 0.1}s` : 'none'
                    }}
                  ></div>
                  <div className="text-xs font-medium text-gray-600 mt-2">{item.month}</div>
                  <div className="text-sm font-semibold">{item.placements}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Performance Metrics */}
          <motion.div
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Performance</h3>
              <PieChart className="w-5 h-5 text-gray-500" />
            </div>
            <div className="space-y-6">
              {[
                { 
                  label: "Success Rate", 
                  value: `${stats.successRate}%`, 
                  icon: <TrendingUp className="w-5 h-5 text-green-500" />,
                  progress: stats.successRate
                },
                { 
                  label: "Active Job Seekers", 
                  value: `${Math.round((stats.activeJobSeekers / stats.totalJobSeekers) * 100)}%`, 
                  icon: <Users className="w-5 h-5 text-blue-500" />,
                  progress: Math.round((stats.activeJobSeekers / stats.totalJobSeekers) * 100)
                },
                { 
                  label: "Upcoming Interviews", 
                  value: stats.upcomingInterviews, 
                  icon: <Calendar className="w-5 h-5 text-purple-500" />,
                  progress: Math.round((stats.upcomingInterviews / stats.activeJobs) * 100)
                }
              ].map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      {metric.icon}
                      <span className="text-sm font-medium text-gray-700 ml-2">{metric.label}</span>
                    </div>
                    <span className="text-sm font-semibold">{metric.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: inView ? `${metric.progress}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Recent Activity and Job Seeker/Provider Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Job Seekers Table */}
          <motion.div
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Recent Job Seekers</h3>
              <Users className="w-5 h-5 text-gray-500" />
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skills</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { name: "Priya Sharma", skills: "Web Development", status: "Active" },
                    { name: "Rahul Verma", skills: "Data Entry", status: "Placed" },
                    { name: "Ananya Patel", skills: "Customer Service", status: "Interviewing" },
                    { name: "Vikram Singh", skills: "Content Writing", status: "Active" },
                  ].map((seeker, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{seeker.name}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{seeker.skills}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${seeker.status === 'Active' ? 'bg-green-100 text-green-800' : 
                            seeker.status === 'Placed' ? 'bg-blue-100 text-blue-800' : 
                            'bg-yellow-100 text-yellow-800'}`}>
                          {seeker.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-right">
              <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                View All Job Seekers →
              </button>
            </div>
          </motion.div>

          {/* Job Providers Table */}
          <motion.div
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Active Employers</h3>
              <Building className="w-5 h-5 text-gray-500" />
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Open Jobs</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Placements</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { company: "TechCorp", jobs: 12, placements: 8 },
                    { company: "GlobalSolutions", jobs: 5, placements: 3 },
                    { company: "InnovateNow", jobs: 7, placements: 5 },
                    { company: "FutureWorks", jobs: 3, placements: 2 },
                  ].map((employer, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{employer.company}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{employer.jobs}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{employer.placements}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-right">
              <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                View All Employers →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;