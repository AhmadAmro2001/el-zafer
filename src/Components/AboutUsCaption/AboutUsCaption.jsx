import React, { useEffect, useState } from 'react'
import style from './AboutUsCaption.module.css'
export default function AboutUsCaption() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className='container mx-auto px-5 md:px-32 text-left py-5 md:py-16'>
          
          <p className='text-gray-800 md:text-lg text-[8px]'>Al Zafer Wings Cargo Services Co. is an international freight forwarding outfit headquartered in Jeddah, which has represented excellence in the shipping, forwarding and logistics industry for almost four decades. We offer years of professional experience within the freight forwarding, logistics and commercial storage sectors.</p>
          
      </div>
    </>
}
