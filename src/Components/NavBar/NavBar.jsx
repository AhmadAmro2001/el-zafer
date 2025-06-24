import React, { useEffect, useState } from "react";
import style from "./NavBar.module.css";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {}, []);
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex ">
            <img
              src="https://res.cloudinary.com/djvzbznry/image/upload/v1749622979/el-zafer-logo_l6b5ly.png"
              alt="El Zafer Logo"
              className="h-12   md:h-24"
            />
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Navigation Items */}
          <ul
            className={`lg:flex gap-4 items-center ${
              menuOpen ? "block mt-4" : "hidden"
            } lg:mt-0`}
          >
            <li>
              <NavLink to="https://g.co/kgs/H1uVv2S" className="block p-0">
                <div className="flex justify-center w-10 h-10 items-center my-2 md:my-0 border border-red-700 main-gradient text-white rounded-full">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.facebook.com/alzafercargoKSA"
                className="block p-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center w-10 h-10 items-center my-2 md:my-0 border border-red-700 main-gradient text-white rounded-full">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.linkedin.com/company/al-zaferwingscargoservicescompany"
                className="block p-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center w-10 h-10 items-center my-2 md:my-0 border border-red-700 main-gradient text-white rounded-full">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.instagram.com/sa.alzafer/"
                className="block p-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center w-10 h-10 items-center my-2 md:my-0 border border-red-700 main-gradient text-white rounded-full">
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to=""
                className="block p-0"
                // target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center w-10 h-10 items-center my-2 md:my-0 border border-red-700 main-gradient text-white rounded-full">
                  <i className="fa-brands fa-x-twitter"></i>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to=""
                className="block p-0"
                // target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center w-10 h-10 items-center my-2 md:my-0 border border-red-700 main-gradient text-white rounded-full">
                  <i className="fa-brands fa-youtube"></i>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://tiktok.com"
                className="block p-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center w-10 h-10 items-center my-2 md:my-0 border border-red-700 main-gradient text-white rounded-full">
                  <i className="fa-brands fa-tiktok"></i>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
