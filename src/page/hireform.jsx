import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Building2,
  Briefcase,
  GraduationCap,
  IndianRupee,
  Users,
  Calendar,
  MapPin,
} from "lucide-react";
import { useJobProviderMutation } from "@/redux/api/job";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  jobTitle: yup.string().required("Job title is required"),
  department: yup.string().required("Department is required"),
  positions: yup
    .number()
    .required("Number of positions is required")
    .positive("Must be a positive number")
    .integer("Must be a whole number"),
  location: yup.string().required("Location is required"),
  employmentType: yup
    .string()
    .oneOf(["full-time", "part-time", "contract", "internship"])
    .required("Employment type is required"),
  experienceMin: yup
    .number()
    .required("Minimum experience is required")
    .min(0, "Must be at least 0"),
  experienceMax: yup
    .number()
    .required("Maximum experience is required")
    .min(yup.ref("experienceMin"), "Must be greater than minimum experience"),
  salaryMin: yup
    .number()
    .required("Minimum salary is required")
    .positive("Must be a positive number"),
  salaryMax: yup
    .number()
    .required("Maximum salary is required")
    .min(yup.ref("salaryMin"), "Must be greater than minimum salary"),
  qualifications: yup.string().required("Qualifications are required"),
  skills: yup.string().required("Skills are required"),
  responsibilities: yup.string().required("Responsibilities are required"),
  benefits: yup.string(),
  deadline: yup
    .date()
    .required("Application deadline is required")
    .min(new Date(), "Deadline must be in the future"),
  accommodations: yup.string(),
});

const RecruitmentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      employmentType: "full-time",
    },
  });

  const [createJobSeeker, { isLoading }] = useJobProviderMutation();
  const onSubmit = async (data) => {
    // console.log("Form submitted:", data);
    try {
      const resp = await createJobSeeker(data).unwrap();
      console.log(resp);
      if (resp) {
        toast.success("job request created successfully ");
        console.log(resp);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
    // Add your form submission logic here
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Create Hiring Requirement
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Basic Job Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Title *
              </label>
              <div className="flex items-center">
                <Briefcase className="text-gray-400 w-5 h-5 absolute ml-3" />
                <input
                  {...register("jobTitle")}
                  className={`pl-10 w-full rounded-md border ${
                    errors.jobTitle ? "border-red-500" : "border-gray-300"
                  } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="e.g. Senior Software Developer"
                />
              </div>
              {errors.jobTitle && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.jobTitle.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department *
              </label>
              <div className="flex items-center">
                <Building2 className="text-gray-400 w-5 h-5 absolute ml-3" />
                <input
                  {...register("department")}
                  className={`pl-10 w-full rounded-md border ${
                    errors.department ? "border-red-500" : "border-gray-300"
                  } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="e.g. Engineering"
                />
              </div>
              {errors.department && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.department.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Positions *
              </label>
              <div className="flex items-center">
                <Users className="text-gray-400 w-5 h-5 absolute ml-3" />
                <input
                  type="number"
                  {...register("positions")}
                  className={`pl-10 w-full rounded-md border ${
                    errors.positions ? "border-red-500" : "border-gray-300"
                  } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="e.g. 2"
                />
              </div>
              {errors.positions && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.positions.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <div className="flex items-center">
                <MapPin className="text-gray-400 w-5 h-5 absolute ml-3" />
                <input
                  {...register("location")}
                  className={`pl-10 w-full rounded-md border ${
                    errors.location ? "border-red-500" : "border-gray-300"
                  } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="e.g. Pune, India"
                />
              </div>
              {errors.location && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.location.message}
                </p>
              )}
            </div>
          </div>

          {/* Employment Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Employment Type *
              </label>
              <select
                {...register("employmentType")}
                className={`w-full rounded-md border ${
                  errors.employmentType ? "border-red-500" : "border-gray-300"
                } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
              {errors.employmentType && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.employmentType.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience Required (Years) *
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="number"
                    {...register("experienceMin")}
                    className={`w-full rounded-md border ${
                      errors.experienceMin
                        ? "border-red-500"
                        : "border-gray-300"
                    } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Min"
                  />
                  {errors.experienceMin && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.experienceMin.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="number"
                    {...register("experienceMax")}
                    className={`w-full rounded-md border ${
                      errors.experienceMax
                        ? "border-red-500"
                        : "border-gray-300"
                    } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Max"
                  />
                  {errors.experienceMax && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.experienceMax.message}
                    </p>
                  )}
                </div>
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
                    {...register("salaryMin")}
                    className={`pl-10 w-full rounded-md border ${
                      errors.salaryMin ? "border-red-500" : "border-gray-300"
                    } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Min"
                  />
                  {errors.salaryMin && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.salaryMin.message}
                    </p>
                  )}
                </div>
                <div className="flex items-center">
                  <IndianRupee className="text-gray-400 w-5 h-5 absolute ml-3" />
                  <input
                    type="number"
                    {...register("salaryMax")}
                    className={`pl-10 w-full rounded-md border ${
                      errors.salaryMax ? "border-red-500" : "border-gray-300"
                    } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Max"
                  />
                  {errors.salaryMax && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.salaryMax.message}
                    </p>
                  )}
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
                {...register("qualifications")}
                rows="3"
                className={`pl-10 w-full rounded-md border ${
                  errors.qualifications ? "border-red-500" : "border-gray-300"
                } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="List required educational qualifications"
              />
            </div>
            {errors.qualifications && (
              <p className="mt-1 text-sm text-red-500">
                {errors.qualifications.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Required Skills *
            </label>
            <textarea
              {...register("skills")}
              rows="3"
              className={`w-full rounded-md border ${
                errors.skills ? "border-red-500" : "border-gray-300"
              } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="List required technical skills and competencies"
            />
            {errors.skills && (
              <p className="mt-1 text-sm text-red-500">
                {errors.skills.message}
              </p>
            )}
          </div>

          {/* Job Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Responsibilities *
            </label>
            <textarea
              {...register("responsibilities")}
              rows="4"
              className={`w-full rounded-md border ${
                errors.responsibilities ? "border-red-500" : "border-gray-300"
              } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Describe the key responsibilities and duties"
            />
            {errors.responsibilities && (
              <p className="mt-1 text-sm text-red-500">
                {errors.responsibilities.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Benefits & Perks
            </label>
            <textarea
              {...register("benefits")}
              rows="3"
              className={`w-full rounded-md border ${
                errors.benefits ? "border-red-500" : "border-gray-300"
              } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="List employee benefits and perks"
            />
            {errors.benefits && (
              <p className="mt-1 text-sm text-red-500">
                {errors.benefits.message}
              </p>
            )}
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
                  {...register("deadline")}
                  className={`pl-10 w-full rounded-md border ${
                    errors.deadline ? "border-red-500" : "border-gray-300"
                  } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
              {errors.deadline && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.deadline.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Workplace Accommodations
              </label>
              <input
                {...register("accommodations")}
                className={`w-full rounded-md border ${
                  errors.accommodations ? "border-red-500" : "border-gray-300"
                } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
              disabled={isLoading}
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
