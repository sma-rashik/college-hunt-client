import React from "react";
import { useLoaderData } from "react-router-dom";

const MyCollage = () => {
  const myCollageData = useLoaderData();
  console.log(myCollageData);

  return (
    <div className="container mx-auto my-5">
      {myCollageData.map((college, index) => (
        <div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-end px-4 pt-4">
          </div>
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-40 h-42 mb-3 rounded-full shadow-lg"
              src={college.photoUrl} // Assuming the college object has an 'imageUrl' property
              alt={college.sname}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Name: {college.sname}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Subject: {college.subject}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Email: {college.email}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Phone: {college.number}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Address: {college.address}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Date of Birth: {college.dob}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCollage;
