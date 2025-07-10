import React, { useEffect, useState } from "react";
import style from "./Sidebar.module.css";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {}, []);
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed h-screen top-0 transition-all duration-300 bg-white md:w-[8%] w-[25%]  md:z-50 z-40 ${
          isOpen ? "translate-x-0 " : "-translate-x-full md:translate-x-0 "
        } flex flex-col justify-center`}
      >
        {/* Home */}
        <Link to="/" className="flex flex-col items-center my-2 ">
          <div className="w-12 h-12 border border-red-700 bg-white text-red-700 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-house" />
          </div>
          <p className="text-sm text-slate-600">Home</p>
        </Link>

        {/* Services */}
        <Link to="/services" className="flex flex-col items-center my-2 ">
          <div className="w-12 h-12 border border-red-700 bg-white text-red-700 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-folder-open" />
          </div>
          <p className="text-sm text-slate-600">Services</p>
        </Link>

        {/* Contact Us */}
        <Link to="/contact" className="flex flex-col items-center my-2 ">
          <div className="w-12 h-12 border border-red-700 bg-white text-red-700 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-headphones" />
          </div>
          <p className="text-sm text-slate-600">Contact Us</p>
        </Link>

        {/* Get a Quote */}
        <Link to="/qoutation" className="flex flex-col items-center my-2 ">
          <div className="w-12 h-12 border border-red-700 main-gradient text-white rounded-full flex items-center justify-center">
          <i className="fa-solid fa-dollar-sign"></i>
          </div>
          <p className="text-sm text-slate-600">Get a Quote</p>
        </Link>

        {/* Blog */}
        <Link to="/tracking" className="flex flex-col items-center my-2 ">
          <div className="w-12 h-12 bg-white flex items-center justify-center">
            <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1749622971/google-map-icon_quche9.png" className="w-full" alt="Blog" />
          </div>
          <p className="text-sm text-slate-600 max-w-[100px]">Shipment Tracking</p>
        </Link>
      </div>


      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed left-0 top-1/2 -translate-y-1/2 z-50 bg-white md:hidden text-red-700 font-semibold px-3 py-2 rounded-r shadow-lg transition-all duration-300 ${
          isOpen ? "left-[25%] " : "left-0"
        }`}
      >
        <i
          className={`fa-solid ${
            isOpen ? "fa-chevron-left" : "fa-chevron-right"
          }`}
        />
      </button>
      
    </>
  );
}
