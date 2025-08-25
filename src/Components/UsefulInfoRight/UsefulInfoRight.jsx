import React, { useEffect, useState } from 'react'
import style from './UsefulInfoRight.module.css'
import { Link } from 'react-router-dom'
export default function UsefulInfoRight({data}) {
    
  return <>
      <div className='flex flex-col  md:flex-row justify-between container mx-auto md:px-16 px-4 relative py-14'>
        <div className='text-left md:pe-32 my-auto'>
          
          <h2 className='text-2xl mb-2 text-red-700'>{data.title}</h2>
          <p className='mb-2 '>{data.description}</p>
          <Link
          to={data.link}
          state={{
            title: data.title,
            photo: data.photo,
          
          }}
          className='text-[#0C71B9] mb-3 md:mb-0'>
            Read More <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <div className=' mx-auto mt-5 md:mt-0'> 
        <div className='md:w-[501px] md:h-[269px] w-[300px] h-[150px] rounded-2xl overflow-hidden'>
          <img src={data.photo} alt="" className='w-full h-full object-cover' />
        </div>
        </div>
      </div>
    </>
}
