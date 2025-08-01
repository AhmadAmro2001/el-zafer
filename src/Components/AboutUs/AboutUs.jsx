import React, { useEffect, useState } from 'react'
import style from './AboutUs.module.css'
import AboutUsSlider from "../AboutUsSlider/AboutUsSlider";
import AboutUsCaption from '../AboutUsCaption/AboutUsCaption';
import AboutUsPartners from '../AboutUsPartners/AboutUsPartners';
import AboutUsMission from '../AboutUsMission/AboutUsMission';
import AboutUsWhy from '../AboutUsWhy/AboutUsWhy';

export default function AboutUs() {
    useEffect(() => {
        
    }, [])
  return <>
      <div className='container mx-auto relative px-4 md:px-36 md:mt-20 mt-24 text-white bg-[#095890]'>
        <div className='flex flex-col justify-center items-center  md:h-screen h-[250px] '>
            <h1 className='md:mb-5 md:text-6xl text-[24px] mb-3 font-bold'>About us</h1>
            <h3 className='md:text-xl text-[10px] md:mb-2 '>Al Zafer Wings Cargo Services Co. is an international freight forwarding outfit</h3>
            <h3 className='md:text-xl text-[10px] md:mb-2 '>headquartered in Jeddah, which has represented excellence in the shipping, forwarding</h3>
            <h3 className='md:text-xl text-[10px] md:mb-2 '>and logistics industry for almost four decades.</h3>
            <p className='md:mt-5 md:text-lg text-[8px] text-center '>We offer years of professional experience within the freight forwarding, logistics and commercial storage sectors. Our portfolio of specialized services includes International Freight Forwarding for ocean and airfreight, Liner Service, Container Freight Station</p>
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
      <AboutUsSlider/>
      <AboutUsCaption/>
      <AboutUsPartners/>
      <AboutUsMission/>
      <AboutUsWhy/>
    </>
}
