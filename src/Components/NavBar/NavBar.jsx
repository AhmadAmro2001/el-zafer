import React, { useEffect, useState } from "react";
import style from "./NavBar.module.css";
import zaferLogo from "../../assets/el-zafer-logo.png";
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
          <img src={zaferLogo} alt="El Zafer Logo" className="h-12   md:h-24" />
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
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Items */}
        <ul
          className={`lg:flex gap-4 items-center ${
            menuOpen ? "block mt-4" : "hidden"
          } lg:mt-0`}
        >
          {[
            "location-dot",
            "facebook-f",
            "linkedin-in",
            "instagram",
            "x-twitter",
            "youtube",
            "tiktok",
          ].map((icon, idx) => (
            <li key={idx}>
              <NavLink to="#" className="block p-0">
                <div className="flex justify-center w-10 h-10 items-center my-2 md:my-0 border border-red-700 main-gradient text-white rounded-full">
                  <i
                    className={`${
                      icon === "location-dot"
                        ? "fa-solid fa-location-dot"
                        : `fa-brands fa-${icon}`
                    }`}
                  ></i>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    </>
  );
}
