import React, { useEffect, useState } from 'react'
import style from './WhatsAppFab.module.css'
import { FaWhatsapp } from "react-icons/fa";
export default function WhatsAppFab() {
    const phoneNumber = "9660533368036"; 
    const message = "Hello, I would like to ask about your cargo services.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return <>
      <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
    </>
}
