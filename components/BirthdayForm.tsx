import React from 'react';

const BirthdayForm = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto mt-5">
      <h2 className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-200">
        Birthday Form
      </h2>
      <div className="flex flex-col bg-white dark:bg-gray-800 shadow-md rounded-md px-8 py-6">
        <label className="text-gray-700 dark:text-gray-200">Name</label>
        <input className="mt-2 mb-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md px-3 py-2" type="text" placeholder="Enter your name" />
        <label className="text-gray-700 dark:text-gray-200">Date of Birth</label>
        <input className="mt-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md px-3 py-2" type="date" />
        <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
      </div>
    </div>
  );
};

export default BirthdayForm;