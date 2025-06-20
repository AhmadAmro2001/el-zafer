import React, { useEffect, useState } from 'react'
import style from './UsefulInfo.module.css'
import UsefulInfoleft from '../UsefulInfoleft/UsefulInfoleft'
import UsefulInfoRight from '../UsefulInfoRight/UsefulInfoRight'
export default function UsefulInfo() {
    const data =[
      {
        title:"Abbreviation",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1749622992/homeAbout2_hwk3er.png"
      },
      {
        title:"Air containers dims",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1749623075/home3_qnlblh.png"
      },
      {
        title:"Famous incoterm",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1749623140/ourPartners_cfca0b.png"
      },
      {
        title:"Glossary of trade terms",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1750389129/useful1_xdspqu.png"
      },
      {
        title:"Metric basics",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1750389127/useful2_mk8dkw.png"
      },
      {
        title:"Metric to US - US to metric",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1749985397/services1_yrb2mi.png"
      },
      {
        title:"Ocean containers dims",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1750304173/activities7_nv280l.jpg"
      },
      {
        title:"Shipping schedule",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1750304203/activities6_rib58i.jpg"
      },
      {
        title:"Container load calculator",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1750304244/activities8_ouoakj.jpg"
      },
      {
        title:"Track & trace",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1750304346/activities5_b3bgx9.jpg"
      }
    ]
  return <>
      <div className='container mx-auto relative px-4 md:px-36 bg-[#095890]'>
        <div className='flex flex-col justify-center items-center h-[200px] md:h-[682px]  text-white'>
            <p className='md:mb-5 md:text-2xl text-[8px]'>Useful info.</p>
            <h3 className='md:text-3xl text-[12px] md:mb-2'>We pride ourselves on our exceptional customer service, reliable delivery times, and competitive pricing, making us the go-to choice for all your shipping needs</h3>
            <p className='md:mt-5 md:text-xl text-[8px]'> Whether you are shipping domestically or internationally.</p>
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

      <UsefulInfoleft data={data[0]}/>
      <UsefulInfoRight data={data[1]}/>
      <UsefulInfoleft data={data[2]}/>
      <UsefulInfoRight data={data[3]}/>
      <UsefulInfoleft data={data[4]}/>
      <UsefulInfoRight data={data[5]}/>
      <UsefulInfoleft data={data[6]}/>
      <UsefulInfoRight data={data[7]}/>
      <UsefulInfoleft data={data[8]}/>
      <UsefulInfoRight data={data[9]}/>
    </>
}
