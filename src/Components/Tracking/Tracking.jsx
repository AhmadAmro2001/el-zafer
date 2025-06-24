import React, { useEffect, useState } from "react";
import style from "./Tracking.module.css";
export default function Tracking() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTracking, setSelectedTracking] = useState(null);
  const [selectedLclContainer, setSelectedLclContainer] = useState(false);
  const [selectedLclHbl, setSelectedLclHbl] = useState(false);
  const [selectedClearanceBlNo, setSelectedClearanceBlNo] = useState(false);
  const [selectedClearanceContainerNo, setSelectedClearanceContainerNo] = useState(false);
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
                  <label htmlFor="blNo" className="font-semibold">
                    B/L No:
                  </label>
                  <input
                    type="text"
                    placeholder="B/L No"
                    className="border w-full p-2 rounded"
                    name="blNo"
                  />
                  <label htmlFor="containerNo" className="font-semibold">
                    Container No:
                  </label>
                  <input
                    type="text"
                    placeholder="Container No"
                    className="border w-full p-2 rounded"
                    name="containerNo"
                  />
                  <label htmlFor="portOfLoading" className="font-semibold">
                    Port Of Loading:
                  </label>
                  <input
                    type="text"
                    placeholder="Port Of Loading"
                    className="border w-full p-2 rounded"
                    name="portOfLoading"
                  />
                  <label htmlFor="portOfDischarge" className="font-semibold">
                    Port Of Discharge:
                  </label>
                  <input
                    type="text"
                    placeholder="Port Of Discharge"
                    className="border w-full p-2 rounded"
                    name="portOfDischarge"
                  />
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
                  <label htmlFor="destination" className="font-semibold">
                    Destination:
                  </label>
                  <input
                    type="text"
                    placeholder="Destination"
                    className="border w-full p-2 rounded"
                    name="destination"
                  />
                  <label htmlFor="hblNo" className="font-semibold">
                  H/BL No:
                  </label>
                  <input
                    type="text"
                    placeholder="H/BL No"
                    className="border w-full p-2 rounded"
                    name="hblNo"
                  />
                  <label htmlFor="noOfPcs" className="font-semibold">
                  No of Pcs:
                  </label>
                  <input
                    type="text"
                    placeholder="No of Pcs"
                    className="border w-full p-2 rounded"
                    name="noOfPcs"
                  />
                  <label htmlFor="totalWeight" className="font-semibold">
                  Total Weight:
                  </label>
                  <input
                    type="text"
                    placeholder="Total Weight"
                    className="border w-full p-2 rounded"
                    name="totalWeight"
                  />
                 
                </>
              )}
              {selectedTracking?.title === "Air Frieght" && (
                <>
                  <label htmlFor="awbNo" className="font-semibold">
                  AWB NO:
                  </label>
                  <input
                    type="text"
                    placeholder="AWB NO"
                    className="border w-full p-2 rounded"
                    name="awbNo"
                  />
                  <label htmlFor="destination" className="font-semibold">
                  Destination:
                  </label>
                  <input
                    type="text"
                    placeholder="Destination"
                    className="border w-full p-2 rounded"
                    name="destination"
                  />
                  <label htmlFor="noOfPcs" className="font-semibold">
                  No of Pcs:
                  </label>
                  <input
                    type="text"
                    placeholder="No of Pcs"
                    className="border w-full p-2 rounded"
                    name="noOfPcs"
                  />
                  <label htmlFor="totalWeight" className="font-semibold">
                  Total Weight:
                  </label>
                  <input
                    type="text"
                    placeholder="Total Weight"
                    className="border w-full p-2 rounded"
                    name="totalWeight"
                  />
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
                    type="submit"
                    className="bg-blue-600  text-white px-10 py-2 mt-5 rounded hover:bg-blue-700"
                  >
                    Submit
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
                <label htmlFor="blNo" className="font-semibold">
                  B/L No:
                </label>
                <input
                  type="text"
                  placeholder="B/L No"
                  className="border w-full p-2 rounded"
                  name="blNo"
                />
                <label htmlFor="containerNo" className="font-semibold">
                  Container No:
                </label>
                <input
                  type="text"
                  placeholder="Container No"
                  className="border w-full p-2 rounded"
                  name="containerNo"
                />
                <label htmlFor="portOfDischarge" className="font-semibold">
                  Port Of Discharge:
                </label>
                <input
                  type="text"
                  placeholder="Port Of Discharge"
                  className="border w-full p-2 rounded"
                  name="portOfDischarge"
                />
                <div className="flex justify-center ">
                  <button
                    type="submit"
                    className="bg-blue-600  text-white px-10 py-2 mt-5 rounded hover:bg-blue-700"
                  >
                    Submit
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
                <label htmlFor="hblNo" className="font-semibold">
                H/BL No:
                </label>
                <input
                  type="text"
                  placeholder="H/BL No"
                  className="border w-full p-2 rounded"
                  name="hblNo"
                />
                <label htmlFor="noOfPcs" className="font-semibold">
                No of Pcs:
                </label>
                <input
                  type="text"
                  placeholder="No of Pcs"
                  className="border w-full p-2 rounded"
                  name="noOfPcs"
                />
                <label htmlFor="totalWeight" className="font-semibold">
                Total Weight:
                </label>
                <input
                  type="text"
                  placeholder="Total Weight"
                  className="border w-full p-2 rounded"
                  name="totalWeight"
                />
                <label htmlFor="destination" className="font-semibold">
                Destination:
                </label>
                <input
                  type="text"
                  placeholder="Destination"
                  className="border w-full p-2 rounded"
                  name="destination"
                />
                <div className="flex justify-center ">
                  <button
                    type="submit"
                    className="bg-blue-600  text-white px-10 py-2 mt-5 rounded hover:bg-blue-700"
                  >
                    Submit
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
                <label htmlFor="containerNo" className="font-semibold">
                  Container No:
                </label>
                <input
                  type="text"
                  placeholder="Container No"
                  className="border w-full p-2 rounded"
                  name="containerNo"
                />
                <label htmlFor="vesselName" className="font-semibold">
                  Vessel Name:
                </label>
                <input
                  type="text"
                  placeholder="Vessel Name"
                  className="border w-full p-2 rounded"
                  name="vesselName"
                />
                <label htmlFor="portOfDischarge" className="font-semibold">
                  Port Of Discharge:
                </label>
                <input
                  type="text"
                  placeholder="Port Of Discharge"
                  className="border w-full p-2 rounded"
                  name="portOfDischarge"
                />
                <div className="flex justify-center ">
                  <button
                    type="submit"
                    className="bg-blue-600  text-white px-10 py-2 mt-5 rounded hover:bg-blue-700"
                  >
                    Submit
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
                <label htmlFor="blNo" className="font-semibold">
                BL No:
                </label>
                <input
                  type="text"
                  placeholder="BL No"
                  className="border w-full p-2 rounded"
                  name="blNo"
                />
                <label htmlFor="vesselName" className="font-semibold">
                Vessel Name:
                </label>
                <input
                  type="text"
                  placeholder="Vessel Name"
                  className="border w-full p-2 rounded"
                  name="vesselName"
                />
                <label htmlFor="portOfDischarge" className="font-semibold">
                Port Of Discharge:
                </label>
                <input
                  type="text"
                  placeholder="Port Of Discharge"
                  className="border w-full p-2 rounded"
                  name="portOfDischarge"
                />
                <div className="flex justify-center ">
                  <button
                    type="submit"
                    className="bg-blue-600  text-white px-10 py-2 mt-5 rounded hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
              {/* end of the form */}
            </div>
          </div>
        </>
      )}
    </>
  );
}
