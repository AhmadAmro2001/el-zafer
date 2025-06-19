import React, { useEffect, useState } from 'react'
import style from './ActivitiesLeft.module.css'
import { Link } from 'react-router-dom'
export default function ActivitiesLeft({data}) {
    useEffect(() => {
        
    }, [])
  return <>
      <div className='flex flex-col  md:flex-row justify-between container mx-auto md:px-16 px-4 relative py-14'>
        
        <div className='relative md:block hidden'> 
        
        <div className='absolute w-[400px] h-[313px] left-28 top-14 border-[3px] z-0 border-[#0C71B9]'>
        </div>
        <div className='w-[455px]  h-[329px] z-10 relative block'>
          <img src={data.photo} alt="" className='w-full h-full object-cover' />
        </div>
        </div>
        <div className='text-left md:ps-32 my-auto'>
          <p className='mb-2'>{data.index}</p>
          <h2 className='text-2xl mb-2 text-[#0C71B9]'>{data.title}</h2>
          <p className='text-[#999999] mb-2'>{data.description}</p>
          <Link 
          to="activityDetails"
          state={{
            title: data.title,
            photo: data.photo,
            detail: data.detail

          }}
          className='text-[#0C71B9]'>Read More <i className="fa-solid fa-arrow-right"></i></Link>
        </div>
        <div className='relative mx-auto mt-5 md:mt-0 block md:hidden'> 
        
        <div className='absolute md:w-[400px] md:h-[313px] w-[200px] h-[150px] md:right-28 md:top-14 top-6 right-6 border-[3px] z-0  border-[#0C71B9]'>
        </div>
        <div className='md:w-[455px] md:h-[329px] w-[200px] h-[150px] z-10 relative block'>
          <img src={data.photo} alt="" className='w-full h-full object-cover' />
        </div>
        </div>
      </div>
    </>
}
