import React, { useEffect, useState } from "react";
import style from "./UsefulInfoDetails.module.css";
import { useLocation } from "react-router-dom";
export default function UsefulInfoDetails() {
  const { state } = useLocation();
  const { title, photo, detail } = state || {};

  return (
    <>
      <div className="relative mx-auto mt-24 mb-10 md:mt-44">
        <div className="md:w-[1053px] md:h-[329px] w-[250px] h-[150px] rounded-xl overflow-hidden z-10 relative mx-auto">
          <img src={`${photo}`} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-24 text-left">
        <h1 className="text-[32px] text-[#0C71B9] mb-5">{title}</h1>
        <p className="text-[#999999] mb-5">{detail}</p>
      </div>
    </>
  );
}
