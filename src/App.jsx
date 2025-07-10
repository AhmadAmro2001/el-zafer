import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from './Components/Layout/Layout'
import NotFound from './Components/NotFound/NotFound'
import Home from './Components/Home/Home'
import AboutUs from './Components/AboutUs/AboutUs'
import Services from './Components/Services/Services';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Activities from './Components/Activities/Activities';
import ActivitiesDetails from './Components/ActivitiesDetails/ActivitiesDetails';
import UsefulInfo from './Components/UsefulInfo/UsefulInfo';
import UsefulInfoDetails from './Components/UsefulInfoDetails/UsefulInfoDetails';
import Contact from './Components/Contact/Contact';
import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions';
import PrivacyAndPolicy from './Components/PrivacyAndPolicy/PrivacyAndPolicy';
import TrackingAndQoutaions from './Components/TrackingAndQoutaions/TrackingAndQoutaions';
import HomeDetails from './Components/HomeDetails/HomeDetails';
import Qoutations from './Components/Qoutations/Qoutations';
function App() {
let routes = createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'details',element:<HomeDetails/>},
    {path:'about',element:<AboutUs/>},
    {path:'services',element:<Services/>},
    {path:'services/serviceDetails',element:<ServiceDetails/>},
    {path:'activities',element:<Activities/>},
    {path:'activities/activityDetails',element:<ActivitiesDetails/>},
    {path:'usefulInfo',element:<UsefulInfo/>},
    {path:'usefulInfo/usefulInfoDetails',element:<UsefulInfoDetails/>},
    {path:'contact',element:<Contact/>},
    {path:'privacy',element:<PrivacyAndPolicy/>},
    {path:'terms',element:<TermsAndConditions/>},
    {path:'tracking',element:<TrackingAndQoutaions/>},
    {path:'qoutation',element:<Qoutations/>},
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
