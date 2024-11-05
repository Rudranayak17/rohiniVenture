// src/components/SkeletonLoading.js
import React from 'react';

const SkeletonLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      {/* Skeleton for a header */}
      <div className="w-3/4 h-10 bg-gray-300 rounded animate-pulse"></div>

      {/* Skeleton for content */}
      <div className="flex flex-col items-center w-3/4 space-y-2">
        <div className="w-full h-48 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-full h-8 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-full h-8 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-full h-8 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
