import React, { useContext, useEffect, useState } from "react";
import style from "./AdminLogin.module.css";
import { useNavigate } from "react-router-dom";
import { UserTokenContext } from "../../Context/UserTokenContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
export default function AdminLogin() {
  
  let [apiError,setApiError] = useState(null);
  let [isLoading, setIsLoading] = useState(null)
  let navigate = useNavigate()
  let { setToken, convertToken } = useContext(UserTokenContext)
  function login(formValue){
      setApiError(null)
      setIsLoading(true)
      axios.post("https://el-zafer-backend.onrender.com/admin/login-admin",formValue)
      .then((res)=>{
        let { data } = res;

        if(data.message === "Admin logged in successfully"){
          setIsLoading(false)
          setToken(data.token)
          window.localStorage.setItem("token",data.token)
          convertToken()
          navigate("/admindashboard")
        }else{
          setApiError("Incorrect email or password")
        }
        
      })
      .catch((err)=>{
        setApiError(err.response.data.message)
        setIsLoading(false)
      })
  }


  let myForm = useFormik({
    initialValues: {
        email: "",
        password: "",
    },
    validationSchema: Yup.object({
        email: Yup.string().email("invalid email").required("Required"),
        password: Yup.string().required("Required"),
    }),
    onSubmit: login
})
  return (
    <>
      <div className="my-52">
        <form onSubmit={myForm.handleSubmit} className="flex flex-col gap-5 justify-center  mx-auto w-[500px] text-left" action="">
        {apiError && <h1 className='text-red-600'>Incorrect email or password</h1>}
          <div>
          <label htmlFor="email" className="text-2xl mb-2 font-bold">
            Email :
          </label>
          <input
            type="email"
            name="email"
            className="border w-full p-2 rounded"
            placeholder="Email"
            onBlur={myForm.handleBlur} onChange={myForm.handleChange} value={myForm.values.email}
                />
                {myForm.errors.email && myForm.touched.email ? <div className="p-4 mb-4 text-sm text-red-50 rounded-lg bg-red-500 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span className="font-medium">{myForm.errors.email}</span>
                </div> : null}
          </div>
          
          <div>
          <label className="text-2xl mb-2 font-bold" htmlFor="password">
            Password :
          </label>
          <input
            name="password"
            type="password"
            className="border w-full p-2 rounded"
            placeholder="Password"
            onBlur={myForm.handleBlur} onChange={myForm.handleChange} value={myForm.values.password}
          />
          {myForm.errors.password && myForm.touched.password ? <div className="p-4 mb-4 text-sm text-red-50 rounded-lg bg-red-500 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span className="font-medium">{myForm.errors.password}</span>
                </div> : null}
              </div>
          <button type="submit" className="text-2xl font-bold main-gradient w-[50%] mx-auto text-white rounded-full p-5 mt-5">
          {isLoading ? (
              <i className="fa fa-spinner fa-spin mx-3 text-white text-2xl"></i>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </>
  );
}
