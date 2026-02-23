import React, { useEffect, useState } from "react";
import style from "./PressRelease.module.css";
import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";
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

  // const urlsCount = posts?.images?.URLS?.length || 0;
  // var settings = {
  //   dots: true,
  //   infinite: ( urlsCount > 1 ? true : false ),
  //   slidesToShow: 1,
  //   speed: 500,
  //   // slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   pauseOnHover: false,
  // };

  //   const urls = posts.map((post) => post?.images?.URLS);
  // const urlsCount = urls.map((url) => url.length);
  // const hasMany = urlsCount.map((count) => count > 1);

  // console.log(hasMany);

  //   const settings = {
  //   dots: hasMany,
  //   // arrows: hasMany,
  //   infinite: hasMany,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   speed: 500,

  //   autoplay: hasMany,
  //   autoplaySpeed: 4000,
  //   pauseOnHover: hasMany,      // hover pause only matters if autoplay is on
  //   pauseOnFocus: hasMany,

  //   adaptiveHeight: false,      // keep layout stable (recommended for cards)
  // };

  // const urls = posts?.images?.URLS ?? [];
  // const hasMany = urls.length > 1;

  // const settings = {
  //   dots: hasMany,
  //   arrows: hasMany,
  //   infinite: hasMany,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   speed: 500,
  //   autoplay: hasMany,
  //   autoplaySpeed: 4000,
  //   pauseOnHover: hasMany,
  //   pauseOnFocus: hasMany,
  // };

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
          <h1 className="text-red-700 text-3xl font-bold pb-5 text-left">
            Al-Zafer Shipping Services Expands Its Solutions in Partnership with
            HTRI from Tunisia
          </h1>
          <p className="text-gray-800 text-xl text-left pb-10">
            Al-Zafer Shipping Services announces new modernization steps within
            its service system, launched in cooperation with HTRI from Tunisia.
            The company confirms that this partnership will enhance customer
            experience and provide more advanced logistics solutions. <span className="text-red-700 hover:text-red-500"><Link to={`https://misrtalateen.com/2026/02/23/%d8%a7%d9%84%d8%b8%d8%a7%d9%81%d8%b1-%d9%84%d8%ae%d8%af%d9%85%d8%a7%d8%aa-%d8%a7%d9%84%d8%b4%d8%ad%d9%86-%d9%81%d9%8a-%d8%aa%d8%b9%d8%a7%d9%88%d9%86-%d9%85%d8%b9-%d8%b4%d8%b1%d9%83%d8%a9-htri-%d8%ac/`} target="_blank"> Open for more <i className="fa-solid fa-arrow-right"></i></Link></span>
          </p>
        </div>

        {loading ? (
          <i className="fa-solid fa-spinner animate-spin text-red-700 text-3xl mt-4"></i>
        ) : (
          <>
            {posts?.map((item, index) => {
              const urls = item?.images?.URLS ?? [];
              const hasMany = urls.length > 1;

              const settings = {
                dots: hasMany,
                arrows: hasMany,
                infinite: hasMany,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                autoplay: hasMany,
                autoplaySpeed: 4000,
                pauseOnHover: false,
                pauseOnFocus: false,
              };

              return (
                <div
                  key={item?._id || index}
                  className="flex justify-between items-center  mb-10"
                >
                  {/* Text */}
                  <div className={urls.length > 0 ? "w-[40%]" : "w-full"}>
                    <h1 className="text-red-700 text-3xl font-bold pb-5 text-left">
                      {item.title}
                    </h1>
                    <p className="text-gray-800 text-lg text-left pb-7">
                      {item.content}
                    </p>
                  </div>

                  {/* Images */}
                  <div
                    className={
                      !item.title && !item.content
                        ? "w-[80%] mx-44 "
                        : "w-[55%]"
                    }
                  >
                    {urls.length > 0 ? (
                      <Slider {...settings}>
                        {urls.map((img, i) => (
                          <div
                            key={img?._id || img?.secure_url || i}
                            className="px-1"
                          >
                            <div className="aspect-video w-full   ">
                              <img
                                src={img.secure_url}
                                alt={item.title || "news image"}
                                className="h-full mx-auto object-contain rounded-3xl overflow-hidden"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        ))}
                      </Slider>
                    ) : (
                      <div className="aspect-video w-full rounded-3xl bg-gray-100 flex items-center justify-center">
                        No image
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* {posts.map((item, index) => {
              return (
                <>
                  <div key={index} className="flex justify-around   items-center mb-10">
                    <div className={item?.images?.URLS?.length > 0 ? "w-[40%]" : "w-full "}>
                      <h1 className="text-red-700 text-3xl font-bold pb-5 text-left">
                        {item.title}
                      </h1>
                      <p className="text-gray-800 text-lg text-left pb-7">
                        {item.content}
                      </p>
                    </div>
                    
                    <div className={!item.title && !item.content ? "w-full" : "w-[55%]"}>
  {item?.images?.URLS?.length > 0 ? (
    <Slider {...settings}>
      {urls.map((img, index) => (
        <div key={index} className="px-1">
          
          <div className="aspect-video w-full overflow-hidden rounded-3xl bg-gray-100">
            <img
              src={img.secure_url}
              alt={item.title || "news image"}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </Slider>
  ) : (
    <div className="aspect-video w-full rounded-3xl bg-gray-100 flex items-center justify-center">
      No image
    </div>
  )}
</div>
                  </div>
                </>
              );
            })} */}
          </>
        )}
      </div>
    </>
  );
}

{
  /* <div className={(!item.title && !item.content) ? "w-full" : "w-[55%]"}>
                      <Slider {...settings}>
                        {item?.images?.URLS?.length > 0 &&item.images.URLS.map((item, index) => <div key={index} className="aspect-video w-full   ">
                          <img src={item.secure_url} alt="" className="h-full mx-auto object-contain rounded-3xl overflow-hidden  "/>
                        </div>)}
                      </Slider>
                    </div> */
}
