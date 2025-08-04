import React, { useEffect, useState } from "react";
import style from "./Contact.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
export default function Contact() {
  const [isloading, setIsLoading] = useState(false);
  const offices = [
    {
      title: "Jeddah Branch",
      location:
        "Jeddah - head Office Building Np. 3202, Al Fayum Street, Al Hamra District, Unit No.1, Jeddah 23212 - 7539, Short Address JCHB3202, Kingdom of saudi Arabia",
      tel: "+966-12-6646888",
      fax: "+966-12-6611043",
      tollFree: "Toll free: 800-12-8888-1",
      email:["qatamesh@alzafercargo.com","logistics@alzafercargo.com","shipping3@alzafercargo.com","marketing3@alzafercargo.com"]
    },
    {
      title: "Dammam Branch",
      location:
        "AL ZAFER WINGS CARGO SERVICES CO. MOUSA BIN AL NASEER STRRT, TUBBAYSHI DIST. Opp: ARRAWDAW HOSPITAL. P.O. BOX 3971, DAMMAM 31481 KINGDOM OD SAUDI ARABIA",
      tel: "+966138279085/ 138279081",
      email:["marketing-dam@alzafercargo.com","operations-dam@alzafercargo.com","shipping3@alzafercargo.com","qatamesh@alzafercargo.com"]
    },
    {
      title: "Riyadh Branch",
      location:
        "AL ZAFER WINGS CARGO SERVICES CO. RIYADH P.O BOX NO: 6048 SAUDI ARABIA",
      tel: "96614788849",
      fax: "96614781188",
      email:["nagm@alzafergroup.com","qatamesh@alzafercargo.com"]
    },
  ];
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    phoneNumber:'',
    message:'',
  });
  const handleChange = (e)=>{
    setFormData(prev =>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }
  const handlePhoneChange = (value) => {
    setFormData(prev => ({
      ...prev,
      phoneNumber: value
    }));
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(formData);
    
    try {
      setIsLoading(true);
      await axios.post('https://el-zafer-backend.onrender.com/quotes/send-quote',formData);
      setFormData({
        name:'',
        email:'',
        phoneNumber:'',
        message:'',
      });
      setIsLoading(false);
    } catch (error) {
      console.log("error sending message",error);
      setIsLoading(false);
    }
  }
  return (
    <>
      <div className='container mx-auto relative px-4 md:px-36 md:mt-20 mt-24 text-white bg-[#095890]'>
        <div className='flex flex-col justify-center items-center  md:h-screen h-[250px] '>
            <h1 className='md:mb-5 md:text-6xl text-[24px] mb-3 font-bold'>Contact</h1>
            <h3 className='md:text-xl text-[10px] md:mb-2 '>At our company, we strive to provide our customers with reliable and efficient shipping services that meet their needs and exceed their expectations</h3>
            <p className='md:mt-5 md:text-lg text-[8px] text-center '>So if you have any questions, comments, or concerns about the shipping process, our team of dedicated professionals is here to assist you every step of the way.</p>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[495px] w-[200px] md:h-[495px] h-[200px] opacity-15 border rounded-full '>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[425px] w-[160px] md:h-[425px] h-[160px]  opacity-15  border rounded-full '>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[319px] w-[120px] md:h-[319px] h-[120px]  opacity-15  border rounded-full '>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[225px] w-[80px] md:h-[225px] h-[80px]  opacity-15  border rounded-full '>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[120px] w-[50px] md:h-[120px] h-[50px]  opacity-15  bg-white rounded-full '>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[75px] w-[35px] md:h-[75px] h-[35px]  opacity-20  bg-white rounded-full '>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[40px] w-[20px] md:h-[40px] h-[20px]  opacity-25  bg-white rounded-full '>
        </div>
        
      </div>
      {/* offices */}
      <div className="container mx-auto px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
          {offices.map((office, index) => (
            <div key={index} className="group">
              <div className="text-left px-8 h-[450px] py-6 bg-[#0C71B9] rounded-2xl">
                <h1 className="text-white mb-4 text-2xl font-semibold">
                  {office.title}
                </h1>
                <div className="flex items-center gap-4 mx-5 my-3">
                  <i className="fa-solid fa-location-dot text-white text-2xl"></i>
                  <p className="text-white text-sm">{office.location}</p>
                </div>
                <div className="flex items-center gap-4 mx-5 my-3">
                  <i className="fa-solid fa-mobile-screen-button text-white text-2xl"></i>
                  <p className="text-white text-sm">Tel: {office.tel}</p>
                </div>
                {office.tollFree && (
                  <div className="flex items-center gap-4 mx-5 my-3">
                    <i className="fa-solid fa-mobile-screen-button text-white text-2xl"></i>
                    <p className="text-white text-sm">{office.tollFree}</p>
                  </div>
                )}
                {office.fax && (
                  <div className="flex items-center gap-4 mx-5 my-3">
                    <i className="fa-solid fa-mobile-screen-button text-white text-2xl"></i>
                    <p className="text-white text-sm">Fax: {office.fax}</p>
                  </div>
                )}
                {office.email.map((email, index) => (
                  <div key={index} className="flex items-center gap-4 mx-5 my-3">
                    <i className="fa-solid fa-envelope text-white text-2xl"></i>
                    <p className="text-white text-sm">{email}</p>
                  </div>
                ))}
                
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* map and contact form*/}
      <div className="container mx-auto md:px-16 px-6 my-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.6808550213113!2d39.161539074988355!3d21.520217170718094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cf8dfcf9cb37%3A0x63b832c960678f4c!2sAl-Zafer%20Wings%20Cargo%20Services%20Co.!5e0!3m2!1sen!2seg!4v1750468938552!5m2!1sen!2seg"
              className="w-full md:w-[600px] md:h-[741px] h-[400px]"
              style={{ border: "0", borderRadius: "20px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="group bg-[#F2F2F2] rounded-2xl p-10">
            <p className=" font-semibold text-[#E11F25] mb-2">Contact Us</p>
            <h1 className="text-2xl font-semibold mb-3">Send Us Message</h1>

            <form onSubmit={handleSubmit} action="">
              <div className="flex flex-col gap-2 ">
                <label className="text-left font-semibold" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="border border-gray-300 rounded-md p-2"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label className="text-left font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-md p-2"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label className="text-left font-semibold" htmlFor="phone">
                  Phone number
                </label>
                <PhoneInput
                  country={"sa"}
                  placeholder="Enter your phone number"
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                  containerStyle={{ width: "100%" }}
                  inputStyle={{ width: "100%" }}
                  buttonStyle={{ width: "45px" }}
                  value={formData.phoneNumber}
                  onChange={handlePhoneChange}
                />
                <label className="text-left font-semibold" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="write your message here"
                  className="border border-gray-300 rounded-md p-2"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#0C71B9] mt-5 text-white py-2 px-4 w-48 mx-auto rounded-md"
                >
                  {isloading ? <i className="fa-solid fa-spinner animate-spin"></i> : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
