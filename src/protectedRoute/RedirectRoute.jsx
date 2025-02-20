import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/reducer/auth";

const RedirectRoute = ({
  redirectPath = "/", // Default redirect to the dashboard
}) => {
  const isAuth = useSelector(selectCurrentUser);

  if (isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default RedirectRoute;
