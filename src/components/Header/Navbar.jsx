import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { users, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    console.log("logout Successfully");
    logOut();
  };
  // const user = true;
  return (
    <div className="container mx-auto">
      <div className="navbar bg-neutral  text-neutral-content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/colleges">Colleges</Link>
              </li>
              <li>
                <Link to="/admission">Admission</Link>
              </li>
              <li>
                <Link to="/mycollage">My Collage</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost font-serif text-xl">
            <Link to="/home">College Hunt</Link>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/colleges">Colleges</Link>
            </li>
            <li>
              <Link to="/admission">Admission</Link>
            </li>
            <li>
              <Link to="/mycollage">My Collage</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-2">
            {users ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full" title={users.displayName}>
                    <img src={users.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow bg-black menu menu-sm dropdown-content rounded-box w-52"
                >
                  <li>
                    <a onClick={handleLogout}>Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              <button className="border rounded px-3 ">
                <Link to="/login">Login</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
