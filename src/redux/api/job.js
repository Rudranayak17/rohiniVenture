import { apiSlice } from "../initalState";

const apiWithTag = apiSlice.enhanceEndpoints({
  addTagTypes: ["job"],
});

export const JobSeekerApiSlice = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    jobProvider: builder.mutation({
      query: (credentials) => ({
        url: "/api/v1/job/jobProvider",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: credentials,
      }),
      invalidatesTags: ["job"],
    }),
    jobSeeker: builder.mutation({
      query: (credentials) => ({
        url: "/api/v1/job/jobSeeker",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: credentials,
      }),
      invalidatesTags: ["job"],
    }),

    getJobProvider: builder.query({
      query: (credentials) => ({
        url: "/api/v1/job/jobProvider",
      }),
      keepUnusedDataFor: 0,
    }),
    getJobSeeker: builder.query({
      query: (credentials) => ({
        url: "/api/v1/job/jobSeeker",
      }),
      keepUnusedDataFor: 0,
    }),
  }),
  overrideExisting: true,
});

export const {
  useJobProviderMutation,
  useGetJobProviderQuery,
  useGetJobSeekerQuery,
  useJobSeekerMutation,
} = JobSeekerApiSlice;
