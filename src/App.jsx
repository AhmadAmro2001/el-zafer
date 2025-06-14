import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from './Components/Layout/Layout'
import NotFound from './Components/NotFound/NotFound'
import Home from './Components/Home/Home'
import AboutUs from './Components/AboutUs/AboutUs'


function App() {
let routes = createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'about',element:<AboutUs/>},
    {path:'contact',element:<h1>Contact</h1>},
    {path:'*',element:<NotFound/>}
  ]}
])
  return (
    <>
      <RouterProvider router={routes}>

      </RouterProvider>
    </>
  )
}

export default App
