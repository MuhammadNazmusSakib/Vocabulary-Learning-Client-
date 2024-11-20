import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      {/* Error Message */}
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-500">404</h1>
        <p className="text-xl text-gray-600 mt-4">Oops! The page you’re looking for doesn’t exist.</p>
      </div>

      {/* Back to Home Button */}
      <button
        onClick={() => navigate('/')}
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
