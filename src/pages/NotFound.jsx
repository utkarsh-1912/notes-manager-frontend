import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const NotFoundPage = () => (
  <div className="h-screen flex flex-col justify-center items-center text-gray-800">
    <h1 className="text-6xl font-bold mb-4">404</h1>
    <p className="text-lg">Oops! The page you're looking for doesn't exist.</p>
    <button
      className="flex mt-4 px-4 py-2 bg-gray-800 text-white rounded"
      onClick={() => (window.location.href = '/')}
    >
      Go to Home 
      <ArrowLongRightIcon className="h-6 w-6 ml-2 align-middle" />
    </button>
  </div>
);

export default NotFoundPage;
