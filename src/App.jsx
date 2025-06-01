import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import NotFound from './Components/NotFound/NotFound'
import Home from './Components/Home/Home'


function App() {
let routes = createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'about',element:<h1>About</h1>},
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
