import React, { useEffect, useState } from 'react'
import './AboutUsSlider.module.css'
import Slider from "react-slick";
export default function AboutUsSlider() {
  
  
    const [data, setData] = useState()
    useEffect(() => {
    }, [])
  return <>
      <div className=" flex md:flex-row flex-col items-center md:justify-around container w-[80%] mx-auto mt-52">
      
        
        <div className=''>
          <div className='w-[250px] h-[250px] '>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1752679562/Layer_0_rszzrm.png" className=' w-full h-full rounded-xl object-cover ' alt="" />
          </div>
          <div className='caption mt-3'>
            <h1 className='font-semibold text-2xl text-red-700'>Mohamed Al-Zafer</h1>
            <p className='text-gray-600'>Chairman</p>
          </div>
        </div>
        <div className=''>
          <div className='w-[250px] h-[250px] '>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1751801506/Mishal_Photo_copy_rg4kjf.jpg" className=' w-full h-full rounded-xl object-cover ' alt="" />
          </div>
          <div className='caption mt-3'>
            <h1 className='font-semibold text-2xl text-red-700'>Mishal M.Al-Zafer</h1>
            <p className='text-gray-600'>Deputy Chairman</p>
          </div>
        </div>
        <div className=' '>
          <div className='w-[250px] h-[250px] '>
           <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1752136969/Qatamesh_official_Photo_1.25x_-_Copy_vsgwh5.jpg" className=' w-full h-full rounded-xl object-cover ' alt="" />
          </div>
          <div className='caption mt-3'>
            <h1 className='font-semibold text-2xl text-red-700'>Mahmoud S.Qatamesh</h1>
            <p className='text-gray-600'>Managing Director</p>
          </div>
        </div>
        
        
        
        
        
      
    </div>
    </>
}
