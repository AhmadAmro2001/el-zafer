import React, { useEffect, useState } from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
export default function Footer() {
  const [zoomLevel, setZoomLevel] = useState(1);
  useEffect(() => {
    const checkZoom = ()=>{
      const zoom = window.outerWidth / window.innerWidth;
      setZoomLevel(zoom);
    }
    checkZoom();
    window.addEventListener("resize", checkZoom);
    return () => {
      window.removeEventListener("resize", checkZoom);
    };
  }, []);
  console.log(zoomLevel);
  
  return (
    <>
      <footer
        className="w-full bg-center bg-no-repeat bg-cover p-2   h-[160px] md:h-[580px]"
        style={{ backgroundImage: `url(https://res.cloudinary.com/djvzbznry/image/upload/v1749623047/footer-img_hozwhx.png)` }}
      >
        <div className="container mx-auto md:px-10 ">
          <div className="text-right text-[5px] mb-2 md:text-[16px] md:pt-5">
            <h3 className="font-bold md:me-14 ">INTERNATIONAL FREIGHT FORWARDING</h3>
            <div className="flex justify-end ">
              <h4 className="font-bold border-r border-red-700 px-1">SEA</h4>
              <h4 className="font-bold border-r border-red-700 px-1">AIR</h4>
              <h4 className="font-bold border-r border-red-700 px-1">LAND</h4>
              <h4 className="font-bold border-r border-red-700 px-1">
                MULTIMODAL
              </h4>
              <h4 className="font-bold ps-1">DOOR DELIVERY</h4>
            </div>
          </div>
          
          <div className="w-[50%] mt-8 md:mt-28 ">
            <div className="flex justify-between text-[3px] md:text-[16px] ">
              <h3 className="font-bold">For bussiness inquires :</h3>
              <h3 className="font-bold me-1 md:me-12 "
              
              >Management :</h3>
            </div>
            <div className="flex  text-[3px] md:text-[12px] text-left">
              <div className=" border-r pe-2  border-red-700">
                <p>marketing3@alzafercargo.com</p>
                <p>+966 55 086 9965</p>
                <p>+966 12 664 6888</p>
              </div>
              <div className=" border-r px-2  border-red-700">
                <p>shipping3@alzafercargo.com</p>
                <p>+966 55 11 83824</p>
                <p>+966 12 664 6888</p>
              </div>
              <div className=" border-r px-2  border-red-700">
                <p>logistics@alzafercargo.com</p>
                <p>+966 555 149 065</p>
                <p>+966 138 279 081</p>
              </div>
              <div className="px-2 ">
                <p>qatamesh@alzafercargo.com</p>
                <p>+966 50 572 2495</p>
                <p>+966 12 664 6888</p>
              </div>
            </div>
          </div>
          
          <div className="text-[4px] md:text-[16px] mt-4 ">
            <div className="flex">
              <h4 className="font-bold border-r border-red-700 pe-1 md:pe-2">
                SHIPPING
              </h4>
              <h4 className="font-bold border-r border-red-700 px-1 md:px-2">
                LOGISTICS
              </h4>
              <h4 className="font-bold border-r border-red-700 px-1 md:px-2">
                AVIATION
              </h4>
              <h4 className="font-bold border-r border-red-700 px-1 md:px-2">
                CUSTOMS CLEARANCE
              </h4>
              <h4 className="font-bold border-r border-red-700 px-1 md:px-2">
                WAREHOUSING
              </h4>
              <h4 className="font-bold border-r border-red-700 px-1 md:px-2">
                TRANSPORTATION
              </h4>
              <h4 className="font-bold px-1 md:px-2">CONTAINER LINE</h4>
            </div>
          </div>
          
          <div className="flex justify-end items-end mt-5 md:mt-18  text-[3px] md:text-[16px]">
            <div
              className="flex bg-red-500 pe-6 md:pe-20 ps-2 md:ps-4 md:py-2 py-1 rounded-l-full text-white gap-2"
              style={{
                clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)",
              }}
            >
              <div className="">
                <p>Mobile : +966 50 572 2495</p>
                <p>qatamesh@alzafercargo.com</p>
              </div>
              <div className="">
                <p>Toll Free: 800-12-8888-1</p>
                <p>www.alzafercargo.com</p>
              </div>
            </div>
            <div className="flex gap-2 md:ms-7">
              <div className="border-r border-blue-700 px-1">
                <h4 className="text-yellow-300">Jeddah Head Office:</h4>
                <p className="text-white">Tel. :+966 12 664 6888</p>
                <p className="text-white">Fax :+966 12 661 1043</p>
              </div>
              <div className="border-r border-blue-700 px-1">
                <h4 className="text-yellow-300">Riyadh:</h4>
                <p className="text-white">Tel. : +966 11 478 8849</p>
                <p className="text-white">Fax : +966 11 478 1188</p>
              </div>
              <div className=" px-1">
                <h4 className="text-yellow-300">Dammam:</h4>
                <p className="text-white">Tel. : +966 13 827 9081 / 827 9085</p>
                <p className="text-white">Fax : +966 13 827 8295</p>
              </div>

            </div>
          </div>
          
        </div>
      </footer>

    </>
  );
}
