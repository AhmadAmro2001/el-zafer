import React, { useEffect, useState } from 'react'
import style from './UsefulInfo.module.css'
import UsefulInfoleft from '../UsefulInfoleft/UsefulInfoleft'
import UsefulInfoRight from '../UsefulInfoRight/UsefulInfoRight'
export default function UsefulInfo() {
    const data =[
      {
        title:"Abbreviation",
        description:"This section provides a list of commonly used shipping and logistics abbreviations along with their meanings, helping users quickly understand key industry terms such as BAF (Bunker Adjustment Fees), CY (Container Yard), and THC (Terminal Handling Charges).",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1749622992/homeAbout2_hwk3er.png",
        link:"abbreviation"
        
      },
      {
        title:"Air containers dims",
        description:"This section outlines standard air container dimensions used in cargo transport. It details the displacement, maximum gross weight, and external dimensions for different unit load devices (ULDs) such as Main Deck Pallet, LD-7, P9A Lower Deck Pallet, and LD-11, along with illustrations for each.",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1750304173/activities7_nv280l.jpg",
        link:"airContainersDims"
      },
      {
        title:"Famous incoterm",
        description:"This section explains well-known Incoterms (International Commercial Terms) such as EX-Works, FOB, FCA, FAS, and CFR. Each term defines the responsibilities of buyers and sellers in international trade—covering who handles transportation, insurance, and export/import formalities at different points in the shipping process",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1749623140/ourPartners_cfca0b.png",
        link:"famousIncoterm"
        
      },
      {
        title:"Glossary of Trade terms",
        description:"This section presents a glossary of trade terms, organized alphabetically. It defines key shipping and logistics concepts under each letter, such as Air Waybill, All-Risk Insurance, BAF (Bunker Adjustment Factor), Bill of Lading, Bonded Warehouse, Break-bulk Vessel, Bulk Cargo, and CAD (Cash Against Documents). Each entry provides a short definition to help clarify industry terminology.",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1750389129/useful1_xdspqu.png",
        link:"glossaryOfTradeTerms"
      },
      {
        title:"Metric basics",
        description:"This section explains basic metric units of measurement, including prefixes like kilo, hecto, deca, deci, centi, and milli. It also provides conversion tables for length, weight, and volume, showing how common units such as kilometers, meters, grams, kilograms, tons, pounds, and liters relate to their equivalents in other measurement systems.",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1750389127/useful2_mk8dkw.png",
        link:"metricBasics"
       
      },
      {
        title:"Metric to US - US to metric",
        description:"This section provides conversion tables between metric and U.S. customary units. It covers length, area, weight, and volume, showing how units like millimeters, meters, hectares, grams, and liters convert into inches, yards, acres, pounds, and fluid ounces. These references help in quickly converting measurements between the two systems.",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1749985397/services1_yrb2mi.png",
        link:"metricToUS"
        
      },
      {
        title:"Ocean containers dims",
        description:"This section provides detailed dimensions and capacities of standard ocean containers. It includes specifications for Standard 20’, Standard 40’/High Cube 40’, and Open Top containers. Each entry lists internal measurements, door sizes, capacity, tare weight, and maximum cargo weight, helping shippers select the right container type for their freight.",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1751183633/Cargo_Storage_afuao9.jpg",
        link:"oceanContainersDims"
      },
      {
        title:"Shipping schedule",
        description:"This section provides a shipping schedule, listing the days and times when cargo is loaded and unloaded at ports. It includes information about the ports of call, vessel schedules, and cargo handling procedures, helping shippers plan their shipments and track their cargo movements.",
        photo:"https://res.cloudinary.com/djvzbznry/image/upload/v1752679557/Container_ship_2048_1152_rdax_65_vir4rd.jpg",
        link:"shippingSchedule"
        
      }
    ]
  return <>
      

      <div className='my-5 md:my-44'>
      <UsefulInfoleft data={data[0]}/>
      <UsefulInfoRight data={data[1]}/>
      <UsefulInfoleft data={data[2]}/>
      <UsefulInfoRight data={data[3]}/>
      <UsefulInfoleft data={data[4]}/>
      <UsefulInfoRight data={data[5]}/>
      <UsefulInfoleft data={data[6]}/>
      <UsefulInfoRight data={data[7]}/>
      
      
      
      
      </div>
    </>
}
