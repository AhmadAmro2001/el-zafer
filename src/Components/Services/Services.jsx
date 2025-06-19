import React, { useEffect, useState } from 'react'
import style from './Services.module.css'
import { Link } from 'react-router-dom'
export default function Services() {
    const [data, setData] = useState()
    useEffect(() => {}, [])
  return <>
      <div className='container mx-auto relative px-4 md:px-36 bg-[#095890]'>
        <div className='flex flex-col justify-center items-center h-[200px] md:h-[682px]  text-white'>
            <p className='md:mb-5 md:text-2xl text-[8px]'>Services</p>
            <h3 className='md:text-3xl text-[12px] md:mb-2'>We are committed to providing top-notch services that exceed our customers' expectations</h3>
            <p className='md:mt-5 md:text-xl text-[8px]'> Ensuring that their packages are handled with the utmost care and delivered in a timely manner to their desired destination.</p>
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
        <div className='w-[20px] h-[10px] md:w-[66px] md:h-[33px] absolute md:bottom-32 bottom-6'>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1749622969/arrow_ivw54b.png" alt="" />
        </div>
      </div>
      {/* left */}
      <div className='flex flex-col md:flex-row justify-between container mx-auto px-10 relative py-4 md:pt-14'>
      <div className='md:w-[240px] md:h-[240px] w-[100px] h-[100px]  absolute left-20 md:left-12 rounded-se-[150px] bg-[#0C71B9]'>
      </div>
      <div className='absolute w-[15px] h-[15px] md:w-[34px] md:h-[34px] rounded-full border border-black bg-white left-44 top-12 md:left-72 md:top-16'>
      </div>

      <div className='md:w-[523px] md:h-[437px] w-[150px] h-[150px] rounded-3xl overflow-hidden md:mt-24 mt-12 md:ms-16 ms-16 z-10'>
        <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1749985397/services1_yrb2mi.png" className='w-full h-full' alt="" />
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
      {/* right */}
      <div className='flex flex-col md:flex-row justify-between container mx-auto px-10 relative py-4 md:py-8'>
      <div className='md:w-[240px] md:h-[240px] w-[100px] h-[100px]  absolute right-28 md:right-12 rounded-ss-[150px] bg-[#0C71B9]'>
      </div>
      <div className='absolute w-[15px] h-[15px] md:w-[34px] md:h-[34px] rounded-full border border-black bg-white right-52 top-12 md:right-72 md:top-16'>
      </div>

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
      {/* left 2 */}
      <div className='flex flex-col md:flex-row justify-between container mx-auto px-10 relative py-4 md:py-8'>
      <div className='md:w-[240px] md:h-[240px] w-[100px] h-[100px]  absolute left-20 md:left-12 rounded-se-[150px] bg-[#0C71B9]'>
      </div>
      <div className='absolute w-[15px] h-[15px] md:w-[34px] md:h-[34px] rounded-full border border-black bg-white left-44 top-12 md:left-72 md:top-16'>
      </div>

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
      {/* right 2*/}
      <div className='flex flex-col md:flex-row justify-between container mx-auto px-10 relative py-4 md:py-8'>
      <div className='md:w-[240px] md:h-[240px] w-[100px] h-[100px]  absolute right-28 md:right-12 rounded-ss-[150px] bg-[#0C71B9]'>
      </div>
      <div className='absolute w-[15px] h-[15px] md:w-[34px] md:h-[34px] rounded-full border border-black bg-white right-52 top-12 md:right-72 md:top-16'>
      </div>

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
      {/* left 3 */}
      <div className='flex flex-col md:flex-row justify-between container mx-auto px-10 relative pb-8 pt-4 md:pb-12'>
      <div className='md:w-[240px] md:h-[240px] w-[100px] h-[100px]  absolute left-20 md:left-12 rounded-se-[150px] bg-[#0C71B9]'>
      </div>
      <div className='absolute w-[15px] h-[15px] md:w-[34px] md:h-[34px] rounded-full border border-black bg-white left-44 top-12 md:left-72 md:top-16'>
      </div>

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
      </div>
    </>
    
}
