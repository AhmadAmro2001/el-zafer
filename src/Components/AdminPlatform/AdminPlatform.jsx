import React, { useEffect, useState } from "react";
import axios from "axios";
export default function AdminPlatform() {
  const [dataRecived, setDataRecived] = useState([]);
  const [selectedSection, setSelectedSection] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // const [selectedOption, setSelectedOption] = useState(null)
  // let {convertToken,setToken} = useContext(UserTokenContext)

  const listMessages = () => {
    setIsLoading(true)
    axios
      .get("https://el-zafer-backend.onrender.com/quotes/list-quotes")
      .then((res) => {
        let { data } = res;
        setIsLoading(false);
        setDataRecived([]);
        setDataRecived(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const listImport = () => {
    setIsLoading(true)
    axios
      .get("https://el-zafer-backend.onrender.com/quotes/shipment/list-import")
      .then((res) => {
        let { data } = res;
        setIsLoading(false);
        setDataRecived([]);
        setDataRecived(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const listExport = () => {
    setIsLoading(true)
    axios
      .get("https://el-zafer-backend.onrender.com/quotes/shipment/list-export")
      .then((res) => {
        let { data } = res;
        setIsLoading(false);
        setDataRecived([]);
        setDataRecived(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const listClearance = () => {
    setIsLoading(true)
    axios
      .get(
        "https://el-zafer-backend.onrender.com/quotes/shipment/list-clearance"
      )
      .then((res) => {
        let { data } = res;
        setIsLoading(false);
        setDataRecived([]);
        setDataRecived(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="mt-56">
        <h1 className="text-5xl font-bold">Admin Platform</h1>
        <div className="flex justify-around text-white my-10 gap-5">
          <button
            type="button"
            onClick={() => {
              listMessages();
              setSelectedSection("messages");
            }}
            className="main-gradient p-2 w-[150px] rounded-full"
          >
{isLoading && selectedSection === "messages" ? <i className='fa fa-spinner fa-spin mx-3 text-white text-2xl'></i> : "messages"}
          </button>
          <button
            type="button"
            onClick={() => {
              listImport();
              setSelectedSection("import");
            }}
            className="main-gradient p-2 w-[150px] rounded-full"
          >
{isLoading && selectedSection === "import" ? <i className='fa fa-spinner fa-spin mx-3 text-white text-2xl'></i> : "quotes imports"}
          </button>
          <button
            type="button"
            onClick={() => {
              listExport();
              setSelectedSection("export");
            }}
            className="main-gradient p-2 w-[150px] rounded-full"
          >
            {isLoading && selectedSection === "export" ? <i className='fa fa-spinner fa-spin mx-3 text-white text-2xl'></i> : "quotes exports"}
          </button>
          <button
            type="button"
            onClick={() => {
              listClearance();
              setSelectedSection("clearance");
            }}
            className="main-gradient p-2 w-[150px] rounded-full"
          >
{isLoading && selectedSection === "clearance" ? <i className='fa fa-spinner fa-spin mx-3 text-white text-2xl'></i> : "quotes for Clearance"}          </button>
        </div>
        <div className="flex flex-col gap-2 w-[80%] mb-10 mx-auto ">
          {selectedSection === "messages" &&
            dataRecived?.map((item, index) => {
              return (
                <div key={index} className="w-[60%] mx-auto">
                  <div className="bg-gray-200 px-10 py-5 rounded-xl text-left">
                    <h1 className="text-3xl font-bold mb-3">
                      Message {index + 1}
                    </h1>
                    <h1>Name: {item.name}</h1>
                    <p>Email: {item.email}</p>
                    <p>Phone number: {item.phoneNumber}</p>
                    <p>Message: {item.message}</p>
                  </div>
                </div>
              );
            })}
          {selectedSection === "import" &&
            dataRecived?.map((item, index) => {
              return (
                <div key={index} className="w-[60%] mx-auto">
                  <div className="bg-gray-200 px-10 py-5 rounded-xl text-left">
                    <h1 className="text-3xl font-bold mb-3">
                      Import Qoutation {index + 1}
                    </h1>
                    <h1>Port of Loading: {item.portOfLoading}</h1>
                    <p>Port of Discharge: {item.portOfDischarge}</p>
                    <p>Terms and condition: {item.termsAndCondition}</p>
                    <p>Number of pcs: {item.numberOfPcs}</p>
                    <p>Expected rate: {item.expectedRate}</p>
                    <p>Email or phone: {item.emailOrPhone}</p>
                  </div>
                </div>
              );
            })}
          {selectedSection === "export" &&
            dataRecived?.map((item, index) => {
              return (
                <div key={index} className="w-[60%] mx-auto">
                  <div className="bg-gray-200 px-10 py-5 rounded-xl text-left">
                    <h1 className="text-3xl font-bold mb-3">
                      Export Qoutation {index + 1}
                    </h1>
                    <h1>Port of Loading: {item.portOfLoading}</h1>
                    <p>Port of Discharge: {item.portOfDischarge}</p>
                    <p>Number of containers: {item.numberOfContainers}</p>
                    <p>Number of pcs: {item.numberOfPcs}</p>
                    <p>Expected rate: {item.expectedRate}</p>
                    <p>Email or phone: {item.emailOrPhone}</p>
                  </div>
                </div>
              );
            })}
          {selectedSection === "clearance" &&
            dataRecived?.map((item, index) => {
              return (
                <div key={index} className="w-[60%] mx-auto">
                  <div className="bg-gray-200 px-10 py-5 rounded-xl text-left">
                    <h1 className="text-3xl font-bold mb-3">
                      Clearance Qoutation {index + 1}
                    </h1>
                    <h1>Port of Destination: {item.portOfDestination}</h1>
                    <p>Cargo type: {item.typeOfCargo}</p>
                    <p>Email or phone: {item.emailOrPhone}</p>
                    <p>Required service: {item.requiredService}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
