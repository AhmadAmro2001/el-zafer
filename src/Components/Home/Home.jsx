import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import img1 from "../../assets/home1.jpg";
import img2 from "../../assets/home2.jpg";
import img3 from "../../assets/home3.png";
import img4 from "../../assets/homeSec.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  };
  const [data, setData] = useState();
  useEffect(() => {}, []);
  return (
    <>
      <div className="w-full overflow-hidden">
      <Slider {...settings}>
        <div>
          <img src={img1} alt="" className="w-full h-[200px] md:h-[610px] object-cover" />
        </div>
        <div>
          <img src={img2} alt="" className="w-full h-[200px] md:h-[610px] object-cover" />
        </div>
        <div>
          <img src={img3} alt="" className="w-full h-[200px] md:h-[610px] object-cover" />
        </div>
      </Slider>
      </div>
      <div className="right-0  h-[200px] md:h-[600px]" >
        <img src={img4} alt="" className="w-full h-full object-cover" />
      </div>
      <HomeAboutUs/>
      <HomeOnlineServices/>
      <HomeOurPartners/>
    </>
  );
}
