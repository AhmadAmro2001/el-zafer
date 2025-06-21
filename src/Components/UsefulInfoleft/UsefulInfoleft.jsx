import React, { useEffect, useState } from 'react'
import style from './UsefulInfoleft.module.css'
import { Link } from 'react-router-dom'
export default function UsefulInfoleft({data}) {

  return <>
      <div className='flex flex-col  md:flex-row justify-between container mx-auto md:px-16 px-4 relative py-14'>
        
        <div className=' md:block hidden'> 
      
        <div className='w-[501px]  h-[269px] rounded-2xl overflow-hidden '>
          <img src={data.photo} alt="" className='w-full h-full object-cover' />
        </div>
        </div>
        <div className='text-left md:ps-32 my-auto'>
          
          <h2 className='text-2xl mb-2 text-[#0C71B9]'>{data.title}</h2>
          <p className='text-[#999999] mb-2'>{data.description}</p>
          <Link 
          to="usefulInfoDetails"
          state={{
            title: data.title,
            photo: data.photo,
            detail: data.detail
          }}
          className='text-[#0C71B9]'>Read More <i className="fa-solid fa-arrow-right"></i></Link>
        </div>
        <div className='relative mx-auto mt-5 md:mt-0 block md:hidden'> 
        
        <div className='md:w-[501px] md:h-[269px] w-[300px] h-[150px] rounded-2xl overflow-hidden '>
          <img src={data.photo} alt="" className='w-full h-full object-cover' />
        </div>
        </div>
      </div>
    </>
}
