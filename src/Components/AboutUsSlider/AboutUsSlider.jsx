import React, { useEffect, useState } from 'react'
import './AboutUsSlider.module.css'
import Slider from "react-slick";
export default function AboutUsSlider() {
  const settings = {
    centerMode: true,
    centerPadding: "10%",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: i => (
      <div
        style={{
          width: "25px",
          height:"3px",
          overflow:"hidden",
          borderRadius:"5px",
          backgroundColor: "#CD372F",
          marginTop:"15px"
        }}
      >
      </div>
    )
  };
  
    const [data, setData] = useState()
    useEffect(() => {
    }, [])
  return <>
      <div className="w-full py-20 overflow-x-hidden">
      <Slider {...settings}>
        <div className='md:px-12 px-5'>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1749623008/homeAbout1_mxigqh.png" className='w-full md:h-[500px] h-[200px] object-cover rounded-xl mx-auto' alt="" />
        </div>
        <div className='md:px-12 px-5'>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1749622992/homeAbout2_hwk3er.png" className='w-full md:h-[500px] h-[200px] object-cover rounded-xl mx-auto' alt="" />
        </div>
        <div className='md:px-12 px-5 '>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1749817388/aboutUsSlider3_tkxogs_zpmqqn.jpg" className='w-full md:h-[500px] h-[200px]  rounded-xl mx-auto' alt="" />
        </div>
      </Slider>
    </div>
    </>
}
