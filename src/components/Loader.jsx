import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 gray-700 border-solid border-gray-300"></div>
    </div>
  );
};

export default Loader;
