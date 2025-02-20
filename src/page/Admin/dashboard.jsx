import React from "react";
import DashboardLayout from "@/layout/DashboardLayout";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";

const JobDashboard = () => {
  // Sample data - replace with your actual data
  const jobs = [
    {
      jobTitle: "Senior Software Engineer",
      department: "Engineering",
      positions: 2,
      location: "New York, NY",
      employmentType: "full-time",
      experienceMin: 5,
      experienceMax: 8,
      salaryMin: 120000,
      salaryMax: 180000,
      skills: ["React", "Node.js", "TypeScript"],
      deadline: new Date("2025-03-15"),
      userid: "user123",
      username: "John Doe",
    },
    // Add more sample data as needed
  ];

  const [sortColumn, setSortColumn] = React.useState(null);
  const [sortOrder, setSortOrder] = React.useState("asc");

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const formatSalary = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(date));
  };

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              onClick={() => handleSort("jobTitle")}
              className="cursor-pointer"
            >
              Job Title <ArrowUpDown className="inline ml-2 h-4 w-4" />
            </TableHead>
            <TableHead
              onClick={() => handleSort("department")}
              className="cursor-pointer"
            >
              Department <ArrowUpDown className="inline ml-2 h-4 w-4" />
            </TableHead>
            <TableHead
              onClick={() => handleSort("location")}
              className="cursor-pointer"
            >
              Location <ArrowUpDown className="inline ml-2 h-4 w-4" />
            </TableHead>
            <TableHead>Employment Type</TableHead>
            <TableHead>Experience</TableHead>
            <TableHead>Salary Range</TableHead>
            <TableHead>Skills</TableHead>
            <TableHead
              onClick={() => handleSort("deadline")}
              className="cursor-pointer"
            >
              Deadline <ArrowUpDown className="inline ml-2 h-4 w-4" />
            </TableHead>
            <TableHead>Posted By</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.map((job, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{job.jobTitle}</TableCell>
              <TableCell>{job.department}</TableCell>
              <TableCell>{job.location}</TableCell>
              <TableCell>
                <Badge variant="outline" className="capitalize">
                  {job.employmentType}
                </Badge>
              </TableCell>
              <TableCell>{`${job.experienceMin}-${job.experienceMax} years`}</TableCell>
              <TableCell>{`${formatSalary(job.salaryMin)} - ${formatSalary(
                job.salaryMax
              )}`}</TableCell>
              <TableCell>
                <div className="flex gap-1 flex-wrap">
                  {job.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>{formatDate(job.deadline)}</TableCell>
              <TableCell>{job.username}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Job</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      Delete Job
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const Dashboard = () => {
  return (
    <DashboardLayout>
      <JobDashboard />
    </DashboardLayout>
  );
};

export default Dashboard;
