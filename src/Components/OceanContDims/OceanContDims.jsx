import React, { useEffect, useState } from 'react'
import style from './OceanContDims.module.css'
export default function OceanContDims() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className='container mx-auto md:px-32 px-4 my-52'>
        <h2 className='text-4xl mb-10 text-red-700 font-bold'>Ocean Container Dimensions</h2>
        <div className='table1 mb-10'>
          <h2 className='text-2xl text-center text-red-700 font-bold py-2    w-[80%] mx-auto'>Standard 20'</h2>
          <div  className='flex justify-between w-full mx-auto  '>
                  <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1756081173/Screenshot_2025-08-25_031756_mipa0n.png" className='mx-5 object-fit w-[25%] rounded-lg' alt="" />
                  <div className='  mx-5'>
                    <ul className='text-left list-[disc]'>
                      <li>Inside Length</li>
                      <li>Inside Width</li>
                      <li>Inside Height</li>
                      <li>Door Width</li>
                      <li>Door Height</li>
                      <li>Capacity</li>
                      <li>Tare Weight</li>
                      <li>Maximum Cargo</li>
                    </ul>
                  </div>
                  <div className=' mx-5'>
                    <ul className='text-left list-[disc]'>
                      <li>19'4"/5.89 m</li>
                      <li>7'8"/2.33 m</li>
                      <li>7'10"/2.38 m</li>
                      <li>7'8"/2.33 m</li>
                      <li>7'6"/2.28 m</li>
                      <li>1,172 ft³/33.18 m³</li>
                      <li>4,916 lb/2,229 kg</li>
                      <li>47,999 lb/21,727 kg</li>
                      
                    </ul>
                  </div>
          </div>
          <div className=' h-[1px] w-full bg-[#9f9e9e] mt-10'></div>
        </div>
        <div className='table2 mb-10'>
          <h2 className='text-2xl text-center text-red-700 font-bold py-2    w-[80%] mx-auto'>Standard 40' / High Cube 40'</h2>
          <div  className='flex justify-between w-full mx-auto  '>
                  <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1756081173/Screenshot_2025-08-25_031802_ahmirc.png" className='mx-5 object-fit w-[25%] rounded-lg' alt="" />
                  <div className='  mx-5'>
                    <ul className='text-left list-[disc]'>
                      <li>Inside Length</li>
                      <li>Inside Width</li>
                      <li>Inside Height</li>
                      <li>Door Width</li>
                      <li>Door Height</li>
                      <li>Capacity</li>
                      <li>Tare Weight</li>
                      <li>Maximum Cargo</li>
                    </ul>
                  </div>
                  <div className='  mx-5'>
                    <ul className='text-left list-[disc]'>
                      <li>39'5"/12.01 m</li>
                      <li>7'8"/2.33 m</li>
                      <li>7'10"/2.38 m</li>
                      <li>7'8"/2.33 m</li>
                      <li>7'6"/2.28 m</li>
                      <li>2,390 ft³/67.67 m³</li>
                      <li>8,160 lb/3,701 kg</li>
                      <li>59,040 lb/26,780 kg</li>
                      
                    </ul>
                  </div>
                  <div className='  mx-5'>
                    <ul className='text-left list-[disc]'>
                      <li>39'5"/12.01 m</li>
                      <li>7'8"/2.33 m</li>
                      <li>8'10'/2.69 m</li>
                      <li>7'8"/2.33 m</li>
                      <li>8'5"/2.56 m</li>
                      <li>2,694 ft³/76.28 m³</li>
                      <li>8,750 lb/3,968 kg</li>
                      <li>58,450 lb/26,512 kg</li>
                      
                    </ul>
                  </div>
          </div>
          <div className=' h-[1px] w-full bg-[#9f9e9e] mt-10'></div>
        </div>
        <div className='table3 mb-10'>
          <h2 className='text-2xl text-center text-red-700 font-bold py-2    w-[80%] mx-auto'>Open Top 20' / Open Top 40'</h2>
          <div  className='flex justify-between w-full mx-auto  '>
                  <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1756081173/Screenshot_2025-08-25_031808_okqpqt.png" className='mx-5 object-fit w-[25%] rounded-lg' alt="" />
                  <div className='  mx-5'>
                    <ul className='text-left list-[disc]'>
                      <li>Inside Length</li>
                      <li>Inside Width</li>
                      <li>Inside Height</li>
                      <li>Door Width</li>
                      <li>Door Height</li>
                      <li>Capacity</li>
                      <li>Tare Weight</li>
                      <li>Maximum Cargo</li>
                    </ul>
                  </div>
                  <div className='  mx-5'>
                    <ul className='text-left list-[disc]'>
                      <li>19'4"/5.89 m</li>
                      <li>7'7"/2.31 m</li>
                      <li>7'8"/2.33 m</li>
                      <li>7'6"/2.28 m</li>
                      <li>7'2"/2.18 m</li>
                      <li>1,136 ft³/32.16 m³</li>
                      <li>5,280 lb/2,394 kg</li>
                      <li>47,620 lb/21,600 kg</li>
                      
                    </ul>
                  </div>
                  <div className='  mx-5'>
                    <ul className='text-left list-[disc]'>
                      <li>39'5"/12.01 m</li>
                      <li>7'8"/2.33 m</li>
                      <li>7'8"/2.33 m</li>
                      <li>7'8"/2.33 m</li>
                      <li>7'5"/2.26 m</li>
                      <li>2,350 ft³/66.54 m³</li>
                      <li>8,490 lb/3,850 kg</li>
                      <li>58,710 lb/26,630 kg</li>
                      
                    </ul>
                  </div>
          </div>
          <div className=' h-[1px] w-full bg-[#9f9e9e] mt-10'></div>
        </div>
        <div className='table4 mb-10'>
          <h2 className='text-2xl text-center text-red-700 font-bold py-2    w-[80%] mx-auto'>Reefer 20' / Reefer 40'</h2>
          <div  className='flex justify-between w-full mx-auto  '>
                  <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1756081173/Screenshot_2025-08-25_031813_ldmvhv.png" className='mx-5 object-fit w-[25%] rounded-lg' alt="" />
                  <div className='mx-5'>
                    <ul className='text-left list-[disc]'>
                      <li>Inside Length</li>
                      <li>Inside Width</li>
                      <li>Inside Height</li>
                      <li>Door Width</li>
                      <li>Door Height</li>
                      <li>Capacity</li>
                      <li>Tare Weight</li>
                      <li>Maximum Cargo</li>
                    </ul>
                  </div>
                  <div className='mx-5'>
                    <ul className='text-left list-[disc]'>
                      <li>17'8"/5.38 m</li>
                      <li>7'5"/2.26 m</li>
                      <li>7'5"/2.26 m</li>
                      <li>7'5"/2.26 m</li>
                      <li>7'3"/2.20 m</li>
                      <li>1,000 ft³/28.31 m³</li>
                      <li>7,040 lb/3,193 kg</li>
                      <li>45,760 lb/20,756 kg</li>
                      
                    </ul>
                  </div>
                  <div className='mx-5'>
                    <ul className='text-left list-[disc]'>
                      <li>37'8"/11.48 m</li>
                      <li>7'5"/2.26 m</li>
                      <li>7'2"/2.18 m</li>
                      <li>7'5"/2.26 m</li>
                      <li>7'0"/2.13 m</li>
                      <li>2,040 ft³/57.76 m³</li>
                      <li>10,780 lb/4,889 kg</li>
                      <li>56,276 lb/25,526 kg</li>
                      
                    </ul>
                  </div>
          </div>
          <div className=' h-[1px] w-full bg-[#9f9e9e] mt-10'></div>
        </div>
        <div className='table5 mb-10'>
          <h2 className='text-2xl text-center text-red-700 font-bold py-2    w-[80%] mx-auto'>Flat Rack 20' / Flat Rack 40'</h2>
          <div  className='flex justify-between w-full mx-auto  '>
                  <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1756081174/Screenshot_2025-08-25_031818_rq47uq.png" className='mx-5 object-fit w-[25%] rounded-lg' alt="" />
                  <div className='mx-5'>
                    <ul className='text-left list-[disc]'>
                      <li>Inside Length</li>
                      <li>Inside Width</li>
                      <li>Inside Height</li>
                      <li>Tare Weight</li>
                      <li>Maximum Cargo</li>
                    </ul>
                  </div>
                  <div className='mx-5'>
                    <ul className='text-left list-[disc]'>
                      <li>18'5"/5.61 m</li>
                      <li>7'3"/2.20 m</li>
                      <li>7'4"/2.23 m</li>
                      <li>5,578 lb/2,530 kg</li>
                      <li>47,333 lb/21,469 kg</li> 
                    </ul>
                  </div>
                  <div className='mx-5'>
                    <ul className='text-left list-[disc]'>
                      <li>39'7"/12.06 m</li>
                      <li>6'10"/2.08 m</li>
                      <li>6'5"/1.95 m</li>
                      <li>12,081 lb/5,479 kg</li>
                      <li>85,800 lb/38,918 kg</li> 
                    </ul>
                  </div>
          </div>
          <div className=' h-[1px] w-full bg-[#9f9e9e] mt-10'></div>
        </div>
      </div>
    </>
}
