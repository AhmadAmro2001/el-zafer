import React, { useEffect, useState } from 'react'
import style from './ContainerCalculator.module.css'
export default function ContainerCalculator() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className=' w-[80%] mx-auto text-left container my-56'>
        <h1 className='text-red-700 font-semibold text-2xl mb-5'>Container Load Calculator</h1>
        <p className='text-gray-700 '>Container loading calculator is an application that is intended to compute and to place some goods into container and make their position to be fit / loaded and optimized. User would have to select the kind of cargo along its dimension parameters (width, height, length, weight, and number), each cargo can be packed into some pallet or packed directly into a container. Then the program will display how the goods (cargo or pallet) are positioned within a container. The way they are positioned should be best and fit, it means they must occupy some space if necessary.</p>
      </div>
    </>
}
