import React, { useEffect, useState } from 'react'
import style from './Abbreviation.module.css'
export default function Abbreviation() {
    const data =[
      {
        title:"BAF",
        description:"Bunker Adjustment fees",
      },
      {
        title:"CY",
        description:"Container Yard",
      },
      {
        title:"Ctnr",
        description:"Container",
      },
      {
        title:"DC",
        description:"Dry Container",
      },
      {
        title:"DV",
        description:"Dry Van",
      },
      {
        title:"D/O",
        description:"Delivery Order",
      },
      {
        title:"FT",
        description:"feet",
      },
      {
        title:"H.Q",
        description:"High Cubic",
      },
      {
        title:"ISPS",
        description:"The International Ship and Port Facility Security",
      },
      {
        title:"THC",
        description:"Terminal Handling charges",
      },
      {
        title:"SOC",
        description:"Shippers Own Container"
      }
    ]
  return <>
      <div className='my-52 container mx-auto px-4 md:px-32'>
        <h1 className='text-4xl font-bold text-left text-red-700'>Abbreviation</h1>
        <h3 className='text-2xl font-bold text-left text-red-700'>Description</h3>
        <div className='flex flex-col justify-between mt-5'>

          {
            data.map((item,index)=>{
              return <div key={index} className='flex'>
                <h2 className='text-left w-[50px]'>{item.title} </h2>
                <p className='w-[20px]'>:</p>
                <p className='text-right ml-2'>{item.description}</p>
              </div>
            })
          }
        </div>
      </div>
    </>
}
