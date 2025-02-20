
import React from "react";

import { Loader2, MoreHorizontal, ArrowUpDown } from "lucide-react";
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
import { useGetJobProviderQuery } from "@/redux/api/job";

const JobProvider = () => {
  const { data: jobsData, isLoading, isError } = useGetJobProviderQuery();
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

  if (isLoading) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-64 flex items-center justify-center text-red-500">
        Error loading jobs. Please try again later.
      </div>
    );
  }

  if (!jobsData || jobsData.length === 0) {
    return (
      <div className="w-full h-64 flex items-center justify-center text-gray-500">
        No jobs found.
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto">
      <Table className="min-w-max w-full">
        <TableHeader>
          <TableRow>
            <TableHead
              onClick={() => handleSort("jobTitle")}
              className="cursor-pointer"
            >
              Job Title <ArrowUpDown className="inline ml-2 h-4 w-4" />
            </TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Employment Type</TableHead>
            <TableHead>Experience</TableHead>
            <TableHead>Salary Range</TableHead>
            <TableHead>Qualifications</TableHead>
            <TableHead>Skills</TableHead>
            <TableHead>Responsibilities</TableHead>
            <TableHead>Benefits</TableHead>
            <TableHead>Accommodations</TableHead>
            <TableHead
              onClick={() => handleSort("deadline")}
              className="cursor-pointer"
            >
              Deadline <ArrowUpDown className="inline ml-2 h-4 w-4" />
            </TableHead>
            <TableHead>Posted By</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobsData.map((job) => (
            <TableRow key={job._id}>
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
              <TableCell>{job.qualifications}</TableCell>
              <TableCell>
                <div className="flex gap-1 flex-wrap">
                  {job.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>{job.responsibilities}</TableCell>
              <TableCell>{job.benefits}</TableCell>
              <TableCell>{job.accommodations}</TableCell>
              <TableCell>{formatDate(job.deadline)}</TableCell>
              <TableCell>{job.userID.username}</TableCell>
              <TableCell>{job.userID.email}</TableCell>
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

export default JobProvider;
