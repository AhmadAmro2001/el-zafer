import React, { useEffect, useState } from 'react'
import style from './HomeAboutUs.module.css'
import img1 from '../../assets/homeAbout1.png'
import img2 from '../../assets/homeAbout2.png'
import img3 from '../../assets/homeAbout3.png'
import { Link } from 'react-router-dom'
export default function HomeAboutUs() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className='container  mx-auto px-4 md:px-32 my-5 md:my-24'>
        <div className='row  '>
            <div className='  w-full md:w-[55%] text-left pe-0 my-16 md:pe-12 '>
              <p className='text-red-700 pb-2'>About us</p>
              <h1 className='text-2xl max-w-[90%] md:max-w-full'>Al Zafer Wings Cargo Services Co. is an international freight forwarding outfit headquartered in Jeddah,</h1>
              <p className='max-w-[90%] md:max-w-full'>Which has represented excellence in the shipping, forwarding and logistics industry for almost four decades. We offer years of professional experience within the freight forwarding, logistics and commercial storage sectors.</p>
              <Link to='/about' className='text-red-600 font-bold mt-5'>Read More...</Link>
            </div>
            <div className='w-full h-[360px] relative  mx-5 md:w-[40%]'>
              <div className='w-[340px] h-[211px] absolute z-30 top-0 left-0 border rounded-md overflow-hidden '>
              <img src={img1} alt="" className='w-full h-full'/>
              </div>
              <div className='w-[279px] h-[174px] absolute z-10 bottom-0 right-0 border rounded-md overflow-hidden'>
              <img src={img2} alt="" className='w-full h-full'/>
              </div>
              <div className='w-[113.17px] h-[135px] absolute z-20 bottom-0 left-0  '>
              <img src={img3} alt="" className='w-full h-full'/>
              </div>
            </div>

        </div>
      </div>
    </>
}
