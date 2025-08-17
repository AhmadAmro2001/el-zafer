import React, { useEffect, useState } from 'react'
import style from './AboutUsMission.module.css'
export default function AboutUsMission() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className=' bg-[#F2F2F2] w-[80%] text-center mx-auto p-5 md:p-20 rounded-3xl'>
        <h1 className='md:text-3xl text-[12px] mb-5 font-bold text-red-700'>Our vision</h1>
        <p className='text-gray-800 md:text-[16px] text-[8px]'>The assignment of the company is to accomplish absolute perfection and take in all developmental innovations in the services industry helps to keep a leading pace with the modern complex and competitive market environment.

Globalization has made the market environment more complex and competitive than ever before. Customers are now more demanding and they are looking for better service, lower prices and shorter response time from their providers. Company wants to get through by initiating more value-added services in this changing environment. Al Zafer provides the most extensive and professional forwarding services to its customers and overseas agents.</p>
      </div>
      <div className='bg-[#F2F2F2] w-[80%] text-center mx-auto p-5 md:p-20 rounded-3xl mt-5 '>
        <h1 className='md:text-3xl text-[12px] font-bold mb-5 text-red-700'>Our mission</h1>
        <p className='text-gray-800 md:text-[16px] text-[8px]'>Al Zafer was established in 1970, to cater to the needs of shippers and consignees, on the lookout for an efficient International Shipping & Logistics company, who can offer a range of services under one roof. Today, with a magnificent track record of more than three decades, Al Zafer has become one of the foremost names in the shipping industry. We have our head office in Jeddah and branches in almost all the major cities in the Kingdom of Saudi Arabia and Egypt.</p>
      </div>
      <div className='bg-[#F2F2F2] w-[80%] text-center mx-auto p-5 md:p-20 rounded-3xl mt-5 '>
        <h1 className='md:text-3xl text-[12px] font-bold mb-5 text-red-700'>Quality Policy</h1>
        <p className='text-gray-800 md:text-[16px] text-[8px]'>We offer years of professional experience within the freight forwarding, logistics and commercial storage sectors. Our portfolio of specialized services includes International Freight Forwarding for ocean and airfreight, Liner Service, Container Freight Station, Stevedoring & Terminal Operations, Customs Broking, Cargo Survey and Container Yard. Our Company strives to gain the respect and ongoing support of our customers by offering high quality and value added service while maintaining the highest ethical standards. Our Objective is to perform beyond the expectations of all our customers in everything we do.</p>
        
      </div>
    </>
}
