import React, { useEffect, useState } from "react";
import style from "./Footer.module.css";
import footerBg from "../../assets/footer-img.png";
import img2 from "../../assets/ourPartners1.png";
import { Link } from "react-router-dom";
export default function Footer() {
  const [data, setData] = useState();
  useEffect(() => {}, []);
  return (
    <>
      <footer
        className="w-full text-[#063A60] p-2 md:p-8 bg-center bg-no-repeat bg-cover h-[160px]  md:h-[559px]"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <div className="container mx-auto">
          <div className="text-right text-[5px] md:text-[16px] ">
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
          <div className="w-[50%] mt-8 md:mt-28  ">
            <div className="flex justify-between text-[3px] md:text-[16px] ">
              <h3 className="font-bold">For bussiness inquires :</h3>
              <h3 className="font-bold me-1 md:me-28">Management</h3>
            </div>
            <div className="flex  text-[3px] md:text-[12px]">
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
                <p>+966 555 149 065</p>
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
          <div className="flex justify-end items-end mt-8 md:mt-28  text-[3px] md:text-[16px]">
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
                <h4 className="text-yellow-300">Head Office: Jeddah</h4>
                <p className="text-white">Tel. :+966 12 664 6888</p>
                <p className="text-white">Fax :+966 12 661 1043</p>
              </div>
              <div className="border-r border-blue-700 px-1">
                <h4 className="text-yellow-300">Riyadh:</h4>
                <p className="text-white">Tel.: +966 11 478 8849</p>
                <p className="text-white">tax: +966 11 478 1188</p>
              </div>
              <div className=" px-1">
                <h4 className="text-yellow-300">Dammam:</h4>
                <p className="text-white">Tel.: +966 13 827 9081 / 827 9085</p>
                <p className="text-white">Fax: +966 13 8278295</p>
              </div>

            </div>
          </div>
          
          {/*
         
          
          <div className="absolute top-[480px] right-0 flex">
            <Link to="">
              <div className="flex justify-center mx-2 w-10 h-10 items-center border border-red-700 main-gradient text-white rounded-full">
                <i className="fa-solid fa-location-dot"></i>
              </div>
            </Link>
            <Link to="">
              <div className="flex justify-center mx-2 w-10 h-10 items-center border border-red-700 main-gradient text-white rounded-full">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
            </Link>
            <Link to="">
              <div className="flex justify-center mx-2 w-10 h-10 items-center border border-red-700 main-gradient text-white rounded-full">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </Link>
            <Link to="">
              <div className="flex justify-center mx-2 w-10 h-10 items-center border border-red-700 main-gradient text-white rounded-full">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </Link>
            <Link to="">
              <div className="flex justify-center mx-2 w-10 h-10 items-center border border-red-700 main-gradient text-white rounded-full">
                <i className="fa-brands fa-x-twitter"></i>
              </div>
            </Link>
            <Link to="">
              <div className="flex justify-center mx-2 w-10 h-10 items-center border border-red-700 main-gradient text-white rounded-full">
                <i className="fa-brands fa-youtube"></i>
              </div>
            </Link>
            <Link to="">
              <div className="flex justify-center mx-2 w-10 h-10 items-center border border-red-700 main-gradient text-white rounded-full">
                <i className="fa-brands fa-tiktok"></i>
              </div>
            </Link>
          </div>
          <div className="absolute top-[430px] right-0 w-[30%] ">
            <div className=" rounded-lg overflow-hidden">
              <img src={img2} alt="" className="w-full " />
            </div>
          </div> */}
        </div>
      </footer>

    </>
  );
}
