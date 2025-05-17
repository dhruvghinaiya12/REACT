import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-60px)] bg-gray-800 text-white text-center px-6 pt-16">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Oops! Page Not Found</h2>
      <p className="text-lg text-gray-400 mb-6">The page you're looking for doesn't exist or has been moved.</p>
      <button
        onClick={() => navigate('/')} 
        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default PageNotFound;
