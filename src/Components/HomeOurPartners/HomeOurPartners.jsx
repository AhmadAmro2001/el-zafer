import React, { useEffect, useState } from 'react'
import style from './HomeOurPartners.module.css'
import img1 from '../../assets/ourPartners.png'
import img2 from '../../assets/ourPartners1.png'
export default function HomeOurPartners() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <section className="bg-cover h-[421px] w-full bg-center bg-no-repeat   text-white p-8"
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img1})` }}>
                <div className="container mx-auto text-center">
                    <h4 className='text-white py-4'>Our partners</h4>
                    <h2 className='text-2xl font-bold py-4 text-white'>Meet our amazing partners: Working together to create excellence</h2>
                    <p className='text-[#E6E6E6] py-3'>Discover the amazing organizations and individuals who help us achieve our vision.</p>
                    <div className='w-full md:w-[60%] mx-auto mt-12 rounded-lg overflow-hidden'>
                    <img src={img2} alt="" className='w-full '/>
                    </div>
                </div>
      </section>
    </>
}
