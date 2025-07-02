import React, { useEffect, useState } from 'react'
import style from './HomeOurPartners.module.css'
export default function HomeOurPartners() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <section className="bg-cover h-[421px] w-full bg-center bg-no-repeat   text-white p-8"
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://res.cloudinary.com/djvzbznry/image/upload/v1749623140/ourPartners_cfca0b.png)` }}>
                <div className="container mx-auto text-center">
                    <h1 className='text-5xl font-bold text-white py-4'>Our partners</h1>
                    <h2 className=' py-2 text-white'>Meet our amazing partners: Working together to create excellence</h2>
                    <p className='text-[#E6E6E6] py-3'>Discover the amazing organizations and individuals who help us achieve our vision.</p>
                    <div className='w-full md:w-[70%] mx-auto mt-12 rounded-lg overflow-hidden'>
                    <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1749622970/ourPartners1_kg15lx.png" alt="" className='w-full '/>
                    </div>
                </div>
      </section>
    </>
}
