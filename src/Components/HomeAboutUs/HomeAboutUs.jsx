import React, { useEffect, useState } from 'react'
import style from './HomeAboutUs.module.css'
import { Link } from 'react-router-dom'
export default function HomeAboutUs() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className='container  mx-auto px-4 md:px-32 my-5 md:my-24'>
        <div className='row  '>
            <div className='  w-full md:w-[55%] text-left pe-0 my-16 md:pe-12 '>
              <h1 className='text-red-700 text-3xl font-bold pb-2'>About us</h1>
              <h1 className='max-w-[90%] md:max-w-full text-gray-800'>Al Zafer Wings Cargo Services Co. is an international freight forwarding outfit headquartered in Jeddah,</h1>
              <p className='max-w-[90%] md:max-w-full mb-5 text-gray-800'>Which has represented excellence in the shipping, forwarding and logistics industry for almost four decades. We offer years of professional experience within the freight forwarding, logistics and commercial storage sectors.</p>
              <Link to='/about' className='text-red-600 font-bold '>Read More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className='w-full h-[360px] relative  mx-5 md:w-[40%]'>
              <div className='w-[340px] h-[211px] absolute z-30 top-0 left-0 border rounded-md overflow-hidden '>
              <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1749623008/homeAbout1_mxigqh.png" alt="" className='w-full h-full'/>
              </div>
              <div className='w-[279px] h-[174px] absolute z-10 bottom-0 right-0 border rounded-md overflow-hidden'>
              <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1749622992/homeAbout2_hwk3er.png" alt="" className='w-full h-full'/>
              </div>
              <div className='w-[113.17px] h-[135px] absolute z-20 bottom-0 left-0  '>
              <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1749623001/homeAbout3_s80awa.png" alt="" className='w-full h-full'/>
              </div>
            </div>

        </div>
      </div>
    </>
}
