import React, { useEffect, useState } from "react";
import style from "./Qoutations.module.css";
export default function Qoutations() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQoutation, setSelectedQoutation] = useState(null);
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      <h1 className="text-3xl font-bold text-left md:my-12 my-6">
        Request a Qoutation
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
        {qoutationsArray.map((item, index) => (
          <div
            key={index}
            onClick={() => openModal(item)}
            className="flex justify-between items-center p-8 rounded-xl bg-[#0C71B9] "
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
                setIsSubmitted(true);
                setIsModalOpen(false);
              }}
            >
              {selectedQoutation?.title ===
                "Get a Quote For Import Shipment" && (
                <>
                  <label htmlFor="portOfLoading" className="font-semibold">
                    Port of loading
                  </label>
                  <input
                    type="text"
                    placeholder="Port of loading"
                    className="border w-full p-2 rounded"
                    name="portOfLoading"
                  />
                  <label htmlFor="portOfDischarge" className="font-semibold">
                    Port of discharge
                  </label>
                  <input
                    type="text"
                    placeholder="Port of discharge"
                    className="border w-full p-2 rounded"
                    name="portOfDischarge"
                  />
                  <label htmlFor="termsAndConditions" className="font-semibold">
                    Terms & Conditions (FOB, EX WORK):
                  </label>
                  <input
                    type="text"
                    placeholder="Terms & Conditions (FOB, EX WORK)"
                    className="border w-full p-2 rounded"
                    name="termsAndConditions"
                  />
                  <label htmlFor="noOfPcs" className="font-semibold">
                    No Of Pcs / Containers:
                  </label>
                  <input
                    type="text"
                    placeholder="No Of Pcs / Containers"
                    className="border w-full p-2 rounded"
                    name="noOfPcs"
                  />
                  <label htmlFor="expectedRate" className="font-semibold">
                    Expected Rate:
                  </label>
                  <input
                    type="text"
                    placeholder="Expected Rate"
                    className="border w-full p-2 rounded"
                    name="expectedRate"
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
                  />
                </>
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
                  />
                  <label htmlFor="portOfDischarge" className="font-semibold">
                    Port of discharge
                  </label>
                  <input
                    type="text"
                    placeholder="Port of discharge"
                    className="border w-full p-2 rounded"
                    name="portOfDischarge"
                  />
                  <label htmlFor="noOfContainers" className="font-semibold">
                    No of Containers:
                  </label>
                  <input
                    type="text"
                    placeholder="No of Containers"
                    className="border w-full p-2 rounded"
                    name="noOfContainers"
                  />
                  <label htmlFor="noOfPcs" className="font-semibold">
                    No Of Pcs:
                  </label>
                  <input
                    type="text"
                    placeholder="No Of Pcs"
                    className="border w-full p-2 rounded"
                    name="noOfPcs"
                  />
                  <label htmlFor="expectedRate" className="font-semibold">
                    Expected Rate:
                  </label>
                  <input
                    type="text"
                    placeholder="Expected Rate"
                    className="border w-full p-2 rounded"
                    name="expectedRate"
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
                  />
                </>
              )}
              {selectedQoutation?.title ===
                "Get a Quote For Clearance and Trucking" && (
                <>
                  <label htmlFor="portOfDestination" className="font-semibold">
                    Port of Destination:
                  </label>
                  <input
                    type="text"
                    placeholder="Port of Destination"
                    className="border w-full p-2 rounded"
                    name="portOfDestination"
                  />
                  <label htmlFor="typeOfCargo" className="font-semibold">
                    Type of Cargo:
                  </label>
                  <input
                    type="text"
                    placeholder="Type of Cargo"
                    className="border w-full p-2 rounded"
                    name="typeOfCargo"
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
                  />
                  <div className="mb-4">
                    <label className="block font-semibold mb-2">
                      Required Services:
                    </label>
                    <div className="flex gap-6 items-center">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="service"
                          value="Clearance"
                          checked={selectedService === "Clearance"}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="form-radio text-blue-600"
                        />
                        <span className="ml-2">Clearance</span>
                      </label>

                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="service"
                          value="Transportations"
                          checked={selectedService === "Transportations"}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="form-radio text-blue-600"
                        />
                        <span className="ml-2">Transportations</span>
                      </label>

                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="service"
                          value="Freight"
                          checked={selectedService === "Freight"}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="form-radio text-blue-600"
                        />
                        <span className="ml-2">Freight</span>
                      </label>
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
    </>
  );
}
