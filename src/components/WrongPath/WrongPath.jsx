import React from "react";
import { Link } from "react-router-dom";

const WrongPath = () => {
  return (
    <div className="container mx-auto flex items-center justify-center py-20 w-full my-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div>
      <div>
        <h1 className="font-bold text-4xl  flex justify-center mt-2 text-red-700 pb-10">Page Not Found</h1>
        <img className="border-2 w-96 h-auto rounded-3xl" src="https://i.ibb.co/P9JBwGL/images.png" />
      </div>
      <div className="flex justify-center mt-2">
        <Link to="/"> 
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Back to Home
        </button>
        </Link>
      </div>
    </div>
  </div>
  );
};

export default WrongPath;
