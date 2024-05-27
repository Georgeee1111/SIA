import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-pink-500">
      <h1 className="text-white text-7xl font-bold mb-8">
        Oops! Looks like you're lost.
      </h1>
      <p className="text-white text-xl mb-8">
        The page you're looking for is nowhere to be found.
      </p>
      <div className="flex justify-center">
        <a
          href="/home"
          className="px-4 py-2 bg-white rounded shadow-md text-indigo-500 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
