import React, { useEffect, useState } from 'react'
import style from './ShippingSchedule.module.css'
export default function ShippingSchedule() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className='container w-[80%] mx-auto text-center my-48'>
        <div className='w-[60%] mx-auto'>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1750729223/3-30330_coming-soon-logo-png_mse4fs.jpg" className='w-full h-full object-cover rounded-2xl' alt="" />
        </div>
      </div>
    </>
}
