import React, { useEffect, useState } from "react";
import style from "./Tracking.module.css";
import axios from "axios";
export default function Tracking() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTracking, setSelectedTracking] = useState(null);
  const [selectedLclContainer, setSelectedLclContainer] = useState(false);
  const [selectedLclContainerStatus, setSelectedLclContainerStatus] = useState(false);
  const [selectedLclHbl, setSelectedLclHbl] = useState(false);
  const [selectedLclHblStatus, setSelectedLclHblStatus] = useState(false);
  const [selectedClearanceBlNo, setSelectedClearanceBlNo] = useState(false);
  const [selectedClearanceBlNoStatus, setSelectedClearanceBlNoStatus] = useState(false);
  const [selectedClearanceContainerNo, setSelectedClearanceContainerNo] = useState(false);
  const [selectedClearanceContainerStatus, setSelectedClearanceContainerStatus] = useState(false);
  const [formData,setFormData] = useState({});
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errorModalOpen, setErrorModalOpen] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const determineApiUrl = () => {
    switch (selectedTracking?.title) {
      case "Tracking full container":
        return "https://el-zafer-backend.onrender.com/track-shipment/track-full-container";
      case "LCL":
        if (selectedLclContainer)
          return "https://el-zafer-backend.onrender.com/track-shipment/track-lcl-container";
        if (selectedLclHbl)
          return "https://el-zafer-backend.onrender.com/track-shipment/track-lcl-housebillno";
        break;
      case "Clearance and Trucking":
        if (selectedClearanceBlNo)
          return "https://el-zafer-backend.onrender.com/track-shipment/track-clearance-billno";
        if (selectedClearanceContainerNo)
          return "https://el-zafer-backend.onrender.com/track-shipment/track-clearance-containerno";
        break;
      case "Personal Effects":
        return "https://el-zafer-backend.onrender.com/track-shipment/track-personal-effect";
      case "Air Frieght":
        return "https://el-zafer-backend.onrender.com/track-shipment/track-air-flight";
      default:
        return "";
    }
  };
  const handleSearch = async () => {
    const url = determineApiUrl();
    if (!url) return alert("Invalid form selection");

    try {
      setIsLoading(true);
      const response = await axios.get(url, { params: formData });
      setResult(response.data);
      setIsModalOpen(false);
      setSelectedLclContainer(false);
      setSelectedLclHbl(false);
      setSelectedClearanceBlNo(false);
      setSelectedClearanceContainerNo(false);
      console.log(response.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      setResult(null);
      setErrorModalOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  const renderInput = (name, label, placeholder) => (
    <>
      <label htmlFor={name} className="font-semibold">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="border w-full p-2 rounded"
        name={name}
        value={formData[name] || ""}
        onChange={handleInputChange}
      />
    </>
  );




  const trackingArray = [
    {
      img: "https://res.cloudinary.com/djvzbznry/image/upload/v1750715067/Screenshot_2025-06-24_004208_boltyg.png",
      title: "Tracking full container",
    },
    {
      img: "https://res.cloudinary.com/djvzbznry/image/upload/v1750715067/Screenshot_2025-06-24_004217_rrsdto.png",
      title: "LCL",
    },
    {
      img: "https://res.cloudinary.com/djvzbznry/image/upload/v1750715067/Screenshot_2025-06-24_004248_igh3j2.png",
      title: "Clearance and Trucking",
    },
    {
      img: "https://res.cloudinary.com/djvzbznry/image/upload/v1750715067/Screenshot_2025-06-24_004228_ookzvc.png",
      title: "Personal Effects",
    },
    {
      img: "https://res.cloudinary.com/djvzbznry/image/upload/v1750715067/Screenshot_2025-06-24_004237_m9rd6j.png",
      title: "Air Frieght",
    },
    {
      img: "https://res.cloudinary.com/djvzbznry/image/upload/v1750715067/Screenshot_2025-06-24_004258_n2ensp.png",
      title: "E-commerce Shipment",
    },
  ];
  function openModal(item) {
    setSelectedTracking(item);
    setIsModalOpen(true);
  }
  return (
    <>
      <h1 className="text-3xl font-bold text-left mb-8">Start Tracking</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trackingArray.map((item, index) => (
          <div
            onClick={() => openModal(item)}
            key={index}
            className="flex justify-between items-center p-8 rounded-xl bg-[#F2F2F2]"
          >
            <div>
              <img src={item.img} alt="" />
              <p>{item.title}</p>
            </div>
            <div>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-16 rounded-xl w-[90%] max-w-md relative shadow-lg">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-4 text-xl font-bold text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">
              Track {selectedTracking?.title}
            </h2>
            <form className="space-y-2 text-left">
              {selectedTracking?.title === "Tracking full container" && (
                <>
                  {renderInput("BillNumber", "B/L No:", "B/L No")}
                  {renderInput("ContainerNumber", "Container No:", "Container No")}
                  {renderInput("PortOfLoading", "Port Of Loading:", "Port Of Loading")}
                  {renderInput("PortOfDischarge", "Port Of Discharge:", "Port Of Discharge")}
                </>
              )}
              {selectedTracking?.title === "LCL" && (
                <>
                  <div
                    onClick={() => setSelectedLclHbl(true)}
                    className="flex justify-between items-center p-4 bg-[#0C71B9] text-white rounded-xl"
                  >
                    <p>By H/BL No</p>
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                  <div
                    onClick={() => setSelectedLclContainer(true)}
                    className="flex justify-between items-center p-4 bg-[#0C71B9] text-white rounded-xl"
                  >
                    <p>By Container No</p>
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                </>
              )}
              {selectedTracking?.title === "Clearance and Trucking" && (
                <>
                <div
                  onClick={() => setSelectedClearanceBlNo(true)}
                  className="flex justify-between items-center p-4 bg-[#0C71B9] text-white rounded-xl"
                >
                  <p>By H/BL No</p>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
                <div
                  onClick={() => setSelectedClearanceContainerNo(true)}
                  className="flex justify-between items-center p-4 bg-[#0C71B9] text-white rounded-xl"
                >
                  <p>By Container No</p>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </>
              )}
              {selectedTracking?.title === "Personal Effects" && (
                <>
                  {renderInput("HousBillNo", "H/BL No:", "H/BL No")}
                  {renderInput("NOOfPcs", "No of Pcs:", "No of Pcs")}
                  {renderInput("TotalWeight", "Total Weight:", "Total Weight")}
                  {renderInput("Destination", "Destination:", "Destination")}
                </>
              )}
              {selectedTracking?.title === "Air Frieght" && (
                <>
                  {renderInput("AWBNo", "AWB NO:", "AWB NO")}
                  {renderInput("Destination", "Destination:", "Destination")}
                  {renderInput("NOOfPcs", "No of Pcs:", "No of Pcs")}
                  {renderInput("TotalWeight", "Total Weight:", "Total Weight")}
                </>
              )}
              {selectedTracking?.title === "E-commerce Shipment" && (
                <>  
                  <div className="flex justify-center items-center">
                  
                  <img src="https://res.cloudinary.com/djvzbznry/image/upload/v1750729223/3-30330_coming-soon-logo-png_mse4fs.jpg" alt="" />
                  </div>
                </>
              )}
              {selectedTracking?.title !== "LCL" && selectedTracking?.title !== "Clearance and Trucking" &&  selectedTracking?.title !== "E-commerce Shipment" && (
                <div className="flex justify-center ">
                  <button
                    type="button"
                    onClick={handleSearch}
                    className="bg-blue-600  text-white px-10 py-2 mt-5 rounded hover:bg-blue-700"
                  >
                    {isLoading ? <i className='fa fa-spinner fa-spin mx-3 text-white text-2xl'></i> : "Submit"}
                  </button>
                </div>
              )}
            </form>
            {/* end of the form */}
          </div>
        </div>
      )}
      {selectedLclContainer && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-16 rounded-xl w-[90%] max-w-md relative shadow-lg">
              <button
                onClick={() => setSelectedLclContainer(false)}
                className="absolute top-2 right-4 text-xl font-bold text-gray-700"
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4">
                Track {selectedTracking?.title} by Container No
              </h2>
              <form className="space-y-2 text-left">
                {renderInput("BillNumber", "B/L No:", "B/L No")}
                {renderInput("ContainerNumber", "Container No:", "Container No")}
                {renderInput("PortOfDischarge", "Port Of Discharge:", "Port Of Discharge")}
                <div className="flex justify-center ">
                  <button
                    type="button"
                    onClick={()=>{handleSearch(); setSelectedLclContainerStatus(true)}}
                    className="bg-blue-600  text-white px-10 py-2 mt-5 rounded hover:bg-blue-700"
                  >
                    {isLoading ? <i className='fa fa-spinner fa-spin mx-3 text-white text-2xl'></i> : "Submit"}
                  </button>
                </div>
              </form>
              {/* end of the form */}
            </div>
          </div>
        </>
      )}
      {selectedLclHbl && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-16 rounded-xl w-[90%] max-w-md relative shadow-lg">
              <button
                onClick={() => setSelectedLclHbl(false)}
                className="absolute top-2 right-4 text-xl font-bold text-gray-700"
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4">
                Track {selectedTracking?.title} by H/BL No
              </h2>
              <form className="space-y-2 text-left">
                {renderInput("HousBillNo", "H/BL No:", "H/BL No")}
                {renderInput("NOOfPcs", "No of Pcs:", "No of Pcs")}
                {renderInput("TotalWeight", "Total Weight:", "Total Weight")}
                {renderInput("Destination", "Destination:", "Destination")}
                <div className="flex justify-center ">
                  <button
                    type="button"
                    onClick={()=>{handleSearch();setSelectedLclHblStatus(true)}}
                    className="bg-blue-600  text-white px-10 py-2 mt-5 rounded hover:bg-blue-700"
                  >
                    {isLoading ? <i className='fa fa-spinner fa-spin mx-3 text-white text-2xl'></i> : "Submit"}
                  </button>
                </div>
              </form>
              {/* end of the form */}
            </div>
          </div>
        </>
      )}
      {selectedClearanceContainerNo && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-16 rounded-xl w-[90%] max-w-md relative shadow-lg">
              <button
                onClick={() => setSelectedClearanceContainerNo(false)}
                className="absolute top-2 right-4 text-xl font-bold text-gray-700"
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4">
                Track {selectedTracking?.title} by Container No
              </h2>
              <form className="space-y-2 text-left">
                {renderInput("ContainerNumber", "Container No:", "Container No")}
                {renderInput("PortOfDischarge", "Port Of Discharge:", "Port Of Discharge")}
                {renderInput("VesselEnName", "Vessel Name:", "Vessel Name")}
                <div className="flex justify-center ">
                  <button
                    type="button"
                    onClick={()=>{handleSearch(); setSelectedClearanceContainerStatus(true)}}
                    className="bg-blue-600  text-white px-10 py-2 mt-5 rounded hover:bg-blue-700"
                  >
                    {isLoading ? <i className='fa fa-spinner fa-spin mx-3 text-white text-2xl'></i> : "Submit"}
                  </button>
                </div>
              </form>
              {/* end of the form */}
            </div>
          </div>
        </>
      )}
      {selectedClearanceBlNo && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-16 rounded-xl w-[90%] max-w-md relative shadow-lg">
              <button
                onClick={() => setSelectedClearanceBlNo(false)}
                className="absolute top-2 right-4 text-xl font-bold text-gray-700"
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4">
                Track {selectedTracking?.title} by H/BL No
              </h2>
              <form className="space-y-2 text-left">
                {renderInput("BillNo", "H/BL No:", "H/BL No")}
                {renderInput("PortOfDischarge", "Port Of Discharge:", "Port Of Discharge")}
                {renderInput("VesselEnName", "Vessel Name:", "Vessel Name")}
                <div className="flex justify-center ">
                  <button
                    type="button"
                    onClick={()=>{handleSearch(); setSelectedClearanceBlNoStatus(true)}}
                    className="bg-blue-600  text-white px-10 py-2 mt-5 rounded hover:bg-blue-700"
                  >
                   {isLoading ? <i className='fa fa-spinner fa-spin mx-3 text-white text-2xl'></i> : "Submit"}
                  </button>
                </div>
              </form>
              {/* end of the form */}
            </div>
          </div>
        </>
      )}


      {/* error message */}
      {error && errorModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-8 md:p-12 rounded-xl w-[90%] max-w-md relative shadow-lg">
            <button
              onClick={() => setErrorModalOpen(false)}
              className="absolute top-2 right-4 text-xl font-bold text-gray-700"
            >
              &times;
            </button>
            <p className="text-center text-red-600 mt-4">{error}</p>
          </div>
        </div>
      )}
      {/* success message */}
      {result && selectedTracking?.title === "Tracking full container" && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
    <div className="bg-white p-8 md:p-12 rounded-xl w-[90%] max-w-md relative shadow-lg">
      {/* Close button */}
      <button
        onClick={() => setResult(null)}
        className="absolute top-2 right-4 text-xl font-bold text-gray-700"
      >
        &times;
      </button>


      {/* Status Progress */}
      <div className="bg-gray-100 p-6 rounded-xl">
        <div className="flex justify-between items-center relative">
          {/* Left Step - Arrival */}
          <div className="flex flex-col items-center">
            <div className={` text-white rounded-full p-2 z-10 ${result.result[0].ArrivalDate ? "bg-blue-600" : "bg-gray-500"}`}>
              {result.result[0].ArrivalDate ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-x"></i>}
            </div>
            <p className="mt-2 text-sm font-medium">Arrived</p>
            <p className="text-xs text-gray-500">
              {result.result[0].ArrivalDate || "not arrived yet"}
            </p>
          </div>

          {/* Dotted line */}
          <div className="absolute top-4 left-[18%] right-[18%] border-t-2 border-dotted border-blue-400 z-0"></div>

          {/* Right Step - Delivery */}
          <div className="flex flex-col items-center">
            <div className={` text-white rounded-full p-2 z-10 ${result.result[0].DepartureDate ? "bg-blue-600" : "bg-gray-500"}`}>
              {result.result[0].DepartureDate ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-x"></i>}
            </div>
            <p className="mt-2 text-sm font-medium">Delivered</p>
            <p className="text-xs text-gray-500">
              {result.result[0].DepartureDate || "not delivered yet"}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
      )}
      {result && selectedTracking?.title === "Personal Effects" && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
    <div className="bg-white p-8 md:p-12 rounded-xl w-[90%] max-w-md relative shadow-lg">
      {/* Close button */}
      <button
        onClick={() => setResult(null)}
        className="absolute top-2 right-4 text-xl font-bold text-gray-700"
      >
        &times;
      </button>


      {/* Status Progress */}
      <div className="bg-gray-100 p-6 rounded-xl">
        <div className="flex justify-between items-center relative">
          {/* Left Step - Arrival */}
          <div className="flex flex-col items-center">
            <div className={` text-white rounded-full p-2 z-10 ${result.result[0].Arrived ? "bg-blue-600" : "bg-gray-500"}`}>
              {result.result[0].Arrived ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-x"></i>}
            </div>
            <p className="mt-2 text-sm font-medium">Arrived</p>
            <p className="text-xs text-gray-500">
              {result.result[0].Arrived || "—"}
            </p>
          </div>

          {/* Dotted line */}
          <div className="absolute top-4 left-[20%] right-[15%] border-t-2 border-dotted border-blue-400 z-0"></div>

          {/* Right Step - Delivery */}
          <div className="flex flex-col items-center">
            <div className={` text-white rounded-full p-2 z-10 ${result.result[0].Delivered ? "bg-blue-600" : "bg-gray-500"}`}>
              {result.result[0].Delivered ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-x"></i>}
            </div>
            <p className="mt-2 text-sm font-medium">Delivered</p>
            <p className="text-xs text-gray-500">
              {result.result[0].Delivered || "not delivered yet"}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
      )}
      {result && selectedTracking?.title === "Air Frieght" && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
    <div className="bg-white p-8 md:p-12 rounded-xl w-[90%] max-w-md relative shadow-lg">
      {/* Close button */}
      <button
        onClick={() => setResult(null)}
        className="absolute top-2 right-4 text-xl font-bold text-gray-700"
      >
        &times;
      </button>


      {/* Status Progress */}
      <div className="bg-gray-100 p-6 rounded-xl">
        <div className="flex justify-between items-center relative">
          {/* Left Step - Arrival */}
          <div className="flex flex-col items-center">
            <div className={` text-white rounded-full p-2 z-10 ${result.result[0].ArrivalDate ? "bg-blue-600" : "bg-gray-500"}`}>
              {result.result[0].ArrivalDate ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-x"></i>}
            </div>
            <p className="mt-2 text-sm font-medium">Arrived</p>
            <p className="text-xs text-gray-500">
              {result.result[0].ArrivalDate || "not arrived yet"}
            </p>
          </div>

          {/* Dotted line */}
          <div className="absolute top-4 left-[20%] right-[15%] border-t-2 border-dotted border-blue-400 z-0"></div>

          {/* Right Step - Delivery */}
          <div className="flex flex-col items-center">
            <div className={` text-white rounded-full p-2 z-10 ${result.result[0].cleared ? "bg-blue-600" : "bg-gray-500"}`}>
              {result.result[0].cleared ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-x"></i>}
            </div>
            <p className="mt-2 text-sm font-medium">Cleared</p>
            <p className="text-xs text-gray-500">
              {result.result[0].cleared || "not cleared yet"}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
      )}
      {result && selectedTracking?.title === "LCL" && selectedLclContainerStatus && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
    <div className="bg-white p-8 md:p-16 rounded-xl w-[90%] max-w-md relative shadow-lg">
      {/* Close button */}
      <button
        onClick={() => {setResult(null); setSelectedLclContainerStatus(false)}}
        className="absolute top-2 right-4 text-xl font-bold text-gray-700"
      >
        &times;
      </button>


      {/* Status Progress */}
      <div className="bg-gray-100 p-6 rounded-xl">
        <div className="flex flex-col relative">
          {/* Left Step - Arrival */}
          <div className="flex justify-center items-center mb-3">
            
            <p className=" text-xl font-medium">Bill No:</p>
            <p className="text-xl text-gray-500 ms-2">
              {result.result[0].HousBillNo || "not available"}
            </p>
          </div>
          <div className="flex justify-start items-center">
            
            <p className=" text-sm font-medium">No of Pcs:</p>
            <p className="text-xs text-gray-500 ms-2">
              {result.result[0].NOOfPcs || "not available"}
            </p>
          </div>
          {/* Right Step - Delivery */}
          <div className="flex justify-start items-center">
            
            <p className=" text-sm font-medium">DO Release:</p>
            <p className="text-xs text-gray-500 ms-2">
              {result.result[0].DORelease || "not available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
      )}
      {result && selectedTracking?.title === "LCL" && selectedLclHblStatus && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
    <div className="bg-white p-8 md:p-16 rounded-xl w-[90%] max-w-md relative shadow-lg">
      {/* Close button */}
      <button
        onClick={() => {setResult(null); setSelectedLclHblStatus(false)}}
        className="absolute top-2 right-4 text-xl font-bold text-gray-700"
      >
        &times;
      </button>


      {/* Status Progress */}
      <div className="bg-gray-100 p-6 rounded-xl">
        <div className="flex justify-between items-center relative">
          {/* Left Step - Arrival */}
          <div className="flex flex-col items-center ">
            <div className={` text-white rounded-full p-2 z-10 ${result.result[0].Arrived ? "bg-blue-600" : "bg-gray-500"}`}>
              {result.result[0].Arrived ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-x"></i>}
            </div>
            <p className=" text-sm font-medium">Arrived:</p>
            <p className="text-xs text-gray-500 ms-2">
              {result.result[0].Arrived || "not arrived yet"}
            </p>
          </div>
          <div className="absolute top-4 left-[20%] right-[20%] border-t-2 border-dotted border-blue-400 z-0"></div>
          {/* Right Step - Delivery */}
          <div className="flex flex-col items-center">
          <div className={` text-white rounded-full p-2 z-10 ${result.result[0].Stored ? "bg-blue-600" : "bg-gray-500"}`}>
              {result.result[0].Stored ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-x"></i>}
            </div>
            <p className=" text-sm font-medium">Stored:</p>
            <p className="text-xs text-gray-500 ms-2">
              {result.result[0].Stored || "not stored yet"}
            </p>
          </div>
        </div>
        <div className="flex flex-col relative">
          {/* Left Step - Arrival */}
          
          <div className="flex justify-start items-center mt-4">
            
            <p className=" text-sm font-medium">Clearance:</p>
            <p className="text-xs text-gray-500 ms-2">
              {result.result[0].Clearance || "not available"}
            </p>
          </div>
          {/* Right Step - Delivery */}
          <div className="flex justify-start items-center">
            
            <p className=" text-sm font-medium">DO Release:</p>
            <p className="text-xs text-gray-500 ms-2">
              {result.result[0].DORelease || "not available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
      )}
      {result && selectedTracking?.title === "Clearance and Trucking" && selectedClearanceContainerStatus && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
    <div className="bg-white p-8 md:p-16 rounded-xl w-[90%] max-w-xl relative shadow-lg">
      {/* Close button */}
      <button
        onClick={() => {setResult(null); setSelectedClearanceContainerStatus(false)}}
        className="absolute top-2 right-4 text-xl font-bold text-gray-700"
      >
        &times;
      </button>


      {/* Status Progress */}
      <div className="bg-gray-100 p-6 rounded-xl">
        <div className="flex justify-between items-center relative">
          {/* Left Step - Arrival */}
          <div className="flex flex-col items-center ">
            <div className={` text-white rounded-full p-2 z-10 ${result.result[0].ContainerUnderClearance ? "bg-blue-600" : "bg-gray-500"}`}>
              {result.result[0].ContainerUnderClearance ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-x"></i>}
            </div>
            <p className=" text-xs font-medium">Under Clearance:</p>
            <p className="text-xs text-gray-500 ">
              {result.result[0].ContainerUnderClearance || "N/A"}
            </p>
          </div>
          <div className="flex flex-col items-center ">
            <div className={` text-white rounded-full p-2 z-10 ${result.result[0].AtThePort ? "bg-blue-600" : "bg-gray-500"}`}>
              {result.result[0].AtThePort ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-x"></i>}
            </div>
            <p className=" text-xs font-medium">At The Port:</p>
            <p className="text-xs text-gray-500 ">
              {result.result[0].AtThePort || "N/A"}
            </p>
          </div>
          {/* dooted line */}
          <div className="absolute top-4 left-[16%] right-[16%] border-t-2 border-dotted border-blue-400 z-0"></div>
          {/* Right Step - Delivery */}
          <div className="flex flex-col items-center">
          <div className={` text-white rounded-full p-2 z-10 ${result.result[0].UnderTracking ? "bg-blue-600" : "bg-gray-500"}`}>
              {result.result[0].UnderTracking ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-x"></i>}
            </div>
            <p className=" text-xs font-medium">Under Tracking:</p>
            <p className="text-xs text-gray-500 ">
              {result.result[0].UnderTracking || "N/A"}
            </p>
          </div>
          <div className="flex flex-col items-center">
          <div className={` text-white rounded-full p-2 z-10 ${result.result[0].ClearanceDone ? "bg-blue-600" : "bg-gray-500"}`}>
              {result.result[0].ClearanceDone ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-x"></i>}
            </div>
            <p className=" text-xs font-medium">Clearance Done:</p>
            <p className="text-xs text-gray-500 ">
              {result.result[0].ClearanceDone || "N/A"}
            </p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
      )}
      {result && selectedTracking?.title === "Clearance and Trucking" && selectedClearanceBlNoStatus && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
    <div className="bg-white p-8 md:p-16 rounded-xl w-[90%] max-w-xl relative shadow-lg">
      {/* Close button */}
      <button
        onClick={() => {setResult(null); setSelectedClearanceBlNoStatus(false)}}
        className="absolute top-2 right-4 text-xl font-bold text-gray-700"
      >
        &times;
      </button>


      {/* Status Progress */}
      <div className="bg-gray-100 p-6 rounded-xl">
        <div className="flex justify-between items-center relative">
          {/* Left Step - Arrival */}
          <div className="flex flex-col items-center ">
            <div className={` text-white rounded-full p-2 z-10 ${result.result[0].ContainerUnderClearance ? "bg-blue-600" : "bg-gray-500"}`}>
              {result.result[0].ContainerUnderClearance ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-x"></i>}
            </div>
            <p className=" text-xs font-medium">Under Clearance:</p>
            <p className="text-xs text-gray-500 ">
              {result.result[0].ContainerUnderClearance || "N/A"}
            </p>
          </div>
          <div className="flex flex-col items-center ">
            <div className={` text-white rounded-full p-2 z-10 ${result.result[0].AtThePort ? "bg-blue-600" : "bg-gray-500"}`}>
              {result.result[0].AtThePort ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-x"></i>}
            </div>
            <p className=" text-xs font-medium">At The Port:</p>
            <p className="text-xs text-gray-500 ">
              {result.result[0].AtThePort || "N/A"}
            </p>
          </div>
          {/* dooted line */}
          <div className="absolute top-4 left-[16%] right-[16%] border-t-2 border-dotted border-blue-400 z-0"></div>
          {/* Right Step - Delivery */}
          <div className="flex flex-col items-center">
          <div className={` text-white rounded-full p-2 z-10 ${result.result[0].UnderTracking ? "bg-blue-600" : "bg-gray-500"}`}>
              {result.result[0].UnderTracking ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-x"></i>}
            </div>
            <p className=" text-xs font-medium">Under Tracking:</p>
            <p className="text-xs text-gray-500 ">
              {result.result[0].UnderTracking || "N/A"}
            </p>
          </div>
          <div className="flex flex-col items-center">
          <div className={` text-white rounded-full p-2 z-10 ${result.result[0].ClearanceDone ? "bg-blue-600" : "bg-gray-500"}`}>
              {result.result[0].ClearanceDone ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-x"></i>}
            </div>
            <p className=" text-xs font-medium">Clearance Done:</p>
            <p className="text-xs text-gray-500 ">
              {result.result[0].ClearanceDone || "N/A"}
            </p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
      )}


    </>
  );
}
