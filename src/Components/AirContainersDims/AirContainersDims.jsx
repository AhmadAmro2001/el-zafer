import React, { useEffect, useState } from 'react'
import style from './AirContainersDims.module.css'
export default function AirContainersDims() {
    const data = [
      {
        title:"Main Deck Pallet",
        externalDisplacement:"606 cu ft/17.16 cu m",
        maximumGrossWeight:"15,000 lb/6,804 kg",
        maximumExternalDimensions:`(L x W x H) Contoured 125" x 96" x 96" 317cm x 244cm x 244cm`,
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1755979516/Screenshot_2025-08-23_230442_snmr9l.png"
      },
      {
        title:"LD-7",
        externalDisplacement:"379.9 cu ft/10 cu m",
        maximumGrossWeight:"10,200 lb/4,627 kg",
        maximumExternalDimensions:`(L x W x H) Contoured 125" x 88" x 63" 317 cm x 223 cm x 160 cm`,
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1755980193/Screenshot_2025-08-23_231600_fxjeep.png"
      },
      {
        title:"P9A Lower Deck Pallet",
        externalDisplacement:"242 cu ft/6.9 cu m",
        maximumGrossWeight:"7,000 lb/3,175 kg",
        maximumExternalDimensions:`(L x W x H) Contoured 125" x 60" x 63" 317 cm x 152 cm x 160 cm`,
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1755980759/Screenshot_2025-08-23_232527_j5sjln.png"
      },
      {
        title:"LD-11",
        externalDisplacement:"242 cu ft/6.9 cu m",
        maximumGrossWeight:"7,000 lbs/3,176 kg",
        maximumExternalDimensions:`(L x W x H) Contoured 125" x 60" x 64" 317 cm x 162 cm x 162 cm`,
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1755980875/Screenshot_2025-08-23_232737_ib1h24.png"
      },
      {
        title:"LD-8",
        externalDisplacement:"243 cu ft/6.9 cu m",
        maximumGrossWeight:"5,400 lb/2,450 kg",
        maximumExternalDimensions:`(L x W x H) Contoured 96" x 60" x 64" 228 cm x 152 cm x 162 cm`,
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1755981095/Screenshot_2025-08-23_233119_hnxrqf.png"
      },
      {
        title:"LD-4",
        externalDisplacement:"243 cu ft/6.9 cu m",
        maximumGrossWeight:"5,400 lb/2,450 kg",
        maximumExternalDimensions:`(L x W x H) Contoured 96" x 60" x 64" 228 cm x 152 cm x 162 cm`,
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1755981180/Screenshot_2025-08-23_233240_ep0ngc.png"
      },
      {
        title:"LD-3",
        externalDisplacement:"150 cu ft/4 cu m",
        maximumGrossWeight:"3,500 lb/1,588 kg",
        maximumExternalDimensions:`(L x W x H) Contoured 61" x 60" x 64" 154 cm x 152 cm x 162 cm`,
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1755981307/Screenshot_2025-08-23_233438_kgkpgk.png"
      },
      {
        title:"LD-2",
        externalDisplacement:"120 cu ft/3 cu m",
        maximumGrossWeight:"2,700 lb/1,225 kg Maximum",
        maximumExternalDimensions:`(L x W x H) Contoured 47" x 60" x 64" 119 cm x 152 cm x 162 cm`,
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1755981456/Screenshot_2025-08-23_233724_xt27lw.png"
      },
      
    ]
  return <>
     <div className='container mx-auto px-4 md:px-32 my-52'>
     <h1 className='text-4xl font-bold text-left text-red-700'>Air containers dims</h1>
     {data.map((item,index)=>{
      return <div key={index} >
        <div className='flex justify-between items-center my-10'>
          <h1 className='text-2xl font-bold w-[250px]'>{item.title}</h1>
            <div className='flex flex-col text-left justify-between'>
              <p className='font-bold'>External Displacement:</p>
              <p>{item.externalDisplacement}</p>
              <p className='font-bold'>Maximum Gross Weight:</p>
              <p>{item.maximumGrossWeight}</p>
              <p className='font-bold'>Maximum External Dimensions:</p>
              <p>{item.maximumExternalDimensions}</p>
          </div>
            <img src={item.photo} alt="" />
          </div>
        <div className='w-[100%] h-[1px] bg-gray-700'></div>
      </div>
     })}
     </div>
    </>
}
