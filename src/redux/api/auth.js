import { apiSlice } from "../initalState";

const apiWithTag = apiSlice.enhanceEndpoints({
  addTagTypes: ["user", "admin-user", "product", "order"],
});

export const authApiSlice = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/v1/user/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: credentials,
      }),
    }),
    registration: builder.mutation({
      query: (credential) => ({
        url: "/api/v1/user/register",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: credential,
      }),
    }),
    forgetPassword: builder.mutation({
      query: (credential) => ({
        url: "/api/v1/user/forgotpassword",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: credential,
      }),
    }),
    otpVerify: builder.mutation({
      query: (credential) => ({
        url: "/api/v1/user/otp-check",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: credential,
      }),
    }),
    resetPassword: builder.mutation({
      query: (credential) => ({
        url: "/api/v1/user/reset-password",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: credential,
      }),
    }),
    getMyProfile: builder.query({
      query: () => ({
        url: "/api/v1/user/profile",
        method: "GET",
      }),
      keepUnusedDataFor: 0,
      providesTags: ["user"],
    }),
    updateProfile: builder.mutation({
      query: (credential) => ({
        url: "/api/v1/user/profile",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: credential,
      }),
      invalidatesTags: ["user"],
    }),
    updateProfile_Pic: builder.mutation({
      query: (credential) => ({
        url: "/api/v1/user/profile-pic",
        method: "PUT",
        body: credential,
      }),
      invalidatesTags: ["user"],
    }),
    sendContact: builder.mutation({
      query: (credential) => ({
        url: "/api/v1/user/contact",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: credential,
      }),
      invalidatesTags: ["user"],
    }),
    adminUpdateUser: builder.mutation({
      query: (credential) => ({
        url: `/api/v1/user/allUser/${credential.id}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: credential,
      }),
      invalidatesTags: ["admin-user"],
    }),
    allUserDetail: builder.query({
      query: () => ({
        url: "/api/v1/user/allUser",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["admin-user"],
      keepUnusedDataFor: 0,
    }),
    verifyEmail: builder.mutation({
      query: (credential) => ({
        url: "/api/v1/user/verify-email",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: credential,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useLoginMutation,
  useRegistrationMutation,
  useForgetPasswordMutation,
  useOtpVerifyMutation,
  useResetPasswordMutation,
  useGetMyProfileQuery,
  useUpdateProfileMutation,
  useVerifyEmailMutation,
  useSendContactMutation,
  useAdminUpdateUserMutation,
  useUpdateProfile_PicMutation,
  useAllUserDetailQuery,
} = authApiSlice;