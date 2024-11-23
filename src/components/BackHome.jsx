import React from 'react';
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';

export default function BackHome({ onCancel }) {
  return (
    <div className="flex items-center space-x-2 mb-4 ">
    <button
      onClick={onCancel} // Handles navigation back to home
      className="flex items-center text-gray-800 hover:text-gray-600 hover:bg-gray-50 transition focus:outline-none border rounded-full px-4 py-2"
    >
      <ArrowLongLeftIcon className="h-6 w-6 mr-2" /> {/* Arrow icon */}
      <span className="text-sm">Back to Home</span>
    </button>
  </div>
  )
}
