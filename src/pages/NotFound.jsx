import React from 'react';

const NotFoundPage = () => (
  <div className="h-screen flex flex-col justify-center items-center text-gray-700">
    <h1 className="text-6xl font-bold mb-4">404</h1>
    <p className="text-lg">Oops! The page you're looking for doesn't exist.</p>
    <button
      className="mt-4 p-2 bg-blue-500 text-white rounded"
      onClick={() => (window.location.href = '/')}
    >
      Go to Home
    </button>
  </div>
);

export default NotFoundPage;
