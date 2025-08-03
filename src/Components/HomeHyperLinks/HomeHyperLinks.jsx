import React, { useEffect, useState } from "react";
import style from "./HomeHyperLinks.module.css";
import { Link } from "react-router-dom";
export default function HomeHyperLinks() {
  return (
    <>
      <div
        className=" relative h-[200px] bg-contain md:h-[600px]"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/djvzbznry/image/upload/v1750866669/Back_tllth4.png)`,
        }}
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 ">
          <div className="flex items-center justify-center">
            <Link
              to="details"
              state={{
                title: "Sea Freight",
                photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1751183629/Sea_Freight_vhhety.jpg",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus nulla esse voluptas asperiores, sit, rem reprehenderit cum nihil nemo necessitatibus? Eius fuga itaque ab accusantium dignissimos architecto ipsa ratione sed, exercitationem neque facere impedit sapiente blanditiis voluptate? Tempore eos inventore temporibus dolorum accusantium impedit incidunt fugiat voluptatibus aliquid voluptatum, iure nobis odio corporis non magnam vel quibusdam? Laudantium soluta quia quas consequuntur consectetur voluptatibus quasi est ab sequi saepe, illo itaque mollitia quibusdam molestias hic aliquid, architecto, in omnis dolorem eaque? Iusto nihil voluptas reprehenderit sit. Iusto debitis quas ex dolorem reprehenderit nihil asperiores quia cupiditate. Adipisci, enim rerum.",
              }}
              className="md:w-[100px] w-[30px] mx-[2px] hover:scale-110 transition-all duration-300 overflow-hidden mt-10 md:mt-32"
            >
              <img
                src="https://res.cloudinary.com/djvzbznry/image/upload/v1754239913/sea_freight_qewyvy.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </Link>
            <Link
              to="details"
              state={{
                title:"Air Frieght",
                photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1751183627/Air_Freight_e1su2q.jpg",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus nulla esse voluptas asperiores, sit, rem reprehenderit cum nihil nemo necessitatibus? Eius fuga itaque ab accusantium dignissimos architecto ipsa ratione sed, exercitationem neque facere impedit sapiente blanditiis voluptate? Tempore eos inventore temporibus dolorum accusantium impedit incidunt fugiat voluptatibus aliquid voluptatum, iure nobis odio corporis non magnam vel quibusdam? Laudantium soluta quia quas consequuntur consectetur voluptatibus quasi est ab sequi saepe, illo itaque mollitia quibusdam molestias hic aliquid, architecto, in omnis dolorem eaque? Iusto nihil voluptas reprehenderit sit. Iusto debitis quas ex dolorem reprehenderit nihil asperiores quia cupiditate. Adipisci, enim rerum.",
              }}
              className="md:w-[100px] w-[30px] hover:scale-110 transition-all duration-300 overflow-hidden mx-[2px] mt-10 md:mt-32"
            >
              <img
                src="https://res.cloudinary.com/djvzbznry/image/upload/v1754239912/air_freight_cgjhlk.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </Link>
            <Link
            to="details"
            state={{
              title:"Land Transport",
              photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1751183633/Land_Transport_mduddr.jpg",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus nulla esse voluptas asperiores, sit, rem reprehenderit cum nihil nemo necessitatibus? Eius fuga itaque ab accusantium dignissimos architecto ipsa ratione sed, exercitationem neque facere impedit sapiente blanditiis voluptate? Tempore eos inventore temporibus dolorum accusantium impedit incidunt fugiat voluptatibus aliquid voluptatum, iure nobis odio corporis non magnam vel quibusdam? Laudantium soluta quia quas consequuntur consectetur voluptatibus quasi est ab sequi saepe, illo itaque mollitia quibusdam molestias hic aliquid, architecto, in omnis dolorem eaque? Iusto nihil voluptas reprehenderit sit. Iusto debitis quas ex dolorem reprehenderit nihil asperiores quia cupiditate. Adipisci, enim rerum.",

             }}
            className="md:w-[100px] w-[30px] hover:scale-110 transition-all duration-300 overflow-hidden mx-[2px] mt-10 md:mt-32">
              <img
                src="https://res.cloudinary.com/djvzbznry/image/upload/v1754239913/Land_Transport_cbtalq.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </Link>
            <Link
            to="details"
            state={{
              title:"Customs Clearance",
              photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1751685023/custom_clearance_pj4q0y.jpg",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus nulla esse voluptas asperiores, sit, rem reprehenderit cum nihil nemo necessitatibus? Eius fuga itaque ab accusantium dignissimos architecto ipsa ratione sed, exercitationem neque facere impedit sapiente blanditiis voluptate? Tempore eos inventore temporibus dolorum accusantium impedit incidunt fugiat voluptatibus aliquid voluptatum, iure nobis odio corporis non magnam vel quibusdam? Laudantium soluta quia quas consequuntur consectetur voluptatibus quasi est ab sequi saepe, illo itaque mollitia quibusdam molestias hic aliquid, architecto, in omnis dolorem eaque? Iusto nihil voluptas reprehenderit sit. Iusto debitis quas ex dolorem reprehenderit nihil asperiores quia cupiditate. Adipisci, enim rerum.",

             }}
            className="md:w-[100px] w-[30px] hover:scale-110 transition-all duration-300 overflow-hidden mx-[2px] mt-10 md:mt-32">
              <img
                src="https://res.cloudinary.com/djvzbznry/image/upload/v1754239913/Customs_Clearance_tgosrq.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </Link>
            <Link
             to="details"
             state={{
              title:"LCL Consolidation",
              photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1751183634/LCL_FCL_mmboat.png",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus nulla esse voluptas asperiores, sit, rem reprehenderit cum nihil nemo necessitatibus? Eius fuga itaque ab accusantium dignissimos architecto ipsa ratione sed, exercitationem neque facere impedit sapiente blanditiis voluptate? Tempore eos inventore temporibus dolorum accusantium impedit incidunt fugiat voluptatibus aliquid voluptatum, iure nobis odio corporis non magnam vel quibusdam? Laudantium soluta quia quas consequuntur consectetur voluptatibus quasi est ab sequi saepe, illo itaque mollitia quibusdam molestias hic aliquid, architecto, in omnis dolorem eaque? Iusto nihil voluptas reprehenderit sit. Iusto debitis quas ex dolorem reprehenderit nihil asperiores quia cupiditate. Adipisci, enim rerum.",

             }}
             className="md:w-[100px] w-[30px] hover:scale-110 transition-all duration-300 overflow-hidden mx-[2px] mt-10 md:mt-32">
              <img
                src="https://res.cloudinary.com/djvzbznry/image/upload/v1754239913/FCL_LCL_wkn9ub.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </Link>
            <Link
            to="details"
            state={{
              title:"Cargo Storage",
              photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1751183633/Cargo_Storage_afuao9.jpg",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus nulla esse voluptas asperiores, sit, rem reprehenderit cum nihil nemo necessitatibus? Eius fuga itaque ab accusantium dignissimos architecto ipsa ratione sed, exercitationem neque facere impedit sapiente blanditiis voluptate? Tempore eos inventore temporibus dolorum accusantium impedit incidunt fugiat voluptatibus aliquid voluptatum, iure nobis odio corporis non magnam vel quibusdam? Laudantium soluta quia quas consequuntur consectetur voluptatibus quasi est ab sequi saepe, illo itaque mollitia quibusdam molestias hic aliquid, architecto, in omnis dolorem eaque? Iusto nihil voluptas reprehenderit sit. Iusto debitis quas ex dolorem reprehenderit nihil asperiores quia cupiditate. Adipisci, enim rerum.",

             }}
            className="md:w-[100px] w-[30px] hover:scale-110 transition-all duration-300 overflow-hidden mx-[2px] mt-10 md:mt-32">
              <img
                src="https://res.cloudinary.com/djvzbznry/image/upload/v1754239913/Cargo_Storage_c7ccsv.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </Link>
            <Link
            to="details"
            state={{
              title:"NVOCC",
              photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1751183633/NVOCC_joe7bk.jpg",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus nulla esse voluptas asperiores, sit, rem reprehenderit cum nihil nemo necessitatibus? Eius fuga itaque ab accusantium dignissimos architecto ipsa ratione sed, exercitationem neque facere impedit sapiente blanditiis voluptate? Tempore eos inventore temporibus dolorum accusantium impedit incidunt fugiat voluptatibus aliquid voluptatum, iure nobis odio corporis non magnam vel quibusdam? Laudantium soluta quia quas consequuntur consectetur voluptatibus quasi est ab sequi saepe, illo itaque mollitia quibusdam molestias hic aliquid, architecto, in omnis dolorem eaque? Iusto nihil voluptas reprehenderit sit. Iusto debitis quas ex dolorem reprehenderit nihil asperiores quia cupiditate. Adipisci, enim rerum.",

             }}
            className="md:w-[100px] w-[30px] hover:scale-110 transition-all duration-300 overflow-hidden mx-[2px] mt-10 md:mt-32">
              <img
                src="https://res.cloudinary.com/djvzbznry/image/upload/v1754239913/nvocc_oxywhf.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </Link>
            <Link
            to="details"
            state={{
              title:"Project Cargo",
              photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1751685073/project_cargo_pwj186.jpg",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus nulla esse voluptas asperiores, sit, rem reprehenderit cum nihil nemo necessitatibus? Eius fuga itaque ab accusantium dignissimos architecto ipsa ratione sed, exercitationem neque facere impedit sapiente blanditiis voluptate? Tempore eos inventore temporibus dolorum accusantium impedit incidunt fugiat voluptatibus aliquid voluptatum, iure nobis odio corporis non magnam vel quibusdam? Laudantium soluta quia quas consequuntur consectetur voluptatibus quasi est ab sequi saepe, illo itaque mollitia quibusdam molestias hic aliquid, architecto, in omnis dolorem eaque? Iusto nihil voluptas reprehenderit sit. Iusto debitis quas ex dolorem reprehenderit nihil asperiores quia cupiditate. Adipisci, enim rerum.",

             }}
            className="md:w-[100px] w-[30px] hover:scale-110 transition-all duration-300 overflow-hidden mx-[2px] mt-10 md:mt-32">
              <img
                src="https://res.cloudinary.com/djvzbznry/image/upload/v1754239912/Project_cargo_ryz3cc.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </Link>
            <Link
            to="details"
            state={{
              title:"Marine Surveyor",
              photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1751685073/marine_surveyor_sihzn7.jpg",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus nulla esse voluptas asperiores, sit, rem reprehenderit cum nihil nemo necessitatibus? Eius fuga itaque ab accusantium dignissimos architecto ipsa ratione sed, exercitationem neque facere impedit sapiente blanditiis voluptate? Tempore eos inventore temporibus dolorum accusantium impedit incidunt fugiat voluptatibus aliquid voluptatum, iure nobis odio corporis non magnam vel quibusdam? Laudantium soluta quia quas consequuntur consectetur voluptatibus quasi est ab sequi saepe, illo itaque mollitia quibusdam molestias hic aliquid, architecto, in omnis dolorem eaque? Iusto nihil voluptas reprehenderit sit. Iusto debitis quas ex dolorem reprehenderit nihil asperiores quia cupiditate. Adipisci, enim rerum.",

             }}
            className="md:w-[100px] w-[30px] hover:scale-110 transition-all duration-300 overflow-hidden   mx-[2px] mt-10 md:mt-32">
              <img
                src="https://res.cloudinary.com/djvzbznry/image/upload/v1754239914/Marine_Surveyor_hbntkg.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </Link>
          </div>
        </div>

        <div className="logo md:w-[450px] w-[200px] absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <img
            src="https://res.cloudinary.com/djvzbznry/image/upload/v1750866669/logo_mnbplq.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
