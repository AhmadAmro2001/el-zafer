import React, { useEffect, useState } from 'react'
import style from './AboutUsCaption.module.css'
export default function AboutUsCaption() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className='container mx-auto px-5 md:px-32 text-left py-5 md:py-16'>
          <h2 className='font-semibold md:text-3xl text-[12px] mb-5'>We offer years of professional experience within the freight forwarding, logistics and commercial storage sectors</h2>
          <p className='text-gray-800 md:text-[16px] text-[8px]'>We offer years of professional experience within the freight forwarding, logistics and commercial storage sectors. Our portfolio of specialized services includes International Freight Forwarding for ocean and airfreight, Liner Service, Container Freight Station, Stevedoring & Terminal Operations, Customs Broking, Cargo Survey and Container Yard.
          Our Company strives to gain the respect and ongoing support of our customers by offering high quality and value added service while maintaining the highest ethical standards. Our Objective is to perform beyond the expectations of all our customers in everything we do.</p>
      </div>
    </>
}
