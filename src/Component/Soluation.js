import React, { useState } from "react";
import Navigation from "./Navigation";
const productCategories = [
  {
    category: "Control System",
    items: [
      "SCADA", "DCS", "PLC", "RTU", "Safety PLC", "Remote I/O/ISO",
      "SIL Barrier", "HART Communicator", "Power Surge Protection"
    ],
    image: "https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/blob-9e9dba5.png/:/cr=t:0%25,l:12.59%25,w:74.81%25,h:100%25/rs=w:360,h:271,cg:true"
  },
  {
    category: "Field Instruments",
    items: [
      "Pressure Transmitter", "Flow Transmitter", "Level Transmitter",
      "Process Calibrator", "Gas Detector", "RTD / Thermocouples"
    ],
    image: "https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/blob-ae06115.png/:/cr=t:0%25,l:12.59%25,w:74.81%25,h:100%25/rs=w:360,h:271,cg:true"
  },
  {
    category: "Software’s",
    items: [
      "Industrial OS", "Remote Monitoring", "Digital Twin", "Energy Management",
      "Data Historian", "Alarm Management"
    ],
    image: "https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/blob-56450cc.png/:/cr=t:0%25,l:12.59%25,w:74.81%25,h:100%25/rs=w:360,h:271,cg:true"
  },
  {
    category: "Electrical",
    items: [
      "Control Panel", "MCC Panel", "VFD Panel", "Bus Duct", "LT/HT Panel"
    ],
    image: "https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/blob-a5423b3.png/:/cr=t:0%25,l:12.59%25,w:74.81%25,h:100%25/rs=w:360,h:271,cg:true"
  }
];

export default function AllProductsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = productCategories[activeIndex];

 return (
    <div>
  <Navigation/>
    <section className="px-6 md:px-16 py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Control and Safety Systems Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {productCategories.map((productCategories, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl shadow hover:shadow-lg transition duration-300 p-6 flex flex-col"
          >
            <img
              src={productCategories.image}
              alt={`${productCategories.category} image`}
              className="w-24 h-24 mx-auto object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-center text-blue-800 mb-2">{productCategories.title}</h3>
            <p className="text-gray-600 text-sm mb-4 text-center">{productCategories.description}</p>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
              {productCategories.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
    </div>
   
  );
}