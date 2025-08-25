import React, { useEffect, useState } from 'react'
import style from './MetricToUs.module.css'
export default function MetricToUs() {
    const lengths = [
       {
        title:"Millimeter",
        cell2:"0.0394",
        cell3:"inches",
       },
       {
        title:"centimeter ",
        cell2:"0.3937",
        cell3:"inches",
       },
       {
        title:"meters ",
        cell2:"3.2808",
        cell3:"feet",
       },
       {
        title:"meters ",
        cell2:"1.0936",
        cell3:"yards",
       },
       {
        title:"Kilometers",
        cell2:"0.6214",
        cell3:"miles",
       },
    ];
    const area = [
      {
        title: "sq. cm.",
        cell2: "0.155",
        cell3: "sq. inches",
      },
      {
        title: "sq. meters",
        cell2: "1.1960",
        cell3: "sq. yards",
      },
      {
        title: "sq. meters",
        cell2: "0.3861",
        cell3: "sq. miles",
      },
      {
        title: "hectares",
        cell2: "2.4710",
        cell3: "acres",
      },
    ];    
    const weight = [
      {
        title: "grams",
        cell2: "0.0353",
        cell3: "ounces",
      },
      {
        title: "kilograms",
        cell2: "2.2046",
        cell3: "pounds",
      },
      {
        title: "tonnes",
        cell2: "1.1",
        cell3: "short tons",
      },
    ];
    const volume = [
      {
        title: "milliliters",
        cell2: "0.0338",
        cell3: "fluid ounces",
      },
      {
        title: "liters",
        cell2: "2.1134",
        cell3: "pints",
      },
      {
        title: "liters",
        cell2: "1.0567",
        cell3: "quarts",
      },
      {
        title: "liters",
        cell2: "0.2642",
        cell3: "gallons",
      },
      {
        title: "cu. meters",
        cell2: "35.3145",
        cell3: "cubic feet",
      },
      {
        title: "cu. meters",
        cell2: "1.3079",
        cell3: "cubic yards",
      },
    ];   
    const temperature = 
      {
        title: "centigrade",
        cell2: "1.8(+32)",
        cell3: "fahrenheit",
      }
    const length2 = [
        {
          title: "inches",
          cell2: "2.54",
          cell3: "centimeters",
        },
        {
          title: "feet",
          cell2: "30.48",
          cell3: "centimeters",
        },
        {
          title: "yards",
          cell2: "0.9144",
          cell3: "meters",
        },
        {
          title: "miles",
          cell2: "1.6093",
          cell3: "kilometers",
        },
      ];
      
    const area2 = [
        {
          title: "sq. inches",
          cell2: "6.452",
          cell3: "sq. cm.",
        },
        {
          title: "sq. feet",
          cell2: "0.0929",
          cell3: "sq. meters",
        },
        {
          title: "sq. yards",
          cell2: "0.8361",
          cell3: "sq. meters",
        },
        {
          title: "sq. miles",
          cell2: "2.59",
          cell3: "sq. kilometers",
        },
        {
          title: "acres",
          cell2: "0.4047",
          cell3: "hectares",
        },
      ];
      
    const weight2 = [
        {
          title: "ounces",
          cell2: "28.3495",
          cell3: "grams",
        },
        {
          title: "pounds",
          cell2: "0.4536",
          cell3: "kilograms",
        },
        {
          title: "short tons",
          cell2: "0.9072",
          cell3: "tonnes",
        },
      ];
      const volume2 = [
        {
          title: "fluid ounces",
          cell2: "0.0338",
          cell3: "milliliters",
        },
        {
          title: "pints",
          cell2: "2.1134",
          cell3: "liters",
        },
        {
          title: "quarts",
          cell2: "1.0567",
          cell3: "liters",
        },
        {
          title: "gallons",
          cell2: "0.2642",
          cell3: "liters",
        },
        {
          title: "cubic feet",
          cell2: "35.3145",
          cell3: "cu. meters",
        },
        {
          title: "cubic yards",
          cell2: "1.3079",
          cell3: "cu. meters",
        },
      ];
      
      const temperature2 =
        {
          title: "fahrenheit",
          cell2: "-32/(1.8)",
          cell3: "centigrade",
        }
      
      
      
    
  return <>
      <div className='container mx-auto md:px-32 px-4 my-52 '>
        <h2 className='text-4xl mb-10 text-red-700 font-bold'>Metric to US - US to metric</h2>
        <div className='mToUS'>
          <h4 className='text-2xl mb-5 text-red-700 font-semibold'  >Metric to U.S. Conversions</h4>
          <div className='table1 mb-10'>
          <h2 className='text-2xl text-center text-red-700 font-bold py-2 border  border-[#e5e5e5] w-[80%] mx-auto'>Length</h2>
            {
              lengths.map((item,index)=>{
                return <div key={index} className='flex justify-between w-[80%] mx-auto  '>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>{item.title} </p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>*{item.cell2}</p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>={item.cell3}</p>
                  </div>
              })
            }
          </div>
          <h2 className='text-2xl text-center text-red-700 font-bold py-2 border  border-[#e5e5e5] w-[80%] mx-auto'>Area</h2>
          <div className='table2 mb-10'>
            {
              area.map((item,index)=>{
                return <div key={index} className='flex justify-between w-[80%] mx-auto  '>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>{item.title} </p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>*{item.cell2}</p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>={item.cell3}</p>
                  </div>
              })
            }
          </div>
          <h2 className='text-2xl text-center text-red-700 font-bold py-2 border  border-[#e5e5e5] w-[80%] mx-auto'>Weight</h2>
          <div className='table3 mb-10'>
            {
              weight.map((item,index)=>{
                return <div key={index} className='flex justify-between w-[80%] mx-auto  '>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>{item.title} </p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>*{item.cell2}</p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>={item.cell3}</p>
                  </div>
              })
            }
          </div>
          <h2 className='text-2xl text-center text-red-700 font-bold py-2 border  border-[#e5e5e5] w-[80%] mx-auto'>Volume</h2>
          <div className='table4 mb-10'>
            {
              volume.map((item,index)=>{
                return <div key={index} className='flex justify-between w-[80%] mx-auto  '>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>{item.title} </p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>*{item.cell2}</p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>={item.cell3}</p>
                  </div>
              })
            }
          </div>
          <h2 className='text-2xl text-center text-red-700 font-bold py-2 border  border-[#e5e5e5] w-[80%] mx-auto'>Temperature</h2>
          <div className='table5 mb-10'>
            
              
                 <div  className='flex justify-between w-[80%] mx-auto  '>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>{temperature.title} </p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>*{temperature.cell2}</p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>={temperature.cell3}</p>
                  </div>
              
          </div>
          <p className='w-[80%] mx-auto text-left mb-10'>To calculate the approximate U.S. measure equivalent to a known metric measure, simply multiply the metric quantity by the conversion factor in the center column. Example: 38 kilograms = 84 pounds, approximately (38 x 2.2046 = 83.78).</p>
          <div className='w-[80%] mx-auto border border-[#E5E5E5] h[1px]'></div>
        </div>
        <div className='usToM'>
          <h4 className='text-2xl mb-5 text-red-700 font-semibold'  >U.S. Conversions to Metric</h4>
          <div className='table1 mb-10'>
          <h2 className='text-2xl text-center text-red-700 font-bold py-2 border  border-[#e5e5e5] w-[80%] mx-auto'>Length</h2>
            {
              length2.map((item,index)=>{
                return <div key={index} className='flex justify-between w-[80%] mx-auto  '>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>{item.title} </p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>*{item.cell2}</p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>={item.cell3}</p>
                  </div>
              })
            }
          </div>
          <h2 className='text-2xl text-center text-red-700 font-bold py-2 border  border-[#e5e5e5] w-[80%] mx-auto'>Area</h2>
          <div className='table2 mb-10'>
            {
              area2.map((item,index)=>{
                return <div key={index} className='flex justify-between w-[80%] mx-auto  '>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>{item.title} </p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>*{item.cell2}</p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>={item.cell3}</p>
                  </div>
              })
            }
          </div>
          <h2 className='text-2xl text-center text-red-700 font-bold py-2 border  border-[#e5e5e5] w-[80%] mx-auto'>Weight</h2>
          <div className='table3 mb-10'>
            {
              weight2.map((item,index)=>{
                return <div key={index} className='flex justify-between w-[80%] mx-auto  '>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>{item.title} </p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>*{item.cell2}</p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>={item.cell3}</p>
                  </div>
              })
            }
          </div>
          <h2 className='text-2xl text-center text-red-700 font-bold py-2 border  border-[#e5e5e5] w-[80%] mx-auto'>Volume</h2>
          <div className='table4 mb-10'>
            {
              volume2.map((item,index)=>{
                return <div key={index} className='flex justify-between w-[80%] mx-auto  '>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>{item.title} </p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>*{item.cell2}</p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>={item.cell3}</p>
                  </div>
              })
            }
          </div>
          <h2 className='text-2xl text-center text-red-700 font-bold py-2 border  border-[#e5e5e5] w-[80%] mx-auto'>Temperature</h2>
          <div className='table5 mb-10'>
            
              
                 <div  className='flex justify-between w-[80%] mx-auto  '>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>{temperature2.title} </p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>*{temperature2.cell2}</p>
                  <p className='w-[33.33%] border py-2 border-[#E5E5E5]'>={temperature2.cell3}</p>
                  </div>
              
          </div>
          <p className='w-[80%] mx-auto text-left mb-10'>To calculate the approximate metric measure equivalent to a U.S. measure, simply multiply the U.S. quantity by the conversion factor in the center column. Example: 563 miles = 900 kilometers, approximately (563 x 1.6093 = 906.04).</p>
          <div className='w-[80%] mx-auto border border-[#E5E5E5] h[1px]'></div>
        </div>
      </div>
    </>
}
