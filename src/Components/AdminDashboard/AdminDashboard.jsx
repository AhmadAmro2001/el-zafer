import React, { useEffect, useState } from 'react'
import style from './AdminDashboard.module.css'
import { Link } from 'react-router-dom'
export default function AdminDashboard() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className='my-60'>
        <p className='text-5xl  font-bold'>Admin Dashboard</p>
        <div className='flex gap-2 justify-around mt-10'>
          <Link className='text-xl border border-red-700 main-gradient text-white rounded-full p-5' to='/adminLogin'>Admin Login</Link>
          <Link className='text-xl border border-red-700 main-gradient text-white rounded-full p-5' to='/adminSignUp'>Admin Signup</Link>
        </div>
      </div>
    </>
}
