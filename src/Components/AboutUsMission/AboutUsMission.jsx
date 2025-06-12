import React, { useEffect, useState } from 'react'
import style from './AboutUsMission.module.css'
export default function AboutUsMission() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className=' bg-[#0C71B9] w-[80%] text-center mx-auto p-5 md:p-20 rounded-3xl'>
        <h1 className='text-white md:text-3xl text-[12px] mb-5 font-semibold'>Our vision</h1>
        <p className='text-white md:text-[16px] text-[8px]'>We offer years of professional experience within the freight forwarding, logistics and commercial storage sectors. Our portfolio of specialized services includes International Freight Forwarding for ocean and airfreight, Liner Service, Container Freight Station, Stevedoring & Terminal Operations, Customs Broking, Cargo Survey and Container Yard.
        Our Company strives to gain the respect and ongoing support of our customers by offering high quality and value added service while maintaining the highest ethical standards. Our Objective is to perform beyond the expectations of all our customers in everything we do.</p>
      </div>
      <div className='bg-[#F2F2F2] w-[80%] text-center mx-auto p-5 md:p-20 rounded-3xl mt-5 '>
        <h1 className=' md:text-3xl text-[12px] font-semibold mb-5'>Our mission</h1>
        <p className='text-[#666666] md:text-[16px] text-[8px]'>We offer years of professional experience within the freight forwarding, logistics and commercial storage sectors. Our portfolio of specialized services includes International Freight Forwarding for ocean and airfreight, Liner Service, Container Freight Station, Stevedoring & Terminal Operations, Customs Broking, Cargo Survey and Container Yard.
        Our Company strives to gain the respect and ongoing support of our customers by offering high quality and value added service while maintaining the highest ethical standards. Our Objective is to perform beyond the expectations of all our customers in everything we do.</p>
      </div>
    </>
}
