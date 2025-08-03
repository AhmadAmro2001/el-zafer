import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import Slider from "react-slick";
import HomeAboutUs from "../HomeAboutUs/HomeAboutUs";
import HomeOnlineServices from "../HomeOnlineServices/HomeOnlineServices";
import HomeOurPartners from "../HomeOurPartners/HomeOurPartners";
import HomeHyperLinks from "../HomeHyperLinks/HomeHyperLinks";


export default function Home() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,              
    autoplaySpeed: 4000,
    pauseOnHover: false,     
  };
  
  return (
    <>
      <div className=" md:me-14 overflow-hidden md:mt-32 mt-24 ">
      <Slider {...settings}>
        <div>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1752680806/WhatsApp_Image_2025-07-16_at_18.26.46_fb975301_c5mb9m.jpg" alt="" className="w-full h-[200px] md:h-[610px] object-cover" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1754240921/Logistic-Business-scaled_cm4rcb.jpg" alt="" className="w-full h-[200px] md:h-[610px] object-cover" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1749623005/home2_xiqeiv.jpg" alt="" className="w-full h-[200px] md:h-[610px] object-cover" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1752679583/container-2921882_ease8m.jpg" alt="" className="w-full h-[200px] md:h-[610px] object-cover" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1752679557/Container_ship_2048_1152_rdax_65_vir4rd.jpg" alt="" className="w-full h-[200px] md:h-[610px] object-cover" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1752679556/AntonovAN225worldslargestaircraftbeingloadedonasunnyday_qt2awg.jpg" alt="" className="w-full h-[200px] md:h-[610px] object-cover" />
        </div>
        
      </Slider>
      </div>
      <HomeHyperLinks/>
      <HomeAboutUs/>
      <HomeOnlineServices/>
      <HomeOurPartners/>
    </>
  );
}
