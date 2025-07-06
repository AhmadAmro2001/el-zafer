import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import NavBar from '../NavBar/NavBar'

export default function Layout() {
  const location = useLocation(); 
useEffect(() => {
  window.scrollTo(0, 0);
}, [location.pathname]);


  return (
    <>
      
      <NavBar/>
      <div className="  text-center">
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
