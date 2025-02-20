import Dashboard from "@/page/Admin/dashboard";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./SideNavBar";
import JobProvider from "@/page/Admin/JobProvider";
import JobSeeker from "@/page/Admin/JobSeeker";

const Layout = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobseeker" element={<JobSeeker />} />
        <Route path="/job-provider" element={<JobProvider />} />
      </Routes>
    </div>
  );
};

export default Layout;
