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
        className="w-full text-[#063A60] p-8 bg-center bg-no-repeat bg-cover min-h-[160px]  md:min-h-[559px]"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <div className="container mx-auto relative">
          <div className="absolute top-0 right-6">
            <h3 className="font-bold ">INTERNATIONAL FREIGHT FORWARDING</h3>
            <div className="flex ">
              <h4 className="font-bold border-r border-red-700 px-1">SEA</h4>
              <h4 className="font-bold border-r border-red-700 px-1">AIR</h4>
              <h4 className="font-bold border-r border-red-700 px-1">LAND</h4>
              <h4 className="font-bold border-r border-red-700 px-1">
                MULTIMODAL
              </h4>
              <h4 className="font-bold px-1">DOOR DELIVERY</h4>
            </div>
          </div>
          <div className="absolute top-48 left-0 max-w-[47%]">
            <div className="flex justify-between ">
              <h3 className="font-bold">For bussiness inquires :</h3>
              <h3 className="font-bold ">Management</h3>
            </div>
            <div className="flex text-sm max-w-[49%]">
              <div className=" border-r pe-2 border-red-700">
                <p>marketing3@alzafercargo.com</p>
                <p>+966 55 086 9965</p>
                <p>+966 12 664 6888</p>
              </div>
              <div className=" border-r px-2 border-red-700">
                <p>shipping3@alzafercargo.com</p>
                <p>+966 55 11 83824</p>
                <p>+966 12 664 6888</p>
              </div>
              <div className=" border-r px-2 border-red-700">
                <p>logistics@alzafercargo.com</p>
                <p>+966 555 149 065</p>
                <p>+966 555 149 065</p>
              </div>
              <div className="px-2">
                <p>qatamesh@alzafercargo.com</p>
                <p>+966 50 572 2495</p>
                <p>+966 12 664 6888</p>
              </div>
            </div>
          </div>
          <div className="absolute top-72 left-0">
            <div className="flex">
              <h4 className="font-bold border-r border-red-700 pe-2">
                SHIPPING
              </h4>
              <h4 className="font-bold border-r border-red-700 px-2">
                LOGISTICS
              </h4>
              <h4 className="font-bold border-r border-red-700 px-2">
                AVIATION
              </h4>
              <h4 className="font-bold border-r border-red-700 px-2">
                CUSTOMS CLEARANCE
              </h4>
              <h4 className="font-bold border-r border-red-700 px-2">
                WAREHOUSING
              </h4>
              <h4 className="font-bold border-r border-red-700 px-2">
                TRANSPORTATION
              </h4>
              <h4 className="font-bold px-2">CONTAINER LINE</h4>
            </div>
          </div>
          {/* missing section here */}
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
          </div>
        </div>
      </footer>

    </>
  );
}
