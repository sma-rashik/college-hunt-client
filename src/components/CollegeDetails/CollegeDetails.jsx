import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CollegeDetails = () => {
  const singleCollage = useLoaderData();
  console.log(singleCollage);
  return (
    <div className="container mx-auto my-5">
      <div className="flex justify-center items-center my-5 under">
        <h1 className="font-bold text-3xl">Colleges Details</h1>
      </div>
      <div className=" flex justify-center items-center">
        <div className="w-3/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg flex justify-center"
              src={singleCollage.college_image}
              alt=""
            />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {singleCollage.college_name}
            </h5>

            <div className="divider"></div>

            <p className="flex justify-center font-bold text-xl underline">
              {" "}
              Admission Process
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-3">
              {" "}
              <span className="font-bold">Admission Date: </span>
              {singleCollage.admission_dates}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {" "}
              <span className="font-bold">Admission Process: </span>
              {singleCollage.admission_process}
            </p>
            <div className="divider"></div>
            <p className="flex justify-center font-bold text-xl underline">
              {" "}
              Events Details
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {" "}
              <span className="font-bold">Event Details One: </span>
              <li>
                <span className="font-bold">Event Name: </span>
                {singleCollage.events[0].event_name}
              </li>
              <li>
                <span className="font-bold">Event Date: </span>
                {singleCollage.events[0].event_date}
              </li>
              <li>
                <span className="font-bold">Event Description: </span>
                {singleCollage.events[0].event_description}
              </li>
              <span className="font-bold ">Event Details Two: </span>
              <li>
                <span className="font-bold">Event Name: </span>
                {singleCollage.events[1].event_name}
              </li>
              <li>
                <span className="font-bold">Event Date: </span>
                {singleCollage.events[1].event_date}
              </li>
              <li>
                <span className="font-bold">Event Description: </span>
                {singleCollage.events[1].event_description}
              </li>
            </p>
            <div className="divider"></div>
            <p className="flex justify-center font-bold text-xl underline">
              {" "}
              Research Works
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {" "}
              <span className="font-bold">Research Work One: </span>
              <li>
                <span className="font-bold">Research Title: </span>
                {singleCollage.research_works[0].research_title}
              </li>
              <li>
                <span className="font-bold">Research Description: </span>
                {singleCollage.research_works[0].research_description}
              </li>
              <span className="font-bold ">Research Work Two: </span>
              <li>
                <span className="font-bold">Event Name: </span>
                {singleCollage.research_works[1].research_title}
              </li>
              <li>
                <span className="font-bold">Event Date: </span>
                {singleCollage.research_works[1].research_description}
              </li>
            </p>
            <div className="divider"></div>

            <p className="flex justify-center font-bold text-xl underline">
              {" "}
              Sports Categories
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {" "}
              <span className="font-bold">Sports Categories: </span>
              <li>{singleCollage.sports_categories[0]}</li>
              <li>{singleCollage.sports_categories[1]}</li>
              <li>{singleCollage.sports_categories[2]}</li>
            </p>

            <div className="divider"></div>

            <p className="flex justify-center font-bold text-xl underline">
              {" "}
              Research History
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {" "}
              <span className="font-bold">Research History : </span>
              {singleCollage.research_history}
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
              <button className="btn btn-success">
                <Link to="/">Back to home</Link>
              </button>{" "}
              OR{" "}
              <button className="btn btn-success">
                <Link to="/colleges">Back to All Collages</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
