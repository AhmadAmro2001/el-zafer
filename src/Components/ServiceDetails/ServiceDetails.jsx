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
      title: "Booking",
      description:
        "The shipper books the LCL service with the freight forwarder, providing details about the cargo, destination, and required delivery",
    },
    {
      title: "Consolidation",
      description:
        "Multiple shipments from different shippers are collected and consolidated into a single container at the origin warehouse",
    },
    {
      title: "Shipping",
      description:
        "The consolidated container is shipped via sea to the destination port",
    },
    {
      title: "Deconsolidation",
      description:
        "At the destination port, the container is opened, and individual shipments are separated for further delivery",
    },
    {
      title: "Delivery",
      description:
        "The separated shipments are delivered to their final destinations.",
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
          <h1 className="md:text-4xl text-[12px] font-bold mb-5 text-red-700">
            {title}
          </h1>
          <p className=" mb-2 md:mb-5 md:text-[20px] text-[8px]">
            LCL (Less-Than-Container Load) is a shipping term which allows
            multiple shippers to share space in one container, optimizing cost
            and efficiency.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between container mx-auto px-14 md:px-16">
        <div className="text-left">
          <h2 className="md:text-2xl text-[12px] font-semibold mb-5 text-red-700">
            Advantages of LCL?
          </h2>
          <ul className=" md:text-[20px] text-[8px] list-disc ms-6">
            <li>Cost effective</li>
            <li>Ideal for diverse cargo types</li>
            <li>Perfect for small to medium sized shipments</li>
            <li>Enhanced inventory management</li>
            <li>Economical for smaller businesses</li>
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
          LCL process
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
        <h1 className="md:text-3xl text-[12px] font-bold mb-5 text-left text-red-700">
          CFS warehouses in bonded & re-export zone
        </h1>
        <div className="flex flex-col md:flex-row justify-between py-5 md:py-10">
          <div className="text-left my-auto">
            <h1 className="md:text-2xl text-[12px] font-bold mb-5 text-left text-red-700">
              LCL de-consolidation
            </h1>
            <ul className=" md:text-[20px] text-[8px] list-disc ms-6">
              <li> 6 warehouses in JEDDAH & DAMMAM seaports</li>
              <li> storage: safe & secure, short-term & long-term</li>
              <li>services: packing, labeling, separate warehouse for DGR goods</li>
              <li> speedy service with competitive charge</li>
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
            <h1 className="md:text-2xl text-[12px] font-bold mb-5 text-left text-red-700">
              Riyadh dry port operations
            </h1>
            <ul className=" md:text-[20px] text-[8px] mb-4 list-disc ms-6">
              <li> import LCL consoles handled by port & customs authority</li>
              <li> attractive incentives for consolidation partners & customers</li>
            </ul>
            <h1 className="md:text-2xl text-[12px] font-bold mb-5 text-left text-red-700">
              Warehouse outside the port
            </h1>
            <ul className=" md:text-[20px] text-[8px] list-disc ms-6">
              <li>  offered through JEDDAH, RIYADH, AND DAMMAM.</li>
              <li>  partnering with top consolidators from EUROPE, FAR EAST, INDIAN SUBCONTINENT, AND USA</li>
            </ul>
          </div>
          
        </div>
      </div>
      {/* lcl coparation */}
      <div className='container mx-auto relative px-4 md:px-36 bg-[#095890]'>
        <div className='flex flex-col justify-center items-center md:py-24 py-16  text-white'>
           <h1 className=" text-[16px] md:text-3xl mb-4 font-bold">LCL Cooperation</h1>
           <p className="text-[10px] md:text-[16px]">We are eager to collaborate with your esteemed company on import consoles to KSA and build a long-term partnership.
          We prioritize using our own containers and avoid co-loading, even at smaller volumes. We are willing to share losses to maintain regular service for customers on both sides. Having control over our own CFS, process and costs, we are able to support your prepaid cargoes with rebate levels per CBM and per shipment that are far higher than any other local competitors.
          We handle nomination cargo from various origins and can focus on filling your 
          containers with hub cargo.
          We also have our own export console that we move via NORTH-SEA or gulf subject 
          to cargoes major destinations and costs, and we can also cooperate with you to provide this service from JEBEL ALI to US and our customers. We are eager to understand your specific needs and discuss how our services can 
          align with your business objectives</p>
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
