import React from "react";

const GroupGallary = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-3xl">
          {" "}
          College Graduate's Group Gallary
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-20 mt-10 justify-center items-center">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/C6Z3BRd/group8.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/rmJGQXn/group7.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/QrYykKv/group6.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/sgMnbqG/group5.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/K0ZB73c/group4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/pbtKcj7/group3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/n0KRy3x/group2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/mX1PKHV/group1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/mX1PKHV/group1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default GroupGallary;
