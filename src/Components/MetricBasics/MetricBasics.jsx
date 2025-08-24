import React, { useEffect, useState } from 'react'
import style from './MetricBasics.module.css'
export default function MetricBasics() {
    const length = [
      {
        title:"1 Kelometer",
        description:"0.62137 mi",
      },
      {
        title:"1 Meter",
        description:"3.28084 ft",
      },
      {
        title:"1 Centimeter",
        description:"39.3701 in",
      },
      {
        title:"1 Mile",
        description:"1.60934 km",
      },
      {
        title:"1 Foot",
        description:"0.3048 m",
      },
      {
        title:"1 Inch",
        description:"2.54 cm",
      },
    ]
    const weight = [
      {
        title:"1 Kilogram",
        description:"2.2046 lbs",
      },
      {
        title:"1 Gram",
        description:"0.0353 oz",
      },
      {
        title:"1 short ton",
        description:" 907.1847 kilos",
      },
      {
        title:"1 Pound",
        description:"0.453592 kilos",
      },
      {
        title:"1 Ounce",
        description:"28.3495 grams",
      },
    ]
    const volume =[
      {
        title:"1 hectoliter",
        description:"100 liters or 10 cubic meters or 26.4172 gal",
      },
      {
        title:"1 liter",
        description:"100 cl or 1 cubic decimeter or 1.0567 qt",
      },
      {
        title:"1 gallon(U.S.)",
        description:"3.7853 liters",
      },
      {
        title:"1 cubic inch",
        description:"16.3871 cubic cm",
      },
    ]
    const area =[
      {
        title:"1 square kilometer",
        description:"1 million m² or 0.3861 mi²",
      },
      {
        title:"1 hectare",
        description:" 10,000 m² or 247.1 acres",
      },
      {
        title:"1 square meter",
        description:"1550.003 in² or 10.76 ft²",
      },
      {
        title:"square mile",
        description:"640 acres or 258.9988 ha²",
      },
      {
        title:"square foot",
        description:"144 in² or 929.0304 cm²",
      },
    ]
  return <>
      <div className='container mx-auto md:px-32 px-4 my-52'>
        <div className='text-left mb-10'>
        <h2 className='text-4xl  text-red-700 font-bold mb-5'>Metric Basics</h2>
        <p >The three basic metric units are the meter (length), the gram (weight), and the liter (volume). The key to metric prefixes are:</p>
        <ul className='list-[disc] px-10 '>
          <li>1000 = kilo</li>
          <li>100 = hecto</li>
          <li>10 = deca</li>
          <li>0.1 = deci</li>
          <li>0.01 = centi</li>
          <li>0.001 = milli</li>
        </ul>
        </div>
        <div className='table1 mb-10'>
          <h2 className='text-2xl text-center text-red-700 font-bold py-2 border  border-[#e5e5e5] w-[80%] mx-auto'>Length</h2>
          
            {
              length.map((item,index)=>{
                return <div key={index} className='flex justify-between w-[80%] mx-auto  '>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>{item.title} </p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>=</p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>{item.description}</p>
                  </div>
              })
            }
          
        </div>
        <div className='table2 mb-10'>
          <h2 className='text-2xl text-center text-red-700 font-bold py-2 border  border-[#E5E5E5] w-[80%] mx-auto'>Weight</h2>
          
            {
              weight.map((item,index)=>{
                return <div key={index} className='flex justify-between w-[80%] mx-auto  '>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>{item.title} </p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>=</p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>{item.description}</p>
                  </div>
              })
            }
          
        </div>
        <div className='table3 mb-10'>
          <h2 className='text-2xl text-center text-red-700 font-bold py-2 border  border-[#E5E5E5] w-[80%] mx-auto'>Volume</h2>
          
            {
              volume.map((item,index)=>{
                return <div key={index} className='flex justify-between w-[80%] mx-auto  '>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>{item.title} </p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>=</p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>{item.description}</p>
                  </div>
              })
            }
          
        </div>
        <div className='table4 mb-10'>
          <h2 className='text-2xl text-center text-red-700 font-bold py-2 border  border-[#E5E5E5] w-[80%] mx-auto'>Area</h2>
          
            {
              area.map((item,index)=>{
                return <div key={index} className='flex justify-between w-[80%] mx-auto  '>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>{item.title} </p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>=</p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>{item.description}</p>
                  </div>
              })
            }
          
        </div>
      </div>
    </>
}
