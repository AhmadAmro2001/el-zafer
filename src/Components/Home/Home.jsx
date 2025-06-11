import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import Slider from "react-slick";
import HomeAboutUs from "../HomeAboutUs/HomeAboutUs";
import HomeOnlineServices from "../HomeOnlineServices/HomeOnlineServices";
import HomeOurPartners from "../HomeOurPartners/HomeOurPartners";


export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,              
    autoplaySpeed: 2000,  
  };
  const [data, setData] = useState();
  useEffect(() => {}, []);
  return (
    <>
      <div className="w-full overflow-hidden">
      <Slider {...settings}>
        <div>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1749622977/home1_jnnqzk.jpg" alt="" className="w-full h-[200px] md:h-[610px] object-cover" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1749623005/home2_xiqeiv.jpg" alt="" className="w-full h-[200px] md:h-[610px] object-cover" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1749623075/home3_qnlblh.png" alt="" className="w-full h-[200px] md:h-[610px] object-cover" />
        </div>
      </Slider>
      </div>
      <div className="right-0  h-[200px] md:h-[600px]" >
        <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1749623009/homeSec_xnllij.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <HomeAboutUs/>
      <HomeOnlineServices/>
      <HomeOurPartners/>
    </>
  );
}
