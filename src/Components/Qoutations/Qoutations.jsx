import React, { useEffect, useState } from "react";
import style from "./Qoutations.module.css";
import axios from "axios";
export default function Qoutations() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQoutation, setSelectedQoutation] = useState(null);

  const [emailTo, setEmailTo] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  const getApiUrl = () => {
    switch (selectedQoutation?.title) {
      case "Get a Quote For Import Shipment":
        return "https://el-zafer-backend.onrender.com/quotes/shipment/add-quote-for-import";
      case "Get a Quote For Export Shipment":
        return "https://el-zafer-backend.onrender.com/quotes/shipment/add-quote-for-export";
      case "Get a Quote For Clearance and Trucking":
        return "https://el-zafer-backend.onrender.com/quotes/shipment/add-quote-for-clearness";
      default:
        return "";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailTo(value);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(false);
    
    

    const url = getApiUrl();
    if (!url) return alert("No API endpoint found");

    const fullData = {
      ...formData,
      requiredService: selectedServices,
      quoteType: selectedQoutation?.title,
      emailTo
    };

    try {
      // console.log("Payload:", fullData);
      // console.log("emailTo received:", emailOption);
      await axios.post(url, fullData);
      setFormData({});
      setSelectedServices([]);
      setEmailTo("");
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending quote:", error);
      alert("Failed to send quote.");
    }
  };

  const qoutationsArray = [
    {
      title: "Get a Quote For Import Shipment",
    },
    {
      title: "Get a Quote For Export Shipment",
    },
    {
      title: "Get a Quote For Clearance and Trucking",
    },
  ];

  function openModal(item) {
    setSelectedQoutation(item);
    setIsModalOpen(true);
  }
  return (
    <>
      <div className="container mx-auto px-4 my-10 md:my-44 md:px-24">
        <h1 className="text-3xl text-red-700 font-bold text-left md:my-12 my-6">
          Request a Qoutation
        </h1>
        <div className="grid grid-cols-1  gap-6 text-white">
          {qoutationsArray.map((item, index) => (
            <div
              key={index}
              onClick={() => openModal(item)}
              className="flex justify-between items-center w-full md:w-1/2  p-8 rounded-xl bg-[#0C71B9] "
            >
              <div>
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
                {selectedQoutation?.title}
              </h2>
              <form
                className="space-y-2 text-left"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                  setIsSubmitted(true);
                  setIsModalOpen(false);
                }}
              >
                {selectedQoutation?.title ===
                  "Get a Quote For Import Shipment" && (
                  <div>
                    <label htmlFor="portOfLoading" className="font-semibold">
                      Port of loading
                    </label>
                    <input
                      type="text"
                      placeholder="Port of loading"
                      className="border w-full p-2 rounded"
                      name="portOfLoading"
                      value={formData.portOfLoading || ""}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="portOfDischarge" className="font-semibold">
                      Port of discharge
                    </label>
                    <input
                      type="text"
                      placeholder="Port of discharge"
                      className="border w-full p-2 rounded"
                      name="portOfDischarge"
                      value={formData.portOfDischarge || ""}
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="termsAndCondition"
                      className="font-semibold"
                    >
                      Terms & Conditions (FOB, EX WORK):
                    </label>
                    <input
                      type="text"
                      placeholder="Terms & Conditions (FOB, EX WORK)"
                      className="border w-full p-2 rounded"
                      name="termsAndCondition"
                      value={formData.termsAndCondition || ""}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="numberOfPcs" className="font-semibold">
                      No Of Pcs / Containers:
                    </label>
                    <input
                      type="text"
                      placeholder="No Of Pcs / Containers"
                      className="border w-full p-2 rounded"
                      name="numberOfPcs"
                      value={formData.numberOfPcs || ""}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="expectedRate" className="font-semibold">
                      Expected Rate:
                    </label>
                    <input
                      type="text"
                      placeholder="Expected Rate"
                      className="border w-full p-2 rounded"
                      name="expectedRate"
                      value={formData.expectedRate || ""}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="emailOrPhone" className="font-semibold">
                      {" "}
                      Email or Phone Number:
                    </label>
                    <input
                      type="text"
                      placeholder="Email or Phone Number"
                      className="border w-full p-2 rounded"
                      name="emailOrPhone"
                      value={formData.emailOrPhone || ""}
                      onChange={handleInputChange}
                    />
                    {/* radio button */}
                    <div className="flex justify-around mt-3">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="option1" // give unique id
                          name="optionsEmail"
                          value="option1"
                          checked={emailTo === "option1"}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="option1" className="font-semibold ml-2">
                          FCL or Air freight
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="option2" // give unique id
                          name="optionsEmail"
                          value="option2"
                          checked={emailTo === "option2"}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="option2" className="font-semibold ml-2">
                          LCL
                        </label>
                      </div>
                    </div>
                  </div>
                )}
                {selectedQoutation?.title ===
                  "Get a Quote For Export Shipment" && (
                  <>
                    <label htmlFor="portOfLoading" className="font-semibold">
                      Port of loading
                    </label>
                    <input
                      type="text"
                      placeholder="Port of loading"
                      className="border w-full p-2 rounded"
                      name="portOfLoading"
                      value={formData.portOfLoading || ""}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="portOfDischarge" className="font-semibold">
                      Port of discharge
                    </label>
                    <input
                      type="text"
                      placeholder="Port of discharge"
                      className="border w-full p-2 rounded"
                      name="portOfDischarge"
                      value={formData.portOfDischarge || ""}
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="numberOfContainers"
                      className="font-semibold"
                    >
                      No of Containers:
                    </label>
                    <input
                      type="text"
                      placeholder="No of Containers"
                      className="border w-full p-2 rounded"
                      name="numberOfContainers"
                      value={formData.numberOfContainers || ""}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="numberOfPcs" className="font-semibold">
                      No Of Pcs:
                    </label>
                    <input
                      type="text"
                      placeholder="No Of Pcs"
                      className="border w-full p-2 rounded"
                      name="numberOfPcs"
                      value={formData.numberOfPcs || ""}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="expectedRate" className="font-semibold">
                      Expected Rate:
                    </label>
                    <input
                      type="text"
                      placeholder="Expected Rate"
                      className="border w-full p-2 rounded"
                      name="expectedRate"
                      value={formData.expectedRate || ""}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="emailOrPhone" className="font-semibold">
                      {" "}
                      Email or Phone Number:
                    </label>
                    <input
                      type="text"
                      placeholder="Email or Phone Number"
                      className="border w-full p-2 rounded"
                      name="emailOrPhone"
                      value={formData.emailOrPhone || ""}
                      onChange={handleInputChange}
                    />
                    <div className="flex justify-around mt-3">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="option3" // give unique id
                          name="optionsEmailExport"
                          value="option1"
                          checked={emailTo === "option1"}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="option1" className="font-semibold ml-2">
                          FCL or LCL
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="option4" // give unique id
                          name="optionsEmailExport"
                          value="option2"
                          checked={emailTo === "option2"}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="option2" className="font-semibold ml-2">
                          Air Freight
                        </label>
                      </div>
                    </div>
                  </>
                )}
                {selectedQoutation?.title ===
                  "Get a Quote For Clearance and Trucking" && (
                  <>
                    <label
                      htmlFor="portOfDestination"
                      className="font-semibold"
                    >
                      Port of Destination:
                    </label>
                    <input
                      type="text"
                      placeholder="Port of Destination"
                      className="border w-full p-2 rounded"
                      name="portOfDestination"
                      value={formData.portOfDestination || ""}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="typeOfCargo" className="font-semibold">
                      Type of Cargo:
                    </label>
                    <input
                      type="text"
                      placeholder="Type of Cargo"
                      className="border w-full p-2 rounded"
                      name="typeOfCargo"
                      value={formData.typeOfCargo || ""}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="emailOrPhone" className="font-semibold">
                      {" "}
                      Email or Phone Number:
                    </label>
                    <input
                      type="text"
                      placeholder="Email or Phone Number"
                      className="border w-full p-2 rounded"
                      name="emailOrPhone"
                      value={formData.emailOrPhone || ""}
                      onChange={handleInputChange}
                    />
                    <div className="mb-4">
                      <label
                        htmlFor="requiredService"
                        className="block font-semibold mb-2"
                      >
                        Required Services:
                      </label>
                      <div className="flex md:flex-row flex-col gap-2 items-center">
                        {["Clearance", "Transportation", "Saber"].map(
                          (service) => (
                            <label
                              className="inline-flex items-center"
                              key={service}
                            >
                              <input
                                type="checkbox"
                                value={service}
                                checked={selectedServices.includes(service)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    // add this service
                                    setSelectedServices([
                                      ...selectedServices,
                                      service,
                                    ]);
                                  } else {
                                    // remove this service
                                    setSelectedServices(
                                      selectedServices.filter(
                                        (s) => s !== service
                                      )
                                    );
                                  }
                                  console.log(selectedServices);
                                }}
                                className="form-checkbox text-blue-600"
                              />
                              <span className="ml-2">{service}</span>
                            </label>
                          )
                        )}
                      </div>
                    </div>
                  </>
                )}

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
        )}

        {isSubmitted && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg relative w-[90%] max-w-md">
              <button
                onClick={() => setIsSubmitted(false)}
                className="absolute top-2 right-4 text-gray-600 text-lg"
              >
                &times;
              </button>
              <div className="flex justify-center mb-4">
                <div className="bg-green-500 rounded-full p-4">
                  <i className="fa-solid fa-check text-white text-2xl"></i>
                </div>
              </div>
              <h2 className="text-lg font-semibold">
                Your Message has been sent!
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                We will respond to you within 6 hours
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
