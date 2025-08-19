import React, { useEffect, useState } from 'react'
import style from './ContainerCalculator.module.css'
export default function ContainerCalculator() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className=' w-[80%] mx-auto text-left container flex justify-center items-center my-56'>
        <div className='w-[70%] rounded-2xl overflow-hidden'>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1750729223/3-30330_coming-soon-logo-png_mse4fs.jpg" className='w-full h-full object-cover' alt="" />
        </div>
      </div>
    </>
}
