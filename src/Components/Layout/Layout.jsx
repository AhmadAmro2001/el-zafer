import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

export default function Layout() {
  return (
    <>
      <NavBar/>
      
      <div className="container mx-auto text-center">
        <div >
          <Sidebar/>
          <div className='ms-28'>
            <Outlet/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
