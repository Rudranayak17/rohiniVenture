import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentLoading, selectCurrentUser } from "../redux/reducer/auth";

const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
  </div>
);

const ProtectedRoute = ({ role, children }) => {
  const isAuth = useSelector(selectCurrentUser);
  const isAuthLoading = useSelector(selectCurrentLoading);
  const location = useLocation();

  if (isAuthLoading) {
     <Loader />;
  }

  if (!isAuth) {
    return <Navigate to="/signin" state={{ from: location.pathname }} />;
  }

  if (role === "admin" && isAuth.role !== "admin") {
    return <Navigate to="/not-authorized" />;
  }

  return <>{children || <Outlet />}</>;
};

export default ProtectedRoute;
