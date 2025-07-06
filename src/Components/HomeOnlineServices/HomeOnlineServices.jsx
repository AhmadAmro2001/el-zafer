import React, { useEffect, useState } from "react";
import style from "./HomeOnlineServices.module.css";
import { Link } from "react-router-dom";
export default function HomeOnlineServices() {
  return (
    <>
      <div className="container  mx-auto px-4 md:px-32 my-24">
        <div className="text-left ">
          <h1 className="text-red-700 text-3xl font-bold pb-2">
            Online services
          </h1>
          <h1 className="max-w-[90%] md:max-w-full text-gray-800">
            You can conveniently manage all aspects of your shipping needs
            online
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {/* item start */}
          <div className="group">
            <div className="relative text-left border shadow-md rounded-md overflow-hidden bg-[#F2F2F2] h-[230px] group-hover:h-[260px] group-hover:bg-red-400 transition-all duration-300">
              <div className="p-4">
                {/* Icon */}
                <div className="opacity-0 mt-3 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300 text-red-700 text-5xl">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full shadow-xl transform transition-transform duration-300 p-1 hover:rotate-x-6 hover:rotate-y-6 hover:scale-110">
                    <i className="fa-solid fa-download"></i>
                  </div>
                </div>

                {/* Caption */}
                <div className="transition-all  relative duration-300 group-hover:translate-y-5">
                  <h2 className="text-lg group-hover:text-white pb-2 font-bold">
                    Company's Profile
                  </h2>
                  <p className="text-md group-hover:text-white text-gray-600">
                    Download full company profile and services in a single PDF
                    file.
                  </p>
                  <div className="right-[50%] translate-x-1/2 absolute pt-5 text-red-700 group-hover:text-white group-hover:right-16 transition-all duration-300">
                    <a href="https://drive.google.com/file/d/16LWlLKQspSgHJFKugktdfMspf2he5DfB/view?usp=sharing" target="_blank">
                      Download now <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="relative text-left border shadow-md rounded-md overflow-hidden bg-[#F2F2F2] h-[230px] group-hover:h-[260px] group-hover:bg-red-400 transition-all duration-300">
              <div className="p-4">
                {/* Icon */}
                <div className="opacity-0 mt-3 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300 text-red-700 text-5xl">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full shadow-xl transform transition-transform duration-300 hover:rotate-x-6 hover:rotate-y-6 hover:scale-110">
                    <i className="fa-solid fa-ship"></i>
                  </div>
                </div>

                {/* Caption */}
                <div className="transition-all   relative duration-300 group-hover:translate-y-5">
                  <h2 className="text-lg group-hover:text-white pb-2 font-bold">
                    Track your shipment
                  </h2>
                  <p className="text-md group-hover:text-white text-gray-600">
                    Track your shipment through its journey from loading to
                    discharge.
                  </p>
                  <div className="right-[50%] translate-x-1/2 absolute pt-5 text-red-700 group-hover:text-white group-hover:right-10 transition-all duration-300">
                    <Link to="/tracking">
                      Start now <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="relative text-left border shadow-md rounded-md overflow-hidden bg-[#F2F2F2] h-[230px] group-hover:h-[260px] group-hover:bg-red-400 transition-all duration-300">
              <div className="p-4">
                {/* Icon */}
                <div className="opacity-0 mt-3 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300 text-red-700 text-5xl">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full shadow-xl transform transition-transform duration-300 hover:rotate-x-6 hover:rotate-y-6 hover:scale-110">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                </div>

                {/* Caption */}
                <div className="transition-all  relative duration-300 group-hover:translate-y-5">
                  <h2 className="text-lg group-hover:text-white pb-2 font-bold">
                    Request a Quote
                  </h2>
                  <p className="text-md group-hover:text-white text-gray-600">
                    Send your shipment destails and get our price quote with
                    best prices.
                  </p>
                  <div className="right-[50%] translate-x-1/2 absolute pt-5 text-red-700 group-hover:text-white group-hover:right-14 transition-all duration-300">
                    <Link to="/tracking">
                      Request now <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="relative text-left border shadow-md rounded-md overflow-hidden bg-[#F2F2F2] h-[230px] group-hover:h-[260px] group-hover:bg-red-400 transition-all duration-300">
              <div className="p-4">
                {/* Icon */}
                <div className="opacity-0 mt-3 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300 text-red-700 text-5xl">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full shadow-xl transform transition-transform duration-300 hover:rotate-x-6 hover:rotate-y-6 hover:scale-110">
                    <i className="fa-solid fa-truck"></i>
                  </div>
                </div>

                {/* Caption */}
                <div className="transition-all  relative duration-300 group-hover:translate-y-5">
                  <h2 className="text-lg group-hover:text-white pb-2 font-bold">
                    Container load calculator
                  </h2>
                  <p className="text-md group-hover:text-white text-gray-600">
                    Calculate your commodity space inside one or more than one
                    container.
                  </p>
                  <div className="right-[50%] translate-x-1/2 absolute  text-red-700 group-hover:text-white group-hover:right-10 transition-all duration-300">
                    <Link to="">
                      Start now <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="relative text-left border shadow-md rounded-md overflow-hidden bg-[#F2F2F2] h-[230px] group-hover:h-[260px] group-hover:bg-red-400 transition-all duration-300">
              <div className="p-4">
                {/* Icon */}
                <div className="opacity-0 mt-3 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300 text-red-700 text-5xl">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full shadow-xl transform transition-transform duration-300 hover:rotate-x-6 hover:rotate-y-6 hover:scale-110">
                    <i className="fa-solid fa-info"></i>
                  </div>
                </div>

                {/* Caption */}
                <div className="transition-all  relative duration-300 group-hover:translate-y-5">
                  <h2 className="text-lg group-hover:text-white pb-2 font-bold">
                    Useful info.
                  </h2>
                  <p className="text-md group-hover:text-white text-gray-600">
                    Read more about the shipping process and our services.
                  </p>
                  <div className="right-[50%] translate-x-1/2 absolute pt-5 text-red-700 group-hover:text-white group-hover:right-16 transition-all duration-300">
                    <Link to="/usefulInfo">
                      Read more <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="relative text-left border shadow-md rounded-md overflow-hidden bg-[#F2F2F2] h-[230px] group-hover:h-[260px] group-hover:bg-red-400 transition-all duration-300">
              <div className="p-4">
                {/* Icon */}
                <div className="opacity-0 mt-3 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300 text-red-700 text-5xl">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full shadow-xl transform transition-transform duration-300 hover:rotate-x-6 hover:rotate-y-6 hover:scale-110">
                    <i className="fa-solid fa-newspaper"></i>
                  </div>
                </div>

                {/* Caption */}
                <div className="transition-all  relative duration-300 group-hover:translate-y-5">
                  <h2 className="text-lg group-hover:text-white pb-2 font-bold">
                    Press release
                  </h2>
                  <p className="text-md group-hover:text-white text-gray-600">
                    Read more about the shipping process and our services.
                  </p>
                  <div className="right-[50%] translate-x-1/2 absolute pt-5 text-red-700 group-hover:text-white group-hover:right-16 transition-all duration-300">
                    <Link to="#">
                      Read more <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* item end */}
        </div>
      </div>
    </>
  );
}
