import React, { useEffect, useRef, useState } from "react";
import style from "./Tracking.module.css";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
export default function Tracking() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTracking, setSelectedTracking] = useState(null);
  const [selectedLclContainer, setSelectedLclContainer] = useState(false);
  const [selectedLclContainerStatus, setSelectedLclContainerStatus] =
    useState(false);
  const [selectedLclHbl, setSelectedLclHbl] = useState(false);
  const [selectedLclHblStatus, setSelectedLclHblStatus] = useState(false);
  const [selectedClearanceBlNo, setSelectedClearanceBlNo] = useState(false);
  const [selectedClearanceBlNoStatus, setSelectedClearanceBlNoStatus] =
    useState(false);
  const [selectedClearanceContainerNo, setSelectedClearanceContainerNo] =
    useState(false);
  const [
    selectedClearanceContainerStatus,
    setSelectedClearanceContainerStatus,
  ] = useState(false);
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const printRef = useRef(null);
  const [isPdfLoading, setIsPdfLoading] = useState(false);
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

  async function downloadPdf({ endpoint, query, fileName }) {
    setIsPdfLoading(true);
    const qs = new URLSearchParams(query).toString();
    const url = `https://el-zafer-backend.onrender.com${endpoint}?${qs}`;

    const res = await fetch(url);

    if (!res.ok) {
      let msg = "Failed to download PDF";
      try {
        msg = (await res.json())?.message || msg;
      } catch {}
      throw new Error(msg);
    }

    const blob = await res.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = (fileName || "report.pdf")
      .replaceAll("/", "-")
      .replaceAll(" ", "_");
    document.body.appendChild(a);
    a.click();
    a.remove();

    window.URL.revokeObjectURL(blobUrl);

    setIsPdfLoading(false);
  }

  const PDF_CONFIG = {
    fullContainer: {
      endpoint: "/tracking/full-container/pdf",
      getQuery: (v) => ({
        BillNumber: v.BillNumber,
        ContainerNumber: v.ContainerNumber,
        PortOfLoading: v.PortOfLoading,
        PortOfDischarge: v.PortOfDischarge,
      }),
      fileName: (v) => `FullContainer_${v.BillNumber}_${v.ContainerNumber}.pdf`,
    },

    // add the other 6 types same idea...
  };

  // note it will be deleted
  // const handleDownloadPdf = async (type) => {
  //   const element = printRef.current;
  //   if (!element) return;

  //   const hidden = element.querySelectorAll(".no-pdf");
  //   hidden.forEach((el) => (el.style.display = "none"));

  //   const tableEl = element.querySelector(".table-scroll");
  //   const oldMaxH = tableEl?.style.maxHeight;
  //   const oldOverflow = tableEl?.style.overflowY;

  //   if (tableEl) {
  //     tableEl.style.maxHeight = "none";
  //     tableEl.style.overflowY = "visible";
  //   }

  //   // Higher quality + handle external images
  //   const canvas = await html2canvas(element, {
  //     scale: 2,
  //     useCORS: true,
  //     backgroundColor: "#ffffff",
  //   });

  //   hidden.forEach((el) => (el.style.display = ""));
  //   if (tableEl) {
  //     tableEl.style.maxHeight = oldMaxH || "";
  //     tableEl.style.overflowY = oldOverflow || "";
  //   }
  //   hidden.forEach((el) => (el.style.display = ""));

  //   const imgData = canvas.toDataURL("image/png");

  //   const pdf = new jsPDF("p", "mm", "a4"); // use mm so sizing is easier
  //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   const pdfHeight = pdf.internal.pageSize.getHeight();

  //   // Keep aspect ratio
  //   const imgWidth = pdfWidth;
  //   const imgHeight = (canvas.height * imgWidth) / canvas.width;

  //   // If content fits in one page
  //   if (imgHeight <= pdfHeight) {
  //     pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
  //   } else {
  //     // Multi-page (if your report becomes long later)
  //     let heightLeft = imgHeight;
  //     let position = 0;

  //     pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  //     heightLeft -= pdfHeight;

  //     while (heightLeft > 0) {
  //       position -= pdfHeight;
  //       pdf.addPage();
  //       pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  //       heightLeft -= pdfHeight;
  //     }
  //   }
  //   if (type === "trackingfullcontainer") {
  //     pdf.save(`H/BL:${formData.BillNumber.replace(/[\/\s-]/g, "")}.pdf`);
  //   }
  //   if (type === "trackingPersonalEffect") {
  //     pdf.save(`H/BL:${formData.HousBillNo.replace(/[\/\s-]/g, "")}.pdf`);
  //   }
  //   if (type === "trackingAirFrieght") {
  //     pdf.save(`AWB:${formData.AWBNo.replace(/[\/\s-]/g, "")}.pdf`);
  //   }
  //   if (type === "trackingLclContainer") {
  //     pdf.save(
  //       `Container:${formData.ContainerNumber.replace(/[\/\s-]/g, "")}.pdf`,
  //     );
  //   }
  //   if (type === "trackingLclHbl") {
  //     pdf.save(`H/BL:${formData.HousBillNo.replace(/[\/\s-]/g, "")}.pdf`);
  //   }
  //   if (type === "trackingClearanceBlNo") {
  //     pdf.save(
  //       `${result.result.VesselEnName ? "H/BL" : "AWB"}:${formData.BillNo.replace(/[\/\s-]/g, "")}.pdf`,
  //     );
  //   }
  //   if (type === "trackingClearanceContainerNo") {
  //     pdf.save(
  //       `Container:${formData.ContainerNumber.replace(/[\/\s-]/g, "")}.pdf`,
  //     );
  //   }
  // };

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
      <h1 className="text-3xl font-bold text-left mb-8 text-red-700">
        Start Tracking
      </h1>
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
              {selectedTracking?.title}
            </h2>
            <form className="space-y-2 text-left">
              {selectedTracking?.title === "Tracking full container" && (
                <>
                  {renderInput("BillNumber", "B/L No:", "B/L No")}
                  {renderInput(
                    "ContainerNumber",
                    "Container No:",
                    "Container No",
                  )}
                  {renderInput(
                    "PortOfLoading",
                    "Port Of Loading:",
                    "Port Of Loading",
                  )}
                  {renderInput(
                    "PortOfDischarge",
                    "Port Of Discharge:",
                    "Port Of Discharge",
                  )}
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
                    <img
                      src="https://res.cloudinary.com/djvzbznry/image/upload/v1750729223/3-30330_coming-soon-logo-png_mse4fs.jpg"
                      alt=""
                    />
                  </div>
                </>
              )}
              {selectedTracking?.title !== "LCL" &&
                selectedTracking?.title !== "Clearance and Trucking" &&
                selectedTracking?.title !== "E-commerce Shipment" && (
                  <div className="flex justify-center ">
                    <button
                      type="button"
                      onClick={handleSearch}
                      className="bg-blue-600  text-white px-10 py-2 mt-5 rounded hover:bg-blue-700"
                    >
                      {isLoading ? (
                        <i className="fa fa-spinner fa-spin mx-3 text-white text-2xl"></i>
                      ) : (
                        "Submit"
                      )}
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
                {renderInput(
                  "ContainerNumber",
                  "Container No:",
                  "Container No",
                )}
                {renderInput(
                  "PortOfDischarge",
                  "Port Of Discharge:",
                  "Port Of Discharge",
                )}
                <div className="flex justify-center ">
                  <button
                    type="button"
                    onClick={() => {
                      handleSearch();
                      setSelectedLclContainerStatus(true);
                    }}
                    className="bg-blue-600  text-white px-10 py-2 mt-5 rounded hover:bg-blue-700"
                  >
                    {isLoading ? (
                      <i className="fa fa-spinner fa-spin mx-3 text-white text-2xl"></i>
                    ) : (
                      "Submit"
                    )}
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
                    onClick={() => {
                      handleSearch();
                      setSelectedLclHblStatus(true);
                    }}
                    className="bg-blue-600  text-white px-10 py-2 mt-5 rounded hover:bg-blue-700"
                  >
                    {isLoading ? (
                      <i className="fa fa-spinner fa-spin mx-3 text-white text-2xl"></i>
                    ) : (
                      "Submit"
                    )}
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
                {renderInput(
                  "ContainerNumber",
                  "Container No:",
                  "Container No",
                )}
                {renderInput(
                  "PortOfDischarge",
                  "Port Of Discharge:",
                  "Port Of Discharge",
                )}
                {renderInput("VesselEnName", "Vessel Name:", "Vessel Name")}
                <div className="flex justify-center ">
                  <button
                    type="button"
                    onClick={() => {
                      handleSearch();
                      setSelectedClearanceContainerStatus(true);
                    }}
                    className="bg-blue-600  text-white px-10 py-2 mt-5 rounded hover:bg-blue-700"
                  >
                    {isLoading ? (
                      <i className="fa fa-spinner fa-spin mx-3 text-white text-2xl"></i>
                    ) : (
                      "Submit"
                    )}
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
                {renderInput(
                  "PortOfDischarge",
                  "Port Of Discharge:",
                  "Port Of Discharge",
                )}
                {renderInput("VesselEnName", "Vessel Name:", "Vessel Name")}
                <div className="flex justify-center ">
                  <button
                    type="button"
                    onClick={() => {
                      handleSearch();
                      setSelectedClearanceBlNoStatus(true);
                    }}
                    className="bg-blue-600  text-white px-10 py-2 mt-5 rounded hover:bg-blue-700"
                  >
                    {isLoading ? (
                      <i className="fa fa-spinner fa-spin mx-3 text-white text-2xl"></i>
                    ) : (
                      "Submit"
                    )}
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
      {result &&
        selectedTracking?.title === "Tracking full container" &&
        (result?.exportImport === "export" ? (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div
              ref={printRef}
              className="bg-white p-8 md:p-12 rounded-xl w-[90%] max-w-md relative shadow-lg"
            >
              <div className="flex  justify-between mb-5">
                <div>
                  <h1 className="text-black font-bold text-left mb-2">
                    Status Report :
                  </h1>
                  <h1 className="text-black font-bold text-left">
                    H/BL Number :
                  </h1>
                  <h1 className="text-black  text-left">
                    {formData.BillNumber.replace(/[\/\s-]/g, "")}
                  </h1>
                </div>
                <div className="w-48 ">
                  <img
                    className="w-full "
                    src="https://res.cloudinary.com/djvzbznry/image/upload/v1767658761/Al-zafer_Full_Logo_kz2l7t.png"
                    alt="Al-zafer Logo"
                  />
                </div>
              </div>
              {/* Close button */}
              <button
                onClick={() => setResult(null)}
                className="absolute top-2 right-4 text-xl font-bold text-gray-700 no-pdf"
              >
                &times;
              </button>

              {/* Status Progress */}
              <div className="bg-gray-100 p-6 rounded-xl">
                <div className="flex justify-between items-center relative">
                  {/* Left Step - Arrival */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`no-pdf text-white rounded-full p-2 z-10 ${
                        result.result[0].DepartureDate
                          ? "bg-blue-600"
                          : "bg-gray-500"
                      }`}
                    >
                      {result.result[0].DepartureDate ? (
                        <i className="fa-solid fa-check"></i>
                      ) : (
                        <i className="fa-solid fa-x"></i>
                      )}
                    </div>
                    <p className="mt-2 text-sm font-medium">Departure Date:</p>
                    <p className="text-xs text-gray-500">
                      {result.result[0].DepartureDate || "not departed yet"}
                    </p>
                  </div>

                  {/* Dotted line */}
                  <div className="absolute no-pdf top-4 left-[18%] right-[18%] border-t-2 border-dotted border-blue-400 z-0"></div>

                  {/* Right Step - Delivery */}
                  <div className="flex flex-col items-center">
                    <div
                      className={` text-white rounded-full no-pdf p-2 z-10 ${
                        result.result[0].ArrivalDate
                          ? "bg-blue-600"
                          : "bg-gray-500"
                      }`}
                    >
                      {result.result[0].ArrivalDate ? (
                        <i className="fa-solid fa-check"></i>
                      ) : (
                        <i className="fa-solid fa-x"></i>
                      )}
                    </div>
                    <p className="mt-2 text-sm font-medium">Arrival Date: </p>
                    <p className="text-xs text-gray-500">
                      {result.result[0].ArrivalDate || "not arrived yet"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <button
                  onClick={() =>
                    downloadPdf({
                      endpoint: "/track-shipment/track-full-container/pdf",
                      query: {
                        BillNumber: formData.BillNumber,
                        ContainerNumber: formData.ContainerNumber,
                        PortOfLoading: formData.PortOfLoading,
                        PortOfDischarge: formData.PortOfDischarge,
                      },
                      fileName: `FullContainer_${formData.BillNumber}_${formData.ContainerNumber}.pdf`,
                    })
                  }
                  className="bg-red-600 w-[150px] py-2 mt-4 no-pdf text-white rounded"
                >
                  {isPdfLoading ? <i className="fa-solid fa-spinner animate-spin"></i> : "Download PDF"}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div
              ref={printRef}
              className="bg-white p-8 md:p-12 rounded-xl w-[90%] max-w-md relative shadow-lg"
            >
              <div className="flex  justify-between mb-5">
                <div>
                  <h1 className="text-black font-bold text-left mb-2">
                    Status Report :
                  </h1>
                  <h1 className="text-black font-bold text-left">
                    H/BL Number :
                  </h1>
                  <h1 className="text-black  text-left">
                    {formData.BillNumber.replace(/[\/\s-]/g, "")}
                  </h1>
                </div>
                <div className="w-48 ">
                  <img
                    className="w-full "
                    src="https://res.cloudinary.com/djvzbznry/image/upload/v1767658761/Al-zafer_Full_Logo_kz2l7t.png"
                    alt="Al-zafer Logo"
                  />
                </div>
              </div>
              {/* Close button */}
              <button
                onClick={() => setResult(null)}
                className="absolute top-2 right-4 text-xl font-bold no-pdf text-gray-700"
              >
                &times;
              </button>

              {/* Status Progress */}
              <div className="bg-gray-100 p-6 rounded-xl">
                <div className="flex justify-between items-center relative">
                  {/* Left Step - Arrival */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`no-pdf text-white rounded-full p-2 z-10 ${
                        result.result[0].ArrivalDate
                          ? "bg-blue-600"
                          : "bg-gray-500"
                      }`}
                    >
                      {result.result[0].ArrivalDate ? (
                        <i className="fa-solid fa-check"></i>
                      ) : (
                        <i className="fa-solid fa-x"></i>
                      )}
                    </div>
                    <p className="mt-2 text-sm font-medium">Arrived</p>
                    <p className="text-xs text-gray-500">
                      {result.result[0].ArrivalDate || "not arrived yet"}
                    </p>
                  </div>

                  {/* Dotted line */}
                  <div className="absolute top-4 no-pdf left-[18%] right-[18%] border-t-2 border-dotted border-blue-400 z-0"></div>

                  {/* Right Step - Delivery */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`no-pdf text-white rounded-full p-2 z-10 ${
                        result.result[0].DepartureDate
                          ? "bg-blue-600"
                          : "bg-gray-500"
                      }`}
                    >
                      {result.result[0].DepartureDate ? (
                        <i className="fa-solid fa-check"></i>
                      ) : (
                        <i className="fa-solid fa-x"></i>
                      )}
                    </div>
                    <p className="mt-2 text-sm font-medium">B/L Release</p>
                    <p className="text-xs text-gray-500">
                      {result.result[0].DepartureDate || "not delivered yet"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <button
                  onClick={() =>
                    downloadPdf({
                      endpoint: "/track-shipment/track-full-container/pdf",
                      query: {
                        BillNumber: formData.BillNumber,
                        ContainerNumber: formData.ContainerNumber,
                        PortOfLoading: formData.PortOfLoading,
                        PortOfDischarge: formData.PortOfDischarge,
                      },
                      fileName: `FullContainer_${formData.BillNumber}_${formData.ContainerNumber}.pdf`,
                    })
                  }
                  className="bg-red-600 w-[150px] py-2 mt-4 no-pdf text-white rounded"
                >
                  {isPdfLoading ? <i className="fa-solid fa-spinner animate-spin"></i> : "Download PDF"}
                </button>
              </div>
            </div>
          </div>
        ))}
      {result && selectedTracking?.title === "Personal Effects" && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div
            ref={printRef}
            className="bg-white p-8 md:p-12 rounded-xl w-[90%] max-w-md relative shadow-lg"
          >
            <div className="flex  justify-between mb-5">
              <div>
                <h1 className="text-black font-bold text-left mb-2">
                  Status Report :
                </h1>
                <h1 className="text-black font-bold text-left">
                  H/BL Number :
                </h1>
                <h1 className="text-black  text-left">
                  {formData.HousBillNo.replace(/[\/\s-]/g, "")}
                </h1>
              </div>
              <div className="w-48 ">
                <img
                  className="w-full "
                  src="https://res.cloudinary.com/djvzbznry/image/upload/v1767658761/Al-zafer_Full_Logo_kz2l7t.png"
                  alt="Al-zafer Logo"
                />
              </div>
            </div>
            {/* Close button */}
            <button
              onClick={() => setResult(null)}
              className="absolute top-2 right-4 text-xl font-bold no-pdf text-gray-700"
            >
              &times;
            </button>

            {/* Status Progress */}
            <div className="bg-gray-100 p-6 rounded-xl">
              <div className="flex justify-between items-center relative">
                {/* Left Step - Arrival */}
                <div className="flex flex-col items-center">
                  <div
                    className={` text-white rounded-full no-pdf p-2 z-10 ${
                      result.result[0].DepartureDate
                        ? "bg-blue-600"
                        : "bg-gray-500"
                    }`}
                  >
                    {result.result[0].DepartureDate ? (
                      <i className="fa-solid fa-check"></i>
                    ) : (
                      <i className="fa-solid fa-x"></i>
                    )}
                  </div>
                  <p className="mt-2 text-sm font-medium">Departure Date:</p>
                  <p className="text-xs text-gray-500">
                    {result.result[0].DepartureDate || "not delivered yet"}
                  </p>
                </div>

                {/* Dotted line */}
                <div className="absolute top-4 no-pdf left-[20%] right-[15%] border-t-2 border-dotted border-blue-400 z-0"></div>

                {/* Right Step - Delivery */}
                <div className="flex flex-col items-center">
                  <div
                    className={`no-pdf text-white rounded-full p-2 z-10 ${
                      result.result[0].Arrived ? "bg-blue-600" : "bg-gray-500"
                    }`}
                  >
                    {result.result[0].Arrived ? (
                      <i className="fa-solid fa-check"></i>
                    ) : (
                      <i className="fa-solid fa-x"></i>
                    )}
                  </div>
                  <p className="mt-2 text-sm font-medium">Arrival Date:</p>
                  <p className="text-xs text-gray-500">
                    {result.result[0].Arrived || "—"}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <button
                onClick={() =>
                  downloadPdf({
                    endpoint: "/track-shipment/track-personal-effect/pdf",
                    query: {
                      HousBillNo: formData.HousBillNo,
                      NOOfPcs: formData.NOOfPcs,
                      TotalWeight: formData.TotalWeight,
                      Destination: formData.Destination,
                    },
                    fileName: `PersonalEffect_${formData.HousBillNo}_${formData.Destination}.pdf`,
                  })
                }
                className="bg-red-600 w-[150px] py-2 mt-4 no-pdf text-white rounded"
              >
                {isPdfLoading ? <i className="fa-solid fa-spinner animate-spin"></i> : "Download PDF"}
              </button>
            </div>
          </div>
        </div>
      )}
      {result &&
        selectedTracking?.title === "Air Frieght" &&
        (result?.result[0]?.destination === "JEDDAH" ||
        result?.result[0]?.destination === "DAMMAM" ||
        result?.result[0]?.destination === "RIYADH" ? (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div
              ref={printRef}
              className="bg-white p-8 md:p-12 rounded-xl w-[90%] max-w-md relative shadow-lg"
            >
              <div className="flex  justify-between mb-5">
                <div>
                  <h1 className="text-black font-bold text-left mb-2">
                    Status Report :
                  </h1>
                  <h1 className="text-black font-bold text-left">
                    AWB Number :
                  </h1>
                  <h1 className="text-black  text-left">
                    {formData.AWBNo.replace(/[\/\s-]/g, "")}
                  </h1>
                </div>
                <div className="w-48 ">
                  <img
                    className="w-full "
                    src="https://res.cloudinary.com/djvzbznry/image/upload/v1767658761/Al-zafer_Full_Logo_kz2l7t.png"
                    alt="Al-zafer Logo"
                  />
                </div>
              </div>
              {/* Close button */}
              <button
                onClick={() => setResult(null)}
                className="absolute top-2 right-4 text-xl no-pdf font-bold text-gray-700"
              >
                &times;
              </button>

              {/* Status Progress */}
              <div className="bg-gray-100 p-6 rounded-xl">
                <div className="flex justify-between items-center relative">
                  {/* Left Step - Arrival */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`no-pdf text-white rounded-full p-2 z-10 ${
                        result.result[0].ArrivalDate
                          ? "bg-blue-600"
                          : "bg-gray-500"
                      }`}
                    >
                      {result.result[0].ArrivalDate ? (
                        <i className="fa-solid fa-check"></i>
                      ) : (
                        <i className="fa-solid fa-x"></i>
                      )}
                    </div>
                    <p className="mt-2 text-sm font-medium">Arrived</p>
                    <p className="text-xs text-gray-500">
                      {result.result[0].ArrivalDate || "not arrived yet"}
                    </p>
                  </div>

                  {/* Dotted line */}
                  <div className="absolute top-4 no-pdf left-[20%] right-[15%] border-t-2 border-dotted border-blue-400 z-0"></div>

                  {/* Right Step - Delivery */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`no-pdf text-white rounded-full p-2 z-10 ${
                        result.result[0].BLReleaseDate
                          ? "bg-blue-600"
                          : "bg-gray-500"
                      }`}
                    >
                      {result.result[0].BLReleaseDate ? (
                        <i className="fa-solid fa-check"></i>
                      ) : (
                        <i className="fa-solid fa-x"></i>
                      )}
                    </div>
                    <p className="mt-2 text-sm font-medium">B/L Release Date</p>
                    <p className="text-xs text-gray-500">
                      {result.result[0].BLReleaseDate || "not released yet"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <button
                  onClick={() =>
                    downloadPdf({
                      endpoint: "/track-shipment/track-air-flight/pdf",
                      query: {
                        AWBNo: formData.AWBNo,
                        Destination: formData.Destination,
                        NOOfPcs: formData.NOOfPcs,
                        TotalWeight: formData.TotalWeight,
                      },
                      fileName: `AIR_${formData.AWBNo}_${formData.Destination}.pdf`,
                    })
                  }
                  className="bg-red-600 w-[150px] py-2 mt-4 no-pdf text-white rounded"
                >
                  {isPdfLoading ? <i className="fa-solid fa-spinner animate-spin"></i> : "Download PDF"}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div
              ref={printRef}
              className="bg-white p-8 md:p-12 rounded-xl w-[90%] max-w-md relative shadow-lg"
            >
              <div className="flex  justify-between mb-5">
                <div>
                  <h1 className="text-black font-bold text-left mb-2">
                    Status Report :
                  </h1>
                  <h1 className="text-black font-bold text-left">
                    AWB Number :
                  </h1>
                  <h1 className="text-black  text-left">
                    {formData.AWBNo.replace(/[\/\s-]/g, "")}
                  </h1>
                </div>
                <div className="w-48 ">
                  <img
                    className="w-full "
                    src="https://res.cloudinary.com/djvzbznry/image/upload/v1767658761/Al-zafer_Full_Logo_kz2l7t.png"
                    alt="Al-zafer Logo"
                  />
                </div>
              </div>
              {/* Close button */}
              <button
                onClick={() => setResult(null)}
                className="absolute no-pdf top-2 right-4 text-xl font-bold text-gray-700"
              >
                &times;
              </button>

              {/* Status Progress */}
              <div className="bg-gray-100 p-6 rounded-xl">
                <div className="flex justify-between items-center relative">
                  {/* Left Step - Arrival */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`no-pdf text-white rounded-full p-2 z-10 ${
                        result.result[0].DepartureDate
                          ? "bg-blue-600"
                          : "bg-gray-500"
                      }`}
                    >
                      {result.result[0].DepartureDate ? (
                        <i className="fa-solid fa-check"></i>
                      ) : (
                        <i className="fa-solid fa-x"></i>
                      )}
                    </div>
                    <p className="mt-2 text-sm font-medium">Departure Date</p>
                    <p className="text-xs text-gray-500">
                      {result.result[0].DepartureDate || "not departed yet"}
                    </p>
                  </div>

                  {/* Dotted line */}
                  <div className="absolute no-pdf top-4 left-[20%] right-[15%] border-t-2 border-dotted border-blue-400 z-0"></div>

                  {/* Right Step - Delivery */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`no-pdf text-white rounded-full p-2 z-10 ${
                        result.result[0].ArrivalDate
                          ? "bg-blue-600"
                          : "bg-gray-500"
                      }`}
                    >
                      {result.result[0].ArrivalDate ? (
                        <i className="fa-solid fa-check"></i>
                      ) : (
                        <i className="fa-solid fa-x"></i>
                      )}
                    </div>
                    <p className="mt-2 text-sm font-medium">Arrival Date</p>
                    <p className="text-xs text-gray-500">
                      {result.result[0].ArrivalDate || "not arrived yet"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <button
                  onClick={() =>
                    downloadPdf({
                      endpoint: "/track-shipment/track-air-flight/pdf",
                      query: {
                        AWBNo: formData.AWBNo,
                        Destination: formData.Destination,
                        NOOfPcs: formData.NOOfPcs,
                        TotalWeight: formData.TotalWeight,
                      },
                      fileName: `AIR_${formData.AWBNo}_${formData.Destination}.pdf`,
                    })
                  }
                  className="bg-red-600 w-[150px] py-2 mt-4 no-pdf text-white rounded"
                >
                  {isPdfLoading ? <i className="fa-solid fa-spinner animate-spin"></i> : "Download PDF"}
                </button>
              </div>
            </div>
          </div>
        ))}
      {result &&
        selectedTracking?.title === "LCL" &&
        selectedLclContainerStatus && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div
              ref={printRef}
              className="bg-white p-8 md:p-16 rounded-xl w-[90%] max-w-5xl  relative shadow-lg"
            >
              <div className="flex  justify-between mb-5">
                <div>
                  <h1 className="text-black font-bold text-left mb-2">
                    Status Report :
                  </h1>
                  <h1 className="text-black font-bold text-left">
                    Container Number :
                  </h1>
                  <h1 className="text-black  text-left">
                    {formData.ContainerNumber.replace(/[\/\s-]/g, "")}
                  </h1>
                </div>
                <div className="w-48 ">
                  <img
                    className="w-full "
                    src="https://res.cloudinary.com/djvzbznry/image/upload/v1767658761/Al-zafer_Full_Logo_kz2l7t.png"
                    alt="Al-zafer Logo"
                  />
                </div>
              </div>
              {/* Close button */}
              <button
                onClick={() => {
                  setResult(null);
                  setSelectedLclContainerStatus(false);
                }}
                className="absolute no-pdf top-2 right-4 text-xl font-bold text-gray-700"
              >
                &times;
              </button>

              {/* Status Progress */}
              <div className="bg-gray-100 p-6 rounded-xl">
                <div className="flex flex-col relative">
                  <div className="grid grid-cols-1">
                    {/* <h1 className="font-semibold">B/L No: {result.result[0].HousBillNo}</h1> */}

                    {/* Table Header */}
                    <div className="flex mb-2">
                      <p className="flex-1 text-sm font-medium text-center">
                        House Bill No:
                      </p>
                      <p className="flex-1 text-sm font-medium text-center">
                        No Of PCS:
                      </p>
                      <p className="flex-1 text-sm font-medium text-center">
                        Arrived:
                      </p>
                      <p className="flex-1 text-sm font-medium text-center">
                        Stored:
                      </p>
                      <p className="flex-1 text-sm font-medium text-center">
                        DO Release:
                      </p>
                      <p className="flex-1 text-sm font-medium text-center">
                        Cargo Release:
                      </p>
                    </div>
                    <hr className="mb-2" />

                    {/* Table Rows */}
                    {/* Table Rows Wrapper with scroll */}
                    <div className="overflow-y-auto max-h-64 table-scroll">
                      {" "}
                      {/* max-h-64 ≈ 16rem height */}
                      {result.result.map((item, index) => (
                        <div key={index}>
                          <div className="flex  mb-2">
                            <p className="flex-1 text-xs font-medium text-center">
                              {item.HousBillNo}
                            </p>
                            <p className="flex-1 text-xs font-medium text-center">
                              {item.NOOfPcs}
                            </p>
                            <p className="flex-1 text-xs font-medium text-center">
                              {item.Arrived}
                            </p>
                            <p className="flex-1 text-xs font-medium text-center">
                              {item.Stored}
                            </p>
                            <p className="flex-1 text-xs font-medium text-center">
                              {item.DORelease}
                            </p>
                            <p className="flex-1 text-xs font-medium text-center">
                              {item.CargoRelease}
                            </p>
                          </div>
                          <hr />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <button
                  onClick={() =>
                    downloadPdf({
                      endpoint: "/track-shipment/track-lcl-container/pdf",
                      query: {
                        ContainerNumber: formData.ContainerNumber,
                        PortOfDischarge: formData.PortOfDischarge,
                      },
                      fileName: `LCL_${formData.ContainerNumber}_${formData.PortOfDischarge}.pdf`,
                    })
                  }
                  className="bg-red-600 w-[150px] py-2 mt-4 no-pdf text-white rounded"
                >
                  {isPdfLoading ? <i className="fa-solid fa-spinner animate-spin"></i> : "Download PDF"}
                </button>
              </div>
            </div>
          </div>
        )}
      {result && selectedTracking?.title === "LCL" && selectedLclHblStatus && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div
            ref={printRef}
            className="bg-white p-8 md:p-16 rounded-xl w-[90%] max-w-xl relative shadow-lg"
          >
            <div className="flex  justify-between mb-5">
              <div>
                <h1 className="text-black font-bold text-left mb-2">
                  Status Report :
                </h1>
                <h1 className="text-black font-bold text-left">
                  H/BL Number :
                </h1>
                <h1 className="text-black  text-left">
                  {formData.HousBillNo.replace(/[\/\s-]/g, "")}
                </h1>
              </div>
              <div className="w-48 ">
                <img
                  className="w-full "
                  src="https://res.cloudinary.com/djvzbznry/image/upload/v1767658761/Al-zafer_Full_Logo_kz2l7t.png"
                  alt="Al-zafer Logo"
                />
              </div>
            </div>
            {/* Close button */}
            <button
              onClick={() => {
                setResult(null);
                setSelectedLclHblStatus(false);
              }}
              className="absolute top-2 no-pdf right-4 text-xl font-bold text-gray-700"
            >
              &times;
            </button>

            {/* Status Progress */}
            <div className="bg-gray-100 p-6 rounded-xl">
              <div className="flex justify-between items-center relative">
                {/* Left Step - Arrival */}
                <div className="flex flex-col items-center ">
                  <div
                    className={`no-pdf text-white rounded-full p-2 z-10 ${
                      result.result[0].Arrived ? "bg-blue-600" : "bg-gray-500"
                    }`}
                  >
                    {result.result[0].Arrived ? (
                      <i className="fa-solid fa-check"></i>
                    ) : (
                      <i className="fa-solid fa-x"></i>
                    )}
                  </div>
                  <p className=" text-sm font-medium">Arrived:</p>
                  <p className="text-xs text-gray-500 ms-2">
                    {result.result[0].Arrived || "not arrived yet"}
                  </p>
                </div>
                <div className="flex flex-col items-center ">
                  <div
                    className={` no-pdf text-white rounded-full p-2 z-10 ${
                      result.result[0].Stored ? "bg-blue-600" : "bg-gray-500"
                    }`}
                  >
                    {result.result[0].Stored ? (
                      <i className="fa-solid fa-check"></i>
                    ) : (
                      <i className="fa-solid fa-x"></i>
                    )}
                  </div>
                  <p className=" text-sm font-medium">Stored:</p>
                  <p className="text-xs text-gray-500 ms-2">
                    {result.result[0].Stored || "not stored yet"}
                  </p>
                </div>
                <div className="absolute top-4 no-pdf left-[13%] right-[13%] border-t-2 border-dotted border-blue-400 z-0"></div>
                {/* Right Step - Delivery */}
                <div className="flex flex-col items-center">
                  <div
                    className={`no-pdf text-white rounded-full p-2 z-10 ${
                      result.result[0].DORelease ? "bg-blue-600" : "bg-gray-500"
                    }`}
                  >
                    {result.result[0].DORelease ? (
                      <i className="fa-solid fa-check"></i>
                    ) : (
                      <i className="fa-solid fa-x"></i>
                    )}
                  </div>
                  <p className=" text-sm font-medium">DO Release:</p>
                  <p className="text-xs text-gray-500 ms-2">
                    {result.result[0].DORelease || "not DO release yet"}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className={`no-pdf text-white rounded-full p-2 z-10 ${
                      result.result[0].Clearance ? "bg-blue-600" : "bg-gray-500"
                    }`}
                  >
                    {result.result[0].Clearance ? (
                      <i className="fa-solid fa-check"></i>
                    ) : (
                      <i className="fa-solid fa-x"></i>
                    )}
                  </div>
                  <p className=" text-sm font-medium">Cargo Release:</p>
                  <p className="text-xs text-gray-500 ms-2">
                    {result.result[0].Clearance || "not clearance yet"}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <button
                onClick={() =>
                  downloadPdf({
                    endpoint: "/track-shipment/track-lcl-housebillno/pdf",
                    query: {
                      HousBillNo: formData.HousBillNo,
                      NOOfPcs: formData.NOOfPcs,
                      TotalWeight: formData.TotalWeight,
                      Destination: formData.Destination,
                    },
                    fileName: `LCL_${formData.HousBillNo}_${formData.Destination}.pdf`,
                  })
                }
                className="bg-red-600 w-[150px] py-2 mt-4 no-pdf text-white rounded"
              >
                {isPdfLoading ? <i className="fa-solid fa-spinner animate-spin"></i> : "Download PDF"}
              </button>
            </div>
          </div>
        </div>
      )}
      {result &&
        selectedTracking?.title === "Clearance and Trucking" &&
        selectedClearanceContainerStatus && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div
              ref={printRef}
              className="bg-white p-8 md:p-16 rounded-xl w-[90%] max-w-xl relative shadow-lg"
            >
              <div className="flex  justify-between mb-5">
                <div>
                  <h1 className="text-black font-bold text-left mb-2">
                    Status Report :
                  </h1>
                  <h1 className="text-black font-bold text-left">
                    Container Number :
                  </h1>
                  <h1 className="text-black  text-left">
                    {formData.ContainerNumber.replace(/[\/\s-]/g, "")}
                  </h1>
                </div>
                <div className="w-48 ">
                  <img
                    className="w-full "
                    src="https://res.cloudinary.com/djvzbznry/image/upload/v1767658761/Al-zafer_Full_Logo_kz2l7t.png"
                    alt="Al-zafer Logo"
                  />
                </div>
              </div>
              {/* Close button */}
              <button
                onClick={() => {
                  setResult(null);
                  setSelectedClearanceContainerStatus(false);
                }}
                className="absolute top-2 no-pdf right-4 text-xl font-bold text-gray-700"
              >
                &times;
              </button>

              {/* Status Progress */}
              <div className="bg-gray-100 p-6 rounded-xl">
                <div className="flex justify-between items-center relative">
                  {/* Left Step - Arrival */}
                  <div className="flex flex-col items-center ">
                    <div
                      className={`no-pdf text-white rounded-full p-2 z-10 ${
                        result.result[0].ContainerUnderClearance
                          ? "bg-blue-600"
                          : "bg-gray-500"
                      }`}
                    >
                      {result.result[0].ContainerUnderClearance ? (
                        <i className="fa-solid fa-check"></i>
                      ) : (
                        <i className="fa-solid fa-x"></i>
                      )}
                    </div>
                    <p className=" text-xs font-medium">Under Clearance:</p>
                    <p className="text-xs text-gray-500 ">
                      {result.result[0].ContainerUnderClearance || "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-col items-center ">
                    <div
                      className={`no-pdf text-white rounded-full p-2 z-10 ${
                        result.result[0].AtThePort
                          ? "bg-blue-600"
                          : "bg-gray-500"
                      }`}
                    >
                      {result.result[0].AtThePort ? (
                        <i className="fa-solid fa-check"></i>
                      ) : (
                        <i className="fa-solid fa-x"></i>
                      )}
                    </div>
                    <p className=" text-xs font-medium">At The Port:</p>
                    <p className="text-xs text-gray-500 ">
                      {result.result[0].AtThePort || "N/A"}
                    </p>
                  </div>
                  {/* dooted line */}
                  <div className="absolute top-4 no-pdf left-[16%] right-[16%] border-t-2 border-dotted border-blue-400 z-0"></div>
                  {/* Right Step - Delivery */}

                  <div className="flex flex-col items-center">
                    <div
                      className={`no-pdf text-white rounded-full p-2 z-10 ${
                        result.result[0].ClearanceDone
                          ? "bg-blue-600"
                          : "bg-gray-500"
                      }`}
                    >
                      {result.result[0].ClearanceDone ? (
                        <i className="fa-solid fa-check"></i>
                      ) : (
                        <i className="fa-solid fa-x"></i>
                      )}
                    </div>
                    <p className=" text-xs font-medium">Clearance Done:</p>
                    <p className="text-xs text-gray-500 ">
                      {result.result[0].ClearanceDone || "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div
                      className={`no-pdf text-white rounded-full p-2 z-10 ${
                        result.result[0].UnderTracking
                          ? "bg-blue-600"
                          : "bg-gray-500"
                      }`}
                    >
                      {result.result[0].UnderTracking ? (
                        <i className="fa-solid fa-check"></i>
                      ) : (
                        <i className="fa-solid fa-x"></i>
                      )}
                    </div>
                    <p className=" text-xs font-medium">Under Trucking:</p>
                    <p className="text-xs text-gray-500 ">
                      {result.result[0].UnderTracking || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <button
                  onClick={() =>
                    downloadPdf({
                      endpoint: "/track-shipment/track-clearance-containerno/pdf",
                      query: {
                        ContainerNumber: formData.ContainerNumber,
                        PortOfDischarge: formData.PortOfDischarge,
                        VesselEnName: formData.VesselEnName,
                      },
                      fileName: `Clearance_${formData.ContainerNumber}_${formData.PortOfDischarge}.pdf`,
                    })
                  }
                  className="bg-red-600 w-[150px] py-2 mt-4 no-pdf text-white rounded"
                >
                  {isPdfLoading ? <i className="fa-solid fa-spinner animate-spin"></i> : "Download PDF"}
                </button>
              </div>
            </div>
          </div>
        )}
      {result &&
        selectedTracking?.title === "Clearance and Trucking" &&
        selectedClearanceBlNoStatus && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div
              ref={printRef}
              className="bg-white p-8 md:p-16 rounded-xl w-[90%] max-w-xl relative shadow-lg"
            >
              <div className="flex  justify-between mb-5">
                <div>
                  <h1 className="text-black font-bold text-left mb-2">
                    Status Report :
                  </h1>
                  {result.result.VesselEnName ? (
                    <h1 className="text-black font-bold text-left">
                      H/BL Number :
                    </h1>
                  ) : (
                    <h1 className="text-black font-bold text-left">
                      AWB Number :
                    </h1>
                  )}
                  <h1 className="text-black  text-left">
                    {formData.BillNo.replace(/[\/\s-]/g, "")}
                  </h1>
                </div>
                <div className="w-48 ">
                  <img
                    className="w-full "
                    src="https://res.cloudinary.com/djvzbznry/image/upload/v1767658761/Al-zafer_Full_Logo_kz2l7t.png"
                    alt="Al-zafer Logo"
                  />
                </div>
              </div>
              {/* Close button */}
              <button
                onClick={() => {
                  setResult(null);
                  setSelectedClearanceBlNoStatus(false);
                }}
                className="absolute top-2 no-pdf right-4 text-xl font-bold text-gray-700"
              >
                &times;
              </button>

              {/* Status Progress */}
              <div className="bg-gray-100 p-6 rounded-xl">
                <div className="flex justify-between items-center relative">
                  {/* Left Step - Arrival */}
                  <div className="flex flex-col items-center ">
                    <div
                      className={`no-pdf text-white rounded-full p-2 z-10 ${
                        result.result.ContainerUnderClearance
                          ? "bg-blue-600"
                          : "bg-gray-500"
                      }`}
                    >
                      {result.result.ContainerUnderClearance ? (
                        <i className="fa-solid fa-check"></i>
                      ) : (
                        <i className="fa-solid fa-x"></i>
                      )}
                    </div>
                    <p className=" text-xs font-medium">Under Clearance:</p>
                    <p className="text-xs text-gray-500 ">
                      {result.result.ContainerUnderClearance || "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-col items-center ">
                    <div
                      className={`no-pdf text-white rounded-full p-2 z-10 ${
                        result.result.AtThePort ? "bg-blue-600" : "bg-gray-500"
                      }`}
                    >
                      {result.result.AtThePort ? (
                        <i className="fa-solid fa-check"></i>
                      ) : (
                        <i className="fa-solid fa-x"></i>
                      )}
                    </div>
                    <p className=" text-xs font-medium">At The Port:</p>
                    <p className="text-xs text-gray-500 ">
                      {result.result.AtThePort || "N/A"}
                    </p>
                  </div>
                  {/* dooted line */}
                  <div className="absolute no-pdf top-4 left-[16%] right-[16%] border-t-2 border-dotted border-blue-400 z-0"></div>
                  {/* Right Step - Delivery */}

                  <div className="flex flex-col items-center">
                    <div
                      className={`no-pdf text-white rounded-full p-2 z-10 ${
                        result.result.ClearanceDone
                          ? "bg-blue-600"
                          : "bg-gray-500"
                      }`}
                    >
                      {result.result.ClearanceDone ? (
                        <i className="fa-solid fa-check"></i>
                      ) : (
                        <i className="fa-solid fa-x"></i>
                      )}
                    </div>
                    <p className=" text-xs font-medium">Clearance Done:</p>
                    <p className="text-xs text-gray-500 ">
                      {result.result.ClearanceDone || "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div
                      className={`no-pdf text-white rounded-full p-2 z-10 ${
                        result.result.UnderTracking
                          ? "bg-blue-600"
                          : "bg-gray-500"
                      }`}
                    >
                      {result.result.UnderTracking ? (
                        <i className="fa-solid fa-check"></i>
                      ) : (
                        <i className="fa-solid fa-x"></i>
                      )}
                    </div>
                    <p className=" text-xs font-medium">Under Trucking:</p>
                    <p className="text-xs text-gray-500 ">
                      {result.result.UnderTracking || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <button
                  onClick={() =>
                    downloadPdf({
                      endpoint: "/track-shipment/track-clearance-billno/pdf",
                      query: {
                        BillNo: formData.BillNo,
                        PortOfDischarge: formData.PortOfDischarge,
                      },
                      fileName: `Clearance_${formData.BillNo}_${formData.PortOfDischarge}.pdf`,
                    })
                  }
                  className="bg-red-600 w-[150px] py-2 mt-4 no-pdf text-white rounded"
                >
                  {isPdfLoading ? <i className="fa-solid fa-spinner animate-spin"></i> : "Download PDF"}
                </button>
              </div>
            </div>
          </div>
        )}
    </>
  );
}
