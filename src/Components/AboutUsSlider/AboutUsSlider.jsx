import React, { useEffect, useState } from 'react'
import './AboutUsSlider.module.css'
import Slider from "react-slick";
import img1 from '../../assets/homeAbout1.png'
import img2 from '../../assets/homeAbout2.png'
import img3 from '../../assets/aboutUsSlider3.jpg'
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
          <img src={img1} className='w-full md:h-[450px] h-[200px] object-cover  rounded-xl mx-auto' alt="" />
        </div>
        <div className='md:px-12 px-5'>
          <img src={img2} className='w-full md:h-[450px] h-[200px] object-cover  rounded-xl mx-auto' alt="" />
        </div>
        <div className='md:px-12 px-5'>
          <img src={img3} className='w-full md:h-[450px] h-[200px] object-cover  rounded-xl mx-auto' alt="" />
        </div>
      </Slider>
    </div>
    </>
}
