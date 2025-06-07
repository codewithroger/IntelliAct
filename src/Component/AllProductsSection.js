import React, { useState } from "react";

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
    <section className="py-20 bg-gray-50" id="products">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">All Products List</h2>
      <div className="flex flex-wrap justify-center mb-8 gap-4 px-4">
        {productCategories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-5 py-2 rounded-full font-medium transition ${
              activeIndex === index
                ? "bg-blue-800 text-white"
                : "bg-white border border-blue-200 text-blue-700 hover:bg-blue-50"
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8 flex flex-col lg:flex-row items-center">
        <img src={active.image} alt={active.category} className="w-full max-w-sm rounded-lg mb-6 lg:mb-0 lg:mr-10" />
        <ul className="list-disc list-inside text-gray-800 text-base leading-relaxed space-y-1">
          {active.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
