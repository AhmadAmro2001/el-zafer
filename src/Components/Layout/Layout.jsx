import React from 'react'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import NavBar from '../NavBar/NavBar'

export default function Layout() {
  return (
    <>
      
      <NavBar/>
      <div className="mt-32 text-center">
        <div >
          <Sidebar/>
          <div className='md:w-[92%] w-full ml-auto'>
            <Outlet/>
            <Footer/>
          </div>
        </div>
      </div>
      
    </>
  )
}
