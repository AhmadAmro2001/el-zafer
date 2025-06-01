import React, { useEffect, useState } from 'react'
import style from './Sidebar.module.css'
import { Link } from 'react-router-dom'
import mapLogo from '../../assets/google-map-icon.png'
export default function Sidebar() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className='w-28 absolute  h-screen bg-white top-0 left-0   flex flex-col justify-center'>
        <Link to="" className='flex flex-col items-center my-2 '>
          <div className='w-12 h-12 border border-red-700 bg-white text-red-700 rounded-full flex items-center justify-center'>
          <i className="fa-solid fa-house "></i>
          </div>
          <p className='text-sm text-slate-600'>Home</p>
        </Link>
        <Link to="" className='flex flex-col items-center my-2 '>
          <div className='w-12 h-12 border border-red-700 bg-white text-red-700 rounded-full flex items-center justify-center'>
          <i className="fa-solid fa-folder-open"></i>
          </div>
          <p className='text-sm text-slate-600'>Services</p>
        </Link>
        <Link to="" className='flex flex-col items-center my-2 '>
          <div className='w-12 h-12 border border-red-700 bg-white text-red-700 rounded-full flex items-center justify-center'>
          <i className="fa-solid fa-headphones"></i>
          </div>
          <p className='text-sm text-slate-600'>Contact us</p>
        </Link>
        <Link to="" className='flex flex-col items-center my-2 '>
          <div className='w-12 h-12 border border-red-700 main-gradient text-white rounded-full flex items-center justify-center'>
          <p className='text-[8px] text-center'>GET A QUOTE</p>
          </div>
          <p className='text-sm text-slate-600'>Get a quote</p>
        </Link>
        <Link to="" className='flex flex-col items-center my-2 '>
          <div className='w-12 h-12  bg-white   flex items-center justify-center'>
          <img src={mapLogo} className='w-full' alt="" />
          </div>
          <p className='text-sm text-slate-600'>Blog</p>
        </Link>
        

      </div>
    </>
}
