import React, { useEffect, useState } from 'react'
import style from './Services.module.css'
import { Link } from 'react-router-dom'
export default function Services() {
    const [data, setData] = useState()
    useEffect(() => {}, [])
  return <>
      
      {/* left */}
      <div className='flex flex-col md:flex-row justify-between my-16 container mx-auto px-10 relative py-4 md:pt-14'>

      <div className='md:w-[523px] md:h-[437px] w-[150px] h-[150px] rounded-3xl overflow-hidden md:mt-24 mt-12 md:ms-16 ms-16 z-10'>
        <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1749985397/services1_yrb2mi.png" className='w-full h-full object-cover' alt="" />
      </div>
      <div className='text-left md:w-1/2 w-full md:my-auto mt-4 '>
        <h1 className='md:text-4xl text-[12px] font-bold mb-5'>LCL IMPORT /EXPORT CONSOLIDATION & DECONSOLIDATION</h1>
        <p className='text-[#999999] mb-2 md:mb-5 md:text-[20px] text-[8px]'>Sea logistics has been our nucleus area of operations. Al Zafer offers time definitive FCL & LCL ocean freight services to anywhere in the world enabling our clients to achieve their objectives in supply chain management ...</p>
        <p className='text-[#999999]  md:text-[20px] md:mb-5 text-[8px]'>Sea logistics has been our nucleus area of operations. Al Zafer offers time definitive FCL & LCL ocean freight services to anywhere in the world enabling our clients to achieve their objectives in supply chain management ...</p>
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
