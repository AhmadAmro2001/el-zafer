import React, { useEffect, useState } from 'react'
import './AboutUsSlider.module.css'
import Slider from "react-slick";
export default function AboutUsSlider() {
  const settings = {
    centerMode: true,
    centerPadding: "36%",
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
        breakpoint: 1024,
        settings: {
          centerPadding: "20%", // Tablet screens
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "10%", // Mobile
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "0px", // Extra small screens
        }
      }
    ]
  };
  
  
    const [data, setData] = useState()
    useEffect(() => {
    }, [])
  return <>
      <div className="w-full py-20 overflow-x-hidden">
      <Slider {...settings}>
        <div className=' h-[300px]  px-5'>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1751801515/Qatamesh_official_Photo_1.25x_irksx9.jpg" className=' w-full h-full rounded-xl mx-auto' alt="" />
        </div>
        <div className=' h-[300px] px-5'>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1751801507/Mohammad_Zafer_vfaxop.jpg" className=' w-full h-full rounded-xl mx-auto' alt="" />
        </div>
        <div className=' h-[300px] px-5'>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1751801507/IMG-20231003-WA0053_mrtdj4.jpg" className=' w-full h-full rounded-xl  mx-auto' alt="" />
        </div>
        <div className=' h-[300px] px-5'>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1751801506/Mishal_Photo_copy_rg4kjf.jpg" className=' w-full h-full rounded-xl mx-auto' alt="" />
        </div>
        <div className=' h-[300px] px-5'>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1751800598/IMG-20231003-WA0071_oiub7v.jpg" className=' w-full h-full rounded-xl mx-auto' alt="" />
        </div>
        
      </Slider>
    </div>
    </>
}
