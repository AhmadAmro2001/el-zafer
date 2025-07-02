import React, { useEffect, useState } from 'react'
import style from './HomeDetails.module.css'
import { useLocation } from 'react-router-dom'
export default function HomeDetails() {
  const { state } = useLocation();
  const { photo, title,desc} = state || {};
return <>
      
      <div className='container mx-auto px-4 md:px-36 mb-32 mt-10 md:mb-10 md:mt-44'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='text-left'>
          <h1 className='md:text-4xl text-[12px] mb-5 font-bold'>{title}</h1>
          <p className='md:text-[16px] text-[8px] max-w-[700px] text-gray-800'>{desc}</p>
        </div>
        <div className='md:w-[350px]  w-[80px]  mt-8 md:mt-0  mx-auto rounded-lg overflow-hidden'>
            <img
              src={photo}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </>
}
