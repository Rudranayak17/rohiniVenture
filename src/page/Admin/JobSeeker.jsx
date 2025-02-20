import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useGetJobSeekerQuery } from "@/redux/api/job";

const JobSeeker = () => {
  const { data, isLoading, isError } = useGetJobSeekerQuery();

  if (isLoading) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-64 flex items-center justify-center text-red-500">
        Error loading job seekers.
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="w-full h-64 flex items-center justify-center text-gray-500">
        No job seekers found.
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto">
      <Table className="min-w-max w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Education</TableHead>
            <TableHead>Work Experience</TableHead>
            <TableHead>Skills</TableHead>
            <TableHead>Preferred Job Functions</TableHead>
            <TableHead>Interview Type</TableHead>
            <TableHead>Employment Preferences</TableHead>
            <TableHead>Availability</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((seeker) => (
            <TableRow key={seeker._id}>
              <TableCell className="font-medium">{seeker.fullName}</TableCell>
              <TableCell>{seeker.email}</TableCell>
              <TableCell>{seeker.phone}</TableCell>
              <TableCell>{seeker.education}</TableCell>
              <TableCell>
                {seeker.workExperience && seeker.workExperience.length > 0 ? (
                  <>
                    <div>
                      <strong>{seeker.workExperience[0].jobTitle}</strong> @{" "}
                      {seeker.workExperience[0].company}
                    </div>
                    <div className="text-sm text-gray-500">
                      {seeker.workExperience[0].duration}
                    </div>
                  </>
                ) : (
                  "N/A"
                )}
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {seeker.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                {seeker.preferredJobFunctions.join(", ")}
              </TableCell>
              <TableCell>{seeker.interview}</TableCell>
              <TableCell>{seeker.employmentPreferences}</TableCell>
              <TableCell>
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(new Date(seeker.availability))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default JobSeeker;
