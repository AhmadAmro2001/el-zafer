import React, { useEffect, useState } from "react";
import style from "./ActivitiesDetails.module.css";
import { useLocation } from "react-router-dom";
export default function ActivitiesDetails() {
  const { state } = useLocation();
  const {title , photo , detail} = state || {};  

  console.log(title,photo,detail);
  
  return (
    <>
      <div className="relative mx-auto my-10 md:my-24">
        <div className="absolute md:w-[400px] md:h-[313px] w-[200px] h-[150px] md:right-24 md:bottom-16 bottom-6 right-9 border-[3px] rounded-xl z-0 border-[#0C71B9]"></div>
        <div className="md:w-[1053px] md:h-[329px] w-[250px] h-[150px] rounded-xl overflow-hidden z-10 relative mx-auto">
          <img
            src={`${photo}`}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-24 text-left">
        <h1 className="text-[32px] text-[#0C71B9] mb-5">{title}</h1>
        <p className="text-[#999999] mb-5">{detail}</p>
      </div>
    </>
  );
}
