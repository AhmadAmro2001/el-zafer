import React, { useEffect, useState } from 'react'
import style from './AboutUsPartners.module.css'
export default function AboutUsPartners() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className='container mx-auto text-center py-5 md:py-9'>
          <h1 className='md:text-3xl text-[12px] font-bold text-red-700'>Our partners</h1>
          <div className='w-[60%] mx-auto md:mt-5 mt-2'>
            <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1749622970/ourPartners1_kg15lx.png" className='w-full' alt="" />
          </div>
      </div>
    </>
}
