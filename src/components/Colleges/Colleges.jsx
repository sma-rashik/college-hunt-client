import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
import "./Colleges.css";

const Colleges = () => {
  const allCollegeData = useLoaderData();
  const {id} = useParams();
  console.log(allCollegeData);

  const [searchInput, setSearchInput] = useState("");
  const [filteredColleges, setFilteredColleges] = useState(allCollegeData);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchInput(value);

    const filtered = allCollegeData.filter((college) =>
      college.college_name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredColleges(filtered);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center mt-5 under">
        <h1 className="font-bold text-3xl"> All Colleges</h1>
      </div>

      <div className="flex justify-center items-center mt-5 mb-10">
        <input
          type="text"
          placeholder="Search for a college name"
          value={searchInput}
          onChange={handleSearch}
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-20 mt-10 justify-center items-center media_quary">
        {filteredColleges.map((college) => (
          <div
            key={college._id} 
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg"
                src={college.college_image}
                alt=""
              />
            </a>
            <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {college.college_name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                <span className="font-bold">Admission Dates: </span>
                {college.admission_dates}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                <span className="font-bold">Event: </span>
                {college.events[0].event_name}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                <span className="font-bold">Sports: </span>
                {college.sports_categories[0]}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                <span className="font-bold">Research History : </span>
                {college.research_history}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <Link to={`/allcollages/${college._id}`}>Details</Link>
                <FaArrowRight size={18} className="ms-3"></FaArrowRight>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
