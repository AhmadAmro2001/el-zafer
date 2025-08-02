import React, { useEffect, useState } from "react";
import style from "./ServiceDetails.module.css";
import { useLocation } from "react-router-dom";
export default function ServiceDetails() {
  const [data, setData] = useState();
  useEffect(() => {}, []);

  const { state } = useLocation();
  const { photo, title} = state || {};


  const process = [
    {
      title: "BOOKING",
      description:
        "THE SHIPPER BOOKS THE  LCL SERVICE WITH THE  FREIGHT FORWARDER,  PROVIDING DETAILS  ABOUT THE CARGO,  DESTINATION, AND  REQUIRED DELIVERY",
    },
    {
      title: "CONSOLIDATION",
      description:
        "MULTIPLE SHIPMENTS FROM DIFFERENT SHIPPERS ARE COLLECTED AND CONSOLIDATED INTO A SINGLE CONTAINER AT THE ORIGIN WAREHOUSE",
    },
    {
      title: "SHIPPING",
      description:
        " THE CONSOLIDATED CONTAINER IS SHIPPED VIA SEA TO THE DESTINATION PORT",
    },
    {
      title: "DECONSOLIDATION",
      description:
        "AT THE DESTINATION PORT, THE CONTAINER IS OPENED, AND INDIVIDUAL SHIPMENTS ARE SEPARATED FOR FURTHER DELIVERY",
    },
    {
      title: "DELIVERY",
      description:
        " THE SEPARATED SHIPMENTS ARE DELIVERED TO THEIR FINAL DESTINATIONS.",
    },
  ];

  return (
    <>
      <div className="flex flex-col  justify-between container mx-auto px-14 relative py-2 md:mt-32 mt-24 md:py-4 md:pt-14">
        {/* <div className="md:w-[240px] md:h-[240px] w-[100px] h-[100px]  absolute  md:left-24 md:top-6 rounded-se-[150px] bg-[#0C71B9]"></div>
        <div className="absolute w-[15px] h-[15px] md:w-[34px] md:h-[34px] rounded-full border border-black bg-white left-40 top-10 md:left-96 md:top-14"></div> */}

        <div className="md:w-[1030px] md:h-[437px] w-[250px] h-[150px] rounded-3xl overflow-hidden mx-auto mt-14 md:my-12 z-10">
          <img
            src={`${photo}`}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="text-left  w-full md:my-auto mt-4 ">
          <h1 className="md:text-4xl text-[12px] font-bold mb-5">
            {title}
          </h1>
          <p className="text-[#999999] mb-2 md:mb-5 md:text-[20px] text-[8px]">
            LCL (LESS-THAN-CONTAINER LOAD) IS A SHIPPING TERM WHICH ALLOWS
            MULTIPLE SHIPPERS TO SHARE SPACE IN ONE CONTAINER, OPTIMIZING COST
            AND EFFICIENCY.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between container mx-auto px-14 md:px-32">
        <div className="text-left">
          <h2 className="md:text-2xl text-[12px] font-semibold mb-5">
            ADVANTAGES OF LCL?
          </h2>
          <ul className="text-[#999999] md:text-[20px] text-[8px] list-disc ms-6">
            <li>COST EFFECTIVE</li>
            <li>IDEAL FOR DIVERSE CARGO TYPES</li>
            <li>PERFECT FOR SMALL TO MEDIUM SIZED SHIPMENTS</li>
            <li>ENHANCED INVENTORY MANAGEMENT</li>
            <li>ECONOMICAL FOR SMALLER BUSINESSEs</li>
          </ul>
        </div>
        <div className="md:w-[544px] md:h-[286px] w-[250px] h-[150px] ">
          <img
            src="https://res.cloudinary.com/djvzbznry/image/upload/v1750235388/257122c3b771e1afc5b5b784e4e7ed1349bc62a3_v2wmgp.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
      {/* video part */}
      <div className="w-full max-w-4xl mx-auto my-16 px-10 md:px-0 rounded-xl overflow-hidden">
        <video controls className="w-full">
          <source
            src="https://res.cloudinary.com/djvzbznry/video/upload/v1750239237/elzafer_mh9iek.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      {/* process part */}
      <div className="container mx-auto px-10 md:px-32 py-16 bg-[#0C71B9]">
        <h2 className="text-white md:text-3xl text-[16px] font-semibold md:mb-5 mb-2 text-center">
          LCL PROCESS
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {/* item start */}
          {process.map((item, index) => (
            <div key={index} className="group ">
              <div className="text-center p-10 bg-gradient-to-b from-[#FFFFFF] to-[#77A7FB] rounded-xl h-[218px]">
                <h1 className="text-2xl font-bold text-[#E11F25] mb-4">
                  {item.title}
                </h1>
                <p className="text-black md:text-[16px] text-[12px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          {/* item end */}
        </div>
      </div>
      {/* warehouse */}
      <div className="container mx-auto px-10 md:px-24 py-16">
        <h1 className="md:text-3xl text-[12px] font-bold mb-5 text-left">
          CFS WAREHOUSES IN BONDED & RE-EXPORT ZONE
        </h1>
        <div className="flex flex-col md:flex-row justify-between py-5 md:py-10">
          <div className="text-left my-auto">
            <h1 className="md:text-2xl text-[12px] font-bold mb-5 text-left">
              LCL DE-CONSOLIDATION
            </h1>
            <ul className="text-[#999999] md:text-[20px] text-[8px] list-disc ms-6">
              <li> 6 WAREHOUSES IN JEDDAH & DAMMAM SEAPORTS</li>
              <li> STORAGE: SAFE & SECURE, SHORT-TERM & LONG-TERM</li>
              <li>SERVICES: PACKING, LABELING, SEPARATE WAREHOUSE FOR DGR GOODS</li>
              <li> SPEEDY SERVICE WITH COMPETITIVE CHARGE</li>
            </ul>
          </div>
          <div className="md:w-[256px] md:h-[256px] w-[150px] h-[150px] mt-8 md:mt-0 rounded-full overflow-hidden mx-auto">
            <img
              src="https://res.cloudinary.com/djvzbznry/image/upload/v1750245132/serviceDetailsPieChart_pckggi.jpg"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between py-5 md:py-10">
          <div className="w-[256px] h-[256px] rounded-full overflow-hidden mx-auto hidden md:block">
            <img
              src="https://res.cloudinary.com/djvzbznry/image/upload/v1750245132/serviceDetailsPieChart_pckggi.jpg"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="w-2/3 text-left my-auto">
            <h1 className="md:text-2xl text-[12px] font-bold mb-5 text-left">
               RIYADH DRY PORT OPERATIONS
            </h1>
            <ul className="text-[#999999] md:text-[20px] text-[8px] mb-4 list-disc ms-6">
              <li> IMPORT LCL CONSOLES HANDLED BY PORT & CUSTOMS AUTHORITY</li>
              <li> ATTRACTIVE INCENTIVES FOR CONSOLIDATION PARTNERS & CUSTOMERS</li>
            </ul>
            <h1 className="md:text-2xl text-[12px] font-bold mb-5 text-left">
               WAREHOUSE OUTSIDE THE PORT
            </h1>
            <ul className="text-[#999999] md:text-[20px] text-[8px] list-disc ms-6">
              <li>  OFFERED THROUGH JEDDAH, RIYADH, AND DAMMAM.</li>
              <li>  PARTNERING WITH TOP CONSOLIDATORS FROM EUROPE, FAR EAST, INDIAN SUBCONTINENT, AND USA</li>
            </ul>
          </div>
          
        </div>
      </div>
      {/* lcl coparation */}
      <div className='container mx-auto relative px-4 md:px-36 bg-[#095890]'>
        <div className='flex flex-col justify-center items-center md:py-24 py-16  text-white'>
           <h1 className=" text-[16px] md:text-3xl mb-4 font-bold">LCL COOPERATION</h1>
           <p className="text-[10px] md:text-[16px]">WE ARE EAGER TO COLLABORATE WITH YOUR ESTEEMED COMPANY ON IMPORT CONSOLES TO KSA AND BUILD A LONG-TERM PARTNERSHIP.
          WE PRIORITIZE USING OUR OWN CONTAINERS AND AVOID CO-LOADING, EVEN AT SMALLER VOLUMES. WE ARE WILLING TO SHARE LOSSES TO MAINTAIN REGULAR SERVICE FOR CUSTOMERS ON BOTH SIDES. HAVING CONTROL OVER OUR OWN CFS, PROCESS AND COSTS, WE ARE ABLE TO SUPPORT YOUR PREPAID CARGOES WITH REBATE LEVELS PER CBM AND PER SHIPMENT THAT ARE FAR HIGHER THAN ANY OTHER LOCAL COMPETITORS.
          WE HANDLE NOMINATION CARGO FROM VARIOUS ORIGINS AND CAN FOCUS ON FILLING YOUR 
          CONTAINERS WITH HUB CARGO.
          WE ALSO HAVE OUR OWN EXPORT CONSOLE THAT WE MOVE VIA NORTH-SEA OR GULF SUBJECT 
          TO CARGOES MAJOR DESTINATIONS AND COSTS, AND WE CAN AS WELL COOPERATE WITH YOU TO PROVIDE THIS SERVICE FROM JEBEL ALI TO US AND OUR CUSTOMERS. WE ARE EAGER TO UNDERSTAND YOUR SPECIFIC NEEDS AND DISCUSS HOW OUR SERVICES CAN 
          ALIGN WITH YOUR BUSINESS OBJECTIVES</p>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[495px] w-[200px] md:h-[495px] h-[200px] opacity-15 border rounded-full '>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[425px] w-[160px] md:h-[425px] h-[160px]  opacity-15  border rounded-full '>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[319px] w-[120px] md:h-[319px] h-[120px]  opacity-15  border rounded-full '>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[225px] w-[80px] md:h-[225px] h-[80px]  opacity-15  border rounded-full '>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[120px] w-[50px] md:h-[120px] h-[50px]  opacity-15  bg-white rounded-full '>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[75px] w-[35px] md:h-[75px] h-[35px]  opacity-20  bg-white rounded-full '>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[40px] w-[20px] md:h-[40px] h-[20px]  opacity-25  bg-white rounded-full '>
        </div>
        
      </div>
    </>
  );
}
