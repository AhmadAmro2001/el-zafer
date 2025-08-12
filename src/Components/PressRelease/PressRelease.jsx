import React, { useEffect, useState } from 'react'
import style from './PressRelease.module.css'
export default function PressRelease() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
     <div className='container w-[80%] mx-auto my-52'>
        <h1 className='text-red-700 text-3xl font-bold pb-5 text-left'>Promotions</h1>
        <p className='text-gray-800 text-xl text-left pb-7'>Al Zafer offers personalized service for each client through the Customer Service Representative system. Al Zafer focuses on sea and air freight part and full-load, group age, as well as industry specific project cargo, to and from the major worldwide ports and airports, using the main and the most reliable air/ocean freight companies.</p>
        <h1 className='text-red-700 text-3xl font-bold pb-5 text-left'>Social & Cultural</h1>
        <p className='text-gray-800 text-xl text-left pb-7'>We have formed clubs for football, volley ball and cricket by ourselves and actively participating in the local tournaments as Al Zafer Cargo Team.</p>
        
     </div>
    </>
}
