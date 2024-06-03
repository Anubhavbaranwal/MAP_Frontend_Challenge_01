import React from 'react';

const LoadingSkeleton = () => {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden m-4 w-64 animate-pulse">
        <div className="w-full h-64 bg-gray-300"></div>
        <div className="p-4">
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-3 bg-gray-300 rounded mb-2"></div>
          <div className="h-3 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mt-2"></div>
        </div>
      </div>
    );
  };
  

export default LoadingSkeleton;
