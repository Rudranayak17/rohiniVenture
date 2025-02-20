import { apiSlice } from "../initalState";

const apiWithTag = apiSlice.enhanceEndpoints({
  addTagTypes: ["job"],
});

export const JobSeekerApiSlice = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    jobProvider: builder.mutation({
      query: (credentials) => ({
        url: "/api/v1/jobProvider",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: credentials,
      }),
      invalidatesTags: ["job"],
    }),
  }),
  overrideExisting: true,
});

export const { useJobProviderMutation } = JobSeekerApiSlice;
