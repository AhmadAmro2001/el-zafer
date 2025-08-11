import React, { useEffect, useState } from 'react'
import './AboutUsSlider.module.css'
import Slider from "react-slick";
export default function AboutUsSlider() {
  const settings = {
    centerMode: true,
    centerPadding: "34%",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 3000,
    customPaging: i => (
      <div
        style={{
          width: "25px",
          height: "3px",
          overflow: "hidden",
          borderRadius: "5px",
          backgroundColor: "#CD372F",
          marginTop: "15px"
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          centerPadding: "34%", // Tablet screens
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "10%", // Mobile
        }
      }
    ]
  };
  
  
    const [data, setData] = useState()
    useEffect(() => {
    }, [])
  return <>
      <div className="w-full py-20 overflow-x-hidden md:mt-40 mt-16">
      <Slider {...settings}>
        
        
        <div className='2xl:h-[450px] lg:h-[400px] h-[250px] px-10 '>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1751801506/Mishal_Photo_copy_rg4kjf.jpg" className=' w-full h-full rounded-xl object-cover mx-auto' alt="" />
          <div className='caption mt-3'>
            <h1 className='font-semibold text-2xl'>Mishal M.Al-Zafer</h1>
            <p className='text-gray-600'>Deputy Chairman</p>
          </div>
        </div>
        <div className='2xl:h-[450px] lg:h-[400px] h-[250px] px-10 '>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1752136969/Qatamesh_official_Photo_1.25x_-_Copy_vsgwh5.jpg" className=' w-full h-full rounded-xl object-cover mx-auto' alt="" />
          <div className='caption mt-3'>
            <h1 className='font-semibold text-2xl'>Mahmoud S.Qatamesh</h1>
            <p className='text-gray-600'>Managing Director</p>
          </div>
        </div>
        <div className='2xl:h-[450px] lg:h-[400px] h-[250px] px-10 '>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1751800598/IMG-20231003-WA0071_oiub7v.jpg" className=' w-full h-full rounded-xl  mx-auto' alt="" />
        </div>
        <div className='2xl:h-[450px] lg:h-[400px] h-[250px] px-10 '>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1751801507/IMG-20231003-WA0053_mrtdj4.jpg" className=' w-full h-full rounded-xl  mx-auto' alt="" />
        </div>
        <div className='2xl:h-[450px] lg:h-[400px] h-[250px] px-10 '>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1752679562/Layer_0_rszzrm.png" className=' w-full h-full rounded-xl object-cover mx-auto' alt="" />
          <div className='caption mt-3'>
            <h1 className='font-semibold text-2xl'>Mohamed Al-Zafer</h1>
            <p className='text-gray-600'>Chairman</p>
          </div>
        </div>
        
        
        
      </Slider>
    </div>
    </>
}
