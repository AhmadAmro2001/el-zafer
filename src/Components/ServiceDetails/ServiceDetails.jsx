import React, { useEffect, useState } from 'react'
import style from './ServiceDetails.module.css'
import { useLocation } from 'react-router-dom';
export default function ServiceDetails() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
    const { state } = useLocation();
    const { image, title } = state || {};
  return <>

    </>
}
