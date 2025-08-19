import React, { useEffect, useState } from 'react'
import style from './Services.module.css'
import { Link } from 'react-router-dom'
export default function Services() {
    const [data, setData] = useState()
    useEffect(() => {}, [])
  return <>
      
      {/* left */}
      <div className='flex flex-col md:flex-row justify-between mt-32 mb-10 container mx-auto px-8 relative py-4 md:pt-14'>

      <div className='md:w-[40%] md:h-[437px] w-[150px] h-[150px]  overflow-hidden px-8 md:mt-22 mt-12 z-10'>
        <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1749985397/services1_yrb2mi.png" className='w-full h-full rounded-3xl object-cover' alt="" />
      </div>
      <div className='text-left md:w-[60%] w-full md:my-auto mt-4 '>
        <h1 className='md:text-2xl text-[12px] font-bold mb-5 text-red-700'>LCL IMPORT /EXPORT CONSOLIDATION & DECONSOLIDATION</h1>
        <p className='text-[#999999] mb-2 md:mb-5 md:text-[16px] text-[8px]'>We offer a comprehensive range of logistics solutions, while having our historical core-competence and main success being the leaders in the consolidation business.

We are proud to be the first company in Saudi Arabia to introduce LCL services concept via dedicated CFS rather than public port warehouses.

we operate our own bonded facilities at main ports (Dammam / Jeddah  / Riyadh) ensuring seamless and efficient service for our customers and agents.

 

Confident that we are providing a second-to-none services for LCL Consolidation & De-Consolidation in KS, with long proven history & state of the art facilities supporting our statue,

we are highly interested in establishing a mutually beneficial cooperation with overseas partners particularly in handling import consolidations to Saudi Arabia.

Our goal is to build a long-term, successful partnership and base a ‘Direct Full Box’ by investing in resources and money to get it done.

 

With full control over our own CFS, processes, and costs, we are positioned to offer highly competitive destination charges as well as best rebate levels paid-back far exceeding those of any other local competitors. Thus, supporting our overseas partners efforts to canvas volumes.

 

For a mutual ‘Regular Direct Full Box’ as ultimate goal, we also add nominated cargo & share the risks if initial lower volumes.

 

We can accommodate desired destination charges / collections you may have agreed with your customers and provide flexibility and consistency in pricing.

 

Additionally, we are open to collaborate with overseas partners also on our own export consolidation boxes, offering the service from KSA to shipping hubs, weather finally destined or with a second-leg to further destinations.</p>
        <Link
          to="serviceDetails"
          state={{
            title: "LCL IMPORT /EXPORT CONSOLIDATION & DECONSOLIDATION",
            photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1749985397/services1_yrb2mi.png",
          }}
          className='text-[#0C71B9] font-semibold text-[10px]  md:text-[20px]'
          >
            Read more <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
      </div>
      
      {/* <div className='flex flex-col md:flex-row justify-between container mx-auto px-10 relative py-4 md:py-8'>
      

      <div className='md:w-[523px] md:h-[437px] w-[150px] h-[150px] rounded-3xl overflow-hidden md:mt-24 mt-12 md:ms-16 ms-16 z-10 block md:hidden'>
        <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1750045811/services2_sviq4f.png" className='w-full h-full' alt="" />
      </div>
      <div className='text-left md:w-1/2 w-full md:my-auto mt-4 '>
        <h1 className='md:text-4xl text-[12px] font-bold mb-5'>Aviation</h1>
        <p className='text-[#999999] mb-2 md:mb-5 md:text-[20px] text-[8px]'>We provide complete aviation services including Charter Flights to all over the world, Leasing of all kinds of aircrafts, Organizing Hajj & Umrah flights, Ground Handling Services, V.I.P. Charter Flights, Chartering of cargo flights, etc ...</p>
        <p className='text-[#999999]  md:text-[20px] md:mb-5 text-[8px]'>We provide complete aviation services including Charter Flights to all over the world, Leasing of all kinds of aircrafts, Organizing Hajj & Umrah flights, Ground Handling Services, V.I.P. Charter Flights, Chartering of cargo flights, etc ...</p>
        <Link
          to="serviceDetails"
          state={{
            title: "Aviation",
            photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1750045811/services2_sviq4f.png",
          }}
          className='text-[#0C71B9] font-semibold text-[10px]  md:text-[20px]'
          >
            Read more <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
      <div className='md:w-[523px] md:h-[437px] w-[150px] h-[150px] rounded-3xl overflow-hidden md:mt-24 mt-12 md:mr-16 mr-0 z-10 hidden md:block'>
        <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1750045811/services2_sviq4f.png" className='w-full h-full' alt="" />
      </div>
      </div>
      
      <div className='flex flex-col md:flex-row justify-between container mx-auto px-10 relative py-4 md:py-8'>

      <div className='md:w-[523px] md:h-[437px] w-[150px] h-[150px] rounded-3xl overflow-hidden md:mt-24 mt-12 md:ms-16 ms-16 z-10'>
        <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1750045791/services3_yu0iqa.jpg" className='w-full h-full object-cover' alt="" />
      </div>
      <div className='text-left md:w-1/2 w-full md:my-auto mt-4 '>
        <h1 className='md:text-4xl text-[12px] font-bold mb-5'>Services air cargo</h1>
        <p className='text-[#999999] mb-2 md:mb-5 md:text-[20px] text-[8px]'>Sea logistics has been our nucleus area of operations. Al Zafer offers time definitive FCL & LCL ocean freight services to anywhere in the world enabling our clients to achieve their objectives in supply chain management ...</p>
        <p className='text-[#999999]  md:text-[20px] md:mb-5 text-[8px]'>Sea logistics has been our nucleus area of operations. Al Zafer offers time definitive FCL & LCL ocean freight services to anywhere in the world enabling our clients to achieve their objectives in supply chain management ...</p>
        <Link
          to="serviceDetails"
          state={{
            title: "Services air cargo",
            photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1750045791/services3_yu0iqa.jpg",
          }}
          className='text-[#0C71B9] font-semibold text-[10px]  md:text-[20px]'
          >
            Read more <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
      </div>
      
      <div className='flex flex-col md:flex-row justify-between container mx-auto px-10 relative py-4 md:py-8'>

      <div className='md:w-[523px] md:h-[437px] w-[150px] h-[150px] rounded-3xl overflow-hidden md:mt-24 mt-12 md:ms-16 ms-16 z-10 block md:hidden'>
        <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1750045811/services4_xmblnl.png" className='w-full h-full' alt="" />
      </div>
      <div className='text-left md:w-1/2 w-full md:my-auto mt-4 '>
        <h1 className='md:text-4xl text-[12px] font-bold mb-5'>Transportation</h1>
        <p className='text-[#999999] mb-2 md:mb-5 md:text-[20px] text-[8px]'>We provide complete aviation services including Charter Flights to all over the world, Leasing of all kinds of aircrafts, Organizing Hajj & Umrah flights, Ground Handling Services, V.I.P. Charter Flights, Chartering of cargo flights, etc ...</p>
        <p className='text-[#999999]  md:text-[20px] md:mb-5 text-[8px]'>We provide complete aviation services including Charter Flights to all over the world, Leasing of all kinds of aircrafts, Organizing Hajj & Umrah flights, Ground Handling Services, V.I.P. Charter Flights, Chartering of cargo flights, etc ...</p>
        <Link
          to="serviceDetails"
          state={{
            title: "Transportation",
            photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1750045811/services4_xmblnl.png",
          }}
          className='text-[#0C71B9] font-semibold text-[10px]  md:text-[20px]'
          >
            Read more <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
      <div className='md:w-[523px] md:h-[437px] w-[150px] h-[150px] rounded-3xl overflow-hidden md:mt-24 mt-12 md:mr-16 mr-0 z-10 hidden md:block'>
        <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1750045811/services4_xmblnl.png" className='w-full h-full' alt="" />
      </div>
      </div>
      
      <div className='flex flex-col md:flex-row justify-between container mx-auto px-10 relative pb-8 pt-4 md:pb-12'>

      <div className='md:w-[523px] md:h-[437px] w-[150px] h-[150px] rounded-3xl overflow-hidden md:mt-24 mt-12 md:ms-16 ms-16 z-10'>
        <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1750045803/services5_dsriar.png" className='w-full h-full object-cover' alt="" />
      </div>
      <div className='text-left md:w-1/2 w-full md:my-auto mt-4 '>
        <h1 className='md:text-4xl text-[12px] font-bold mb-5'>Shipping</h1>
        <p className='text-[#999999] mb-2 md:mb-5 md:text-[20px] text-[8px]'>Sea logistics has been our nucleus area of operations. Al Zafer offers time definitive FCL & LCL ocean freight services to anywhere in the world enabling our clients to achieve their objectives in supply chain management ...</p>
        <p className='text-[#999999]  md:text-[20px] md:mb-5 text-[8px]'>Sea logistics has been our nucleus area of operations. Al Zafer offers time definitive FCL & LCL ocean freight services to anywhere in the world enabling our clients to achieve their objectives in supply chain management ...</p>
        <Link
          to="serviceDetails"
          state={{
            title: "Shipping",
            photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1750045803/services5_dsriar.png",
          }}
          className='text-[#0C71B9] font-semibold text-[10px]  md:text-[20px]'
          >
            Read more <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
      </div> */}
    </>
    
}
