import React, { useEffect, useState } from "react";
import style from "./NavBar.module.css";
import zaferLogo from "../../assets/el-zafer-logo.png";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const [data, setData] = useState();
  useEffect(() => {}, []);
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={zaferLogo} className="h-24 " alt="El Zafer Logo" />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white ">
              <li>
                <NavLink
                  to=""
                  className="block  p-0 "
                  aria-current="page"
                >
                  <div  className="flex justify-center w-10 h-10 items-center border border-red-700 main-gradient text-white rounded-full"><i className="fa-solid fa-location-dot"></i></div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to=""
                  className="block  p-0 "
                  aria-current="page"
                >
                  <div className="flex justify-center w-10 h-10 items-center border border-red-700 main-gradient text-white rounded-full"><i className="fa-brands fa-facebook-f"></i></div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to=""
                  className="block p-0"
                  aria-current="page"
                >
                  <div className="flex justify-center w-10 h-10 items-center border border-red-700 main-gradient text-white rounded-full"><i className="fa-brands fa-linkedin-in"></i></div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to=""
                  className="block p-0"
                  aria-current="page"
                >
                  <div className="flex justify-center w-10 h-10 items-center border border-red-700 main-gradient text-white rounded-full"><i className="fa-brands fa-instagram"></i></div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to=""
                  className="block p-0"
                  aria-current="page"
                >
                  <div className="flex justify-center w-10 h-10 items-center border border-red-700 main-gradient text-white rounded-full"><i className="fa-brands fa-x-twitter"></i></div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to=""
                  className="block p-0"
                  aria-current="page"
                >
                  <div className="flex justify-center w-10 h-10 items-center border border-red-700 main-gradient text-white rounded-full"><i className="fa-brands fa-youtube"></i></div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to=""
                  className="block p-0"
                  aria-current="page"
                >
                  <div className="flex justify-center w-10 h-10 items-center border border-red-700 main-gradient text-white rounded-full"><i className="fa-brands fa-tiktok"></i></div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
