import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./initalState";

import authReducer from "./reducer/auth";
export const RAZORPAY_API_KEY = import.meta.env.VITE_RAZORPAY_API_KEY;
export const IMAGE_URL=import.meta.env.VITE_API_SERVER
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,

    // otp: otpReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

