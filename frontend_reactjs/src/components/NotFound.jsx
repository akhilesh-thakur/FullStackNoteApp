// NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404 - Not Found</h1>
      <p className="text-xl text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
      <img src="../images/notfound.jpg" alt="404 Illustration" className="w-64 my-2 animate-bounce mb-8" />
      <Link to="/" className="mx-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Go to Home</Link>
    </div>
  );
};

export default NotFound;
