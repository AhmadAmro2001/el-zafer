import React from 'react'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import NavBar from '../NavBar/NavBar'

export default function Layout() {
  return (
    <>
      
      <NavBar/>
      <div className="container mx-auto mt-32 text-center">
        <div >
          <Sidebar/>
          <div >
            <Outlet/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
