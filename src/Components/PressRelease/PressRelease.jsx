import React, { useEffect, useState } from "react";
import style from "./PressRelease.module.css";
import Slider from "react-slick";
import axios from "axios";
export default function PressRelease() {
  

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setLoading(true);
    await axios
      .get("https://el-zafer-backend.onrender.com/admin/get-news")
      .then((res) => {
        let { data } = res;
        // console.log(data.data);

        setPosts(data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    //  console.log(posts);
  }

  const urlsCount = posts?.images?.URLS?.length || 0;
  var settings = {
    dots: true,
    infinite: urlsCount > 1,
    slidesToShow: 1,
    speed: 500,
    // slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };

  return (
    <>
      <div className="container w-[90%] mx-auto my-52">
        <div>
          <h1 className="text-red-700 text-3xl font-bold pb-5 text-left">
            Promotions
          </h1>
          <p className="text-gray-800 text-xl text-left pb-7">
            Al Zafer offers personalized service for each client through the
            Customer Service Representative system. Al Zafer focuses on sea and
            air freight part and full-load, group age, as well as industry
            specific project cargo, to and from the major worldwide ports and
            airports, using the main and the most reliable air/ocean freight
            companies.
          </p>
          <h1 className="text-red-700 text-3xl font-bold pb-5 text-left">
            Social & Cultural
          </h1>
          <p className="text-gray-800 text-xl text-left pb-7">
            We have formed clubs for football, volley ball and cricket by
            ourselves and actively participating in the local tournaments as Al
            Zafer Cargo Team.
          </p>
        </div>

        {loading ? (
          <i className="fa-solid fa-spinner animate-spin text-red-700 text-3xl mt-4"></i>
        ) : (
          <>
            {posts.map((item, index) => {
              return (
                <>
                  <div key={index} className="flex justify-between items-center mb-10">
                    <div className="w-[45%]">
                      <h1 className="text-red-700 text-3xl font-bold pb-5 text-left">
                        {item.title}
                      </h1>
                      <p className="text-gray-800 text-lg text-left pb-7">
                        {item.content}
                      </p>
                    </div>
                    <div className=" w-[50%] ">
                      <Slider {...settings}>
                        {item?.images?.URLS?.length > 0 &&item.images.URLS.map((item, index) => <div key={index} className="aspect-video w-full overflow-hidden rounded-2xl">
                          <img src={item.secure_url} alt="" className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"/>
                        </div>)}
                      </Slider>
                    </div>
                  </div>
                </>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}


