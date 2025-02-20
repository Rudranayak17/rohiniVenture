import { createSlice } from "@reduxjs/toolkit";

// Function to store token in localStorage
export const storeToken = (token) => {
  try {
    localStorage.setItem("token", token);
  } catch (error) {
    console.error("Error storing token:", error);
    throw error;
  }
};

// Function to remove token from localStorage
const removeToken = () => {
  try {
    localStorage.removeItem("token");
  } catch (error) {
    console.error("Error removing token:", error);
    throw error;
  }
};

// Function to get token from localStorage
export const getToken = () => {
  try {
    return localStorage.getItem("token");
  } catch (error) {
    console.error("Error retrieving token:", error);
    return null;
  }
};

// Initial state for the auth slice
const initialState = {
  token: getToken(),
  message: null,
  user: null,
  isLoading: true,
  isAuthenticated: false,
};

// Redux slice for auth management
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, message, user } = action.payload;
      state.token = token || null;
      state.user = user;
      state.message = message || "";
      state.isAuthenticated = true;
      state.isLoading = false;

      // Store token in localStorage
      try {
        if (token) storeToken(token);
      } catch (error) {
        console.error("Failed to store token:", error);
      }
    },
    logout: (state) => {
      state.token = null;
      state.message = "Logged out successfully";
      state.isAuthenticated = false;
      state.isLoading = false;
      state.user = null;
      try {
        removeToken();
      } catch (error) {
        console.error("Failed to remove token:", error);
      }
    },
    authError: (state) => {
      state.token = null;
      state.user = null;
      state.message = "Error occurred while authentication";
      state.isAuthenticated = false;
      state.isLoading = false;
    },
    clearError: (state) => {
      state.message = null;
    },
  },
});

// Export actions and selectors
export const { setCredentials, logout, authError, clearError } =
  authSlice.actions;
export const selectCurrentMessage = (state) => state.auth.message;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentLoading = (state) => state.auth.isLoading;
export const selectCurrentIsAuth = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;
