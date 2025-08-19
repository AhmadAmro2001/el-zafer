import React, { useEffect, useState } from "react";
import style from "./HomeHyperLinks.module.css";
import { Link } from "react-router-dom";
export default function HomeHyperLinks() {
  return (
    <>
      <div
        className=" relative container mx-auto h-[200px] bg-contain md:h-[600px]"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/djvzbznry/image/upload/v1750866669/Back_tllth4.png)`,
        }}
      >
        <h1 className='text-red-700 text-3xl font-bold  text-left px-4 md:px-32 pt-6 md:pt-24'>Our Services</h1>
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 ">
          <div className="flex items-center justify-center">
            <Link
              to="details"
              state={{
                title: "Sea Freight",
                photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1751183629/Sea_Freight_vhhety.jpg",
                desc: "We provide cost effective and professional services in moving LCL, FCL Break bulks and reefers through our international network. \n We undertake packing, warehousing, domestic & international moving of all kinds of cargoes such as personal effects, commercial cargoes and diplomatic shipments. We have regular door to door service to Indonesia and Philippines.",
              }}
              className="md:w-[130px] w-[30px] hover:scale-110 transition-all duration-300 overflow-hidden md:mx-[4px] mx-[2px] mt-10 md:mt-32"
            >
              <img
                src="https://res.cloudinary.com/djvzbznry/image/upload/v1754239913/sea_freight_qewyvy.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </Link>
            <Link
              to="details"
              state={{
                title:"Air Frieght",
                photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1750045791/services3_yu0iqa.jpg",
                desc: "Al Zafer has built and preserved a strong partnership with the world's premier air carriers. Our confirmed space allocations guarantee you flexibility in routing. We cater for all manner of airfreight import and export movements from single documents to the development of long term, high volume regular cargo shipments. Due to an ever increasing demand for shorter transit times internationally, we utilize premium air freight carriers with established routings for our air freight. Many different options are available for the most competitive and reliable air freight forwarding service. \n Our air cargo warehouse located in the mid-city is having all the contemporary facilities to handle any volume of cargoes. Its convenient location and proximity to the major truck ways enables us to control the timely movement of cargoes to/from airport.",
              }}
              className="md:w-[130px] w-[30px] hover:scale-110 transition-all duration-300 overflow-hidden md:mx-[4px] mx-[2px] mt-10 md:mt-32"
            >
              <img
                src="https://res.cloudinary.com/djvzbznry/image/upload/v1754239912/air_freight_cgjhlk.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </Link>
            <Link
            to="details"
            state={{
              title:"Land Transport",
              photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1751183633/Land_Transport_mduddr.jpg",
              desc: "As part of our integrated services, we also offer land transportation solutions to move your goods of any size, efficiently and economically shape or quantity from one point to the other, employing specialized equipments with heavy lift capabilities. We maintain our own in-contact vehicle fleet for freight collection and delivery throughout the Kingdom. Our fleet consists of 200 trailers including reefer.",

             }}
            className="md:w-[130px] w-[30px] hover:scale-110 transition-all duration-300 overflow-hidden md:mx-[4px] mx-[2px] mt-10 md:mt-32">
              <img
                src="https://res.cloudinary.com/djvzbznry/image/upload/v1754239913/Land_Transport_cbtalq.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </Link>
            <Link
            to="details"
            state={{
              title:"Customs Clearance",
              photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1751685023/custom_clearance_pj4q0y.jpg",
              desc: "We make imports & exports simple by providing professional customs brokerage and clearance. Our electronic interface with Saudi Customs and other government agencies enables us to expedite and clear your shipment. We are continuously updating our system with all changes to customs regulatory procedures, ensuring our customers prompt observance.",

             }}
            className="md:w-[130px] w-[30px] hover:scale-110 transition-all duration-300 overflow-hidden md:mx-[4px] mx-[2px] mt-10 md:mt-32">
              <img
                src="https://res.cloudinary.com/djvzbznry/image/upload/v1754239913/Customs_Clearance_tgosrq.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </Link>
            <Link
             to="services"
             state={{
              title:"LCL Consolidation",
              photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1751183634/LCL_FCL_mmboat.png",
              desc: "",

             }}
             className="md:w-[130px] w-[30px] hover:scale-110 transition-all duration-300 overflow-hidden md:mx-[4px] mx-[2px] mt-10 md:mt-32">
              <img
                src="https://res.cloudinary.com/djvzbznry/image/upload/v1754239913/FCL_LCL_wkn9ub.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </Link>
            <Link
            to="details"
            state={{
              title:"Cargo Storage",
              photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1751183633/Cargo_Storage_afuao9.jpg",
              desc: "We have a well-equipped and huge container terminal and storage yard. It is one of the largest of its kind in Saudi Arabia. This well equipped container and storage yard has a warehouse of 2000 sq ft. This facility enables us to handle big volume of different type cargoes very smoothly and safely.",

             }}
            className="md:w-[130px] w-[30px] hover:scale-110 transition-all duration-300 overflow-hidden md:mx-[4px] mx-[2px] mt-10 md:mt-32">
              <img
                src="https://res.cloudinary.com/djvzbznry/image/upload/v1754239913/Cargo_Storage_c7ccsv.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </Link>
            <Link
            to="details"
            state={{
              title:"NVOCC",
              photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1751183633/NVOCC_joe7bk.jpg",
              desc: "We are the pioneers in establishing Bonded Warehousing inside Jeddah port. The Facility is state of the art IT integrated bonded freight station and warehousing service which provides importers and shipping companies who require de-stuff containers for onward distribution. We operate 8 well equipped warehouses in the bonded area inside Jeddah port. We provide CFS warehousing facility to most of the local forwarders for de-stuffing their import consol boxes.",

             }}
            className="md:w-[130px] w-[30px] hover:scale-110 transition-all duration-300 overflow-hidden md:mx-[4px] mx-[2px] mt-10 md:mt-32">
              <img
                src="https://res.cloudinary.com/djvzbznry/image/upload/v1754239913/nvocc_oxywhf.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </Link>
            <Link
            to="details"
            state={{
              title:"Project Cargo",
              photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1751685073/project_cargo_pwj186.jpg",
              desc: "We offer tailored local transportation services for oversized heavy cargoes as well as flexible worldwide project solutions by sea, air, and land. With our experienced project forwarding team, you have one dedicated contact person for your whole chain of transport. We are able to provide the solution for your special transport needs, with multiple services and provide quick information about your cargo and flexibility between cargo options you need.",

             }}
            className="md:w-[130px] w-[30px] hover:scale-110 transition-all duration-300 overflow-hidden md:mx-[4px] mx-[2px] mt-10 md:mt-32">
              <img
                src="https://res.cloudinary.com/djvzbznry/image/upload/v1754239912/Project_cargo_ryz3cc.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </Link>
            <Link
            to="details"
            state={{
              title:"Marine Surveyor",
              photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1755564605/WhatsApp_Image_2025-08-18_at_10.36.41_d3a1884f_tbyfbx.jpg",
              desc: "We have separate division for cargo survey and loss adjustment with highly specialized and skilled staff consists of Captain, Engineers, Marine Surveyors, Non Marine Surveyors etc.",

             }}
            className="md:w-[130px] w-[30px] hover:scale-110 transition-all duration-300 overflow-hidden md:mx-[4px] mx-[2px] mt-10 md:mt-32">
              <img
                src="https://res.cloudinary.com/djvzbznry/image/upload/v1754239914/Marine_Surveyor_hbntkg.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </Link>
          </div>
        </div>

        <div className="logo md:w-[650px] w-[300px] absolute -bottom-10 md:-bottom-20 left-1/2 transform -translate-x-1/2">
          <img
            src="https://res.cloudinary.com/djvzbznry/image/upload/v1749622979/el-zafer-logo_l6b5ly.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
