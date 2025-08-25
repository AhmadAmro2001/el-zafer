import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from './Components/Layout/Layout'
import NotFound from './Components/NotFound/NotFound'
import Home from './Components/Home/Home'
import AboutUs from './Components/AboutUs/AboutUs'
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
import Services from './Components/Services/Services';
import PressRelease from './Components/PressRelease/PressRelease';
import ContainerCalculator from './Components/ContainerCalculator/ContainerCalculator';
import Abbreviation from './Components/Abbreviation/Abbreviation';
import AirContainersDims from './Components/AirContainersDims/AirContainersDims';
import FamousIncterm from './Components/FamousIncterm/FamousIncterm';
import GlossaryOfTradeTerms from './Components/GlossaryOfTradeTerms/GlossaryOfTradeTerms';
import MetricBasics from './Components/MetricBasics/MetricBasics';
import MetricToUs from './Components/MetricToUs/MetricToUs';
import OceanContDims from './Components/OceanContDims/OceanContDims';
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
    {path:'usefulInfo/abbreviation',element:<Abbreviation/>},
    {path:'usefulInfo/airContainersDims',element:<AirContainersDims/>},
    {path:'usefulInfo/famousIncoterm',element:<FamousIncterm/>},
    {path:'usefulInfo/glossaryOfTradeTerms',element:<GlossaryOfTradeTerms/>},
    {path:'usefulInfo/metricBasics',element:<MetricBasics/>},
    {path:'usefulInfo/metricToUs',element:<MetricToUs/>},
    {path:'usefulInfo/oceanContainersDims',element:<OceanContDims/>},
    {path:'contact',element:<Contact/>},
    {path:'privacy',element:<PrivacyAndPolicy/>},
    {path:'terms',element:<TermsAndConditions/>},
    {path:'tracking',element:<TrackingAndQoutaions/>},
    {path:'qoutation',element:<Qoutations/>},
    {path:'pressRelease' , element:<PressRelease/>},
    {path:'containerCalculator',element:<ContainerCalculator/> },
    {path:'*',element:<NotFound/>}
  ]}
])
  return (
    <>
    
      <RouterProvider router={routes}></RouterProvider>
    
    </>
  )
}

export default App
