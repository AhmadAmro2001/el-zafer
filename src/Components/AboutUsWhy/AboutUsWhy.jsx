import React, { useEffect, useState } from 'react'
import style from './AboutUsWhy.module.css'
export default function AboutUsWhy() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      
      {/* second part */}
      <div className='container mx-auto mt-5 md:mt-0 px-5 md:px-16 md:py-12'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='md:w-[45%] relative w-[100%] md:my-44 my-24 mx-auto'>



          <div className='md:w-[240px] md:h-[240px] w-[100px] h-[100px]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-ee-full bg-[#AC262F]'>
          </div>



          <div className='absolute md:top-0 right-20 rounded-3xl overflow-hidden md:right-8 md:w-[243px] md:h-[145px] w-[100px] h-[60px]'>
            <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1751800756/IMG-20231003-WA0064_plnvb6.jpg" className='w-full h-full' alt="" />
          </div>



          <div className='absolute bottom-0 rounded-3xl overflow-hidden left-14 md:left-0 md:w-[319px] md:h-[179px] w-[120px] h-[70px]'>
            <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1751800598/IMG-20231003-WA0071_oiub7v.jpg" className='w-full h-full' alt="" />
          </div>
          
        </div>
        </div>
      </div>
      
    </>
}
