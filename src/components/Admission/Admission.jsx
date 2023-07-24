import React from "react";

const handleAddToy = (event) => {
  event.preventDefault();

  const sname = event.target.sname.value;
  const subject = event.target.subject.value;
  const email = event.target.email.value;
  const number = event.target.number.value;
  const address = event.target.address.value;
  const dob = event.target.dob.value;
  const photoUrl = event.target.photoUrl.value;

  const admission = {
    sname,
    subject,
    email,
    number,
    address,
    dob,
    photoUrl,
  };
  console.log(admission);

  fetch("https://college-hunt-server.vercel.app/admissiondata", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(admission),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.acknowledged === true) {
        alert("Addmission Successfully");
      }
    });
};

const Admission = () => {
  return (
    <div className="container mx-auto ">
      <div className="container mx-auto flex justify-center my-5 ">
        <div className="w-3/4 text-sm font-medium text-gray-900 bg-white border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white shadow-2xl my-6 border-gray-50 border-3">
          <div className="bg-blue-400 p-3 my-3 rounded  ">
            <h1 className="text-2xl font-bold text-black text-center">
              Click your Choose Collage
            </h1>
          </div>
          <a
            href="#"
            className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          >
            Rajuk Uttara Model College
          </a>
          <a
            href="#"
            className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          >
            Cantonment Public School and College, Rangpur
          </a>
          <a
            href="#"
            className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white border border-sky-300"
          >
            Abdul Kadir Mollah City College
          </a>
          <a
            href="#"
            className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white border border-sky-300"
          >
            Rajshahi College
          </a>
          <a
            href="#"
            className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white border border-sky-300"
          >
            Adamjee Cantonment College
          </a>
          <a
            href="#"
            className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white border border-sky-300"
          >
            National Ideal College
          </a>
          <a
            href="#"
            className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white border border-sky-300"
          >
            Viqarunnisa Noon School and College
          </a>
          <a
            href="#"
            className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white border border-sky-300"
          >
            Notre Dame College, Dhaka
          </a>
          <a
            href="#"
            className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white border border-sky-300"
          >
            Jalalabad Cantonment Public School & College
          </a>
          <a
            href="#"
            className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white border border-sky-300"
          >
            Milestone College
          </a>
        </div>
      </div>

      {/* From field start */}

      <div className="container mx-auto w-3/4 border p-5 bg-gray-800 shadow-2xl rounded-lg my-10 ">
        <form onSubmit={handleAddToy}>
          <div className="bg-blue-400 p-3 my-3 rounded ">
            <h1 className="text-2xl font-bold text-black text-center">
              Admission Form Fillup
            </h1>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {/* Candidate Name */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Candidate Name
              </label>
              <input
                type="text"
                id="sname"
                name="sname"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Candidate Name"
                required
              />
            </div>

            {/* Subject */}
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Subject"
                required
              />
            </div>

            {/* Candidate Email */}
            <div className="mb-6">
              <label
                htmlFor="emailo"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Candidate Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Candidate Email"
                required
              />
            </div>

            {/*Phone number */}
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Phone number
              </label>
              <input
                type="number"
                id="number"
                name="number"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Phone number"
                required
              />
            </div>

            {/* address */}
            <div className="mb-6">
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="address"
                required
              />
            </div>

            {/* date of birth */}
            <div className="mb-6">
              <label
                htmlFor="dob"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date of Birth
              </label>
              <input
                type="text"
                id="dob"
                name="dob"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="date of birth"
                required
              />
            </div>

            {/* Picture URL of the student */}
            <div className="mb-6">
              <label
                htmlFor="photoUrl"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Picture Url
              </label>
              <input
                type="text"
                id="photoUrl"
                name="photoUrl"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Candidate Photo Url"
                required
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admission;
