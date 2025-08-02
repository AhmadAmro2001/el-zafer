import React, { useEffect, useState } from "react";
import style from "./AdminSignUp.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function AdminSignUp() {
  let [isLoading, setIsLoading] = useState(false);
  let [apiError, setApiError] = useState(null);
  let navigate = useNavigate();

  function register(formValue) {
    setApiError(null);
    setIsLoading(true);
    axios
      .post("https://el-zafer-backend.onrender.com/admin/add-admin", formValue)
      .then((res) => {
        let { data } = res;
        if (data.message == "Admin created successfully") {
          navigate("/adminLogin");
        } else {
          setApiError("enter valid credentials")
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setApiError(err.response.data.message);
        setIsLoading(false);
      });
  }

  let myForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("invalid email").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: register,
  });
  return (
    <>
      <div className="my-52">
        <form
          onSubmit={myForm.handleSubmit}
          className="flex flex-col gap-5 justify-center  mx-auto w-[500px] text-left"
          action=""
        >
          {apiError && <h1 className="text-red-600">{apiError}</h1>}
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
            <label className="text-2xl mb-2 font-bold" htmlFor="name">
              Name :
            </label>
            <input
              name="name"
              type="text"
              className="border w-full p-2 rounded"
              placeholder="Name"
              onBlur={myForm.handleBlur} onChange={myForm.handleChange} value={myForm.values.name}
            />
            {myForm.errors.name && myForm.touched.name ? <div className="p-4 mb-4 text-sm text-red-50 rounded-lg bg-red-500 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span className="font-medium">{myForm.errors.name}</span>
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
          <button
            type="submit"
            className="text-2xl font-bold main-gradient w-[50%] mx-auto text-white rounded-full p-5 mt-5"
          >
            {isLoading ? (
              <i className="fa fa-spinner fa-spin mx-3 text-white text-2xl"></i>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </div>
    </>
  );
}
