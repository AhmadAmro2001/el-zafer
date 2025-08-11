import React, { useEffect, useState } from 'react'
import style from './TrackingAndQoutaions.module.css'
import Qoutations from '../Qoutations/Qoutations'
import Tracking from '../Tracking/Tracking'
export default function TrackingAndQoutaions() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
    {/* <div className='container mx-auto relative px-4 md:px-36 md:mt-20 mt-24 text-white bg-[#095890]'>
        <div className='flex flex-col justify-center items-center  md:h-screen h-[250px] '>
            <h1 className='md:mb-5 md:text-6xl text-[24px] mb-3 font-bold'>Track Your   Shipment</h1>
            <h3 className='md:text-xl text-[10px] md:mb-2 '>Track your shipment through its journey from loading to discharge</h3>
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
        
      </div> */}
      <div className='container mx-auto px-4 my-10 md:my-44 md:px-24'>
      <Tracking/>
      
    </div>
    </>
}
