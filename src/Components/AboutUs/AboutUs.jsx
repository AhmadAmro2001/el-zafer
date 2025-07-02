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
      <div className='container mx-auto relative px-4 md:px-36 '>
        <div className='flex flex-col justify-center items-center h-[200px] md:h-[682px]'>
            <h1 className='md:mb-5 md:text-6xl text-[24px] mb-3 font-bold'>About us</h1>
            <h3 className='md:text-xl text-[10px] md:mb-2 text-gray-800'>Al Zafer Wings Cargo Services Co. is an international freight forwarding outfit</h3>
            <h3 className='md:text-xl text-[10px] md:mb-2 text-gray-800'>headquartered in Jeddah, which has represented excellence in the shipping, forwarding</h3>
            <h3 className='md:text-xl text-[10px] md:mb-2 text-gray-800'>and logistics industry for almost four decades.</h3>
            <p className='md:mt-5 md:text-lg text-[8px] text-center text-gray-800'>We offer years of professional experience within the freight forwarding, logistics and commercial storage sectors. Our portfolio of specialized services includes International Freight Forwarding for ocean and airfreight, Liner Service, Container Freight Station</p>
        </div>
        
      </div>
      <AboutUsSlider/>
      <AboutUsCaption/>
      <AboutUsPartners/>
      <AboutUsMission/>
      <AboutUsWhy/>
    </>
}
