import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";

const products = [
  {
    title: "SCADA",
    image: "https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/SCADA-9ef8222.jpg/:/cr=t:0%25,l:0.96%25,w:98.09%25,h:100%25/rs=w:480,h:361,cg:true",
    description: `Special features SCADA software supports various industrial communication standards like OPC, Ethernet/IP, and Modbus.`,
    items: ["Pipeline SCADA", "Oil & Gas SCADA", "Terminal Automation", "General Utilities", "Pharma / WQ SCADA"],
  },
  {
    title: "DCS",
    image: "https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/DCS-05ed6c4.jpg/:/cr=t:0%25,l:0.96%25,w:98.09%25,h:100%25/rs=w:480,h:361,cg:true",
    description: `GE's WDPF and Mark VIe-based DCS solutions support high-reliability control of industrial processes.`,
    items: ["Versamax PLC", "RX3i Controller", "Mark VIe DCS", "WDPF"],
  },
  {
    title: "PLC",
    image: "https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/PLC-bf768c6.jpg/:/cr=t:0%25,l:0.96%25,w:98.09%25,h:100%25/rs=w:480,h:361,cg:true",
    description: `GE, Siemens & Allen Bradley PLCs support a range of automation applications from standalone to integrated systems.`,
    items: ["GCS-R", "Versamax", "RX3i", "RX7i"],
  },
  {
    title: "RTU",
    image: "https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/RTU-8db028a.jpg/:/cr=t:0%25,l:0.96%25,w:98.09%25,h:100%25/rs=w:480,h:361,cg:true",
    description: `GE's rugged RTU systems are ideal for remote monitoring, automation, and control in utility & oil sectors.`,
    items: ["WITS-DNP3", "Modbus RTU", "IEC 60870-5-104"],
  },
  {
    title: "SAFETY PLC",
    image: "https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/Safety%20PLC-a1c7c60.jpg/:/cr=t:0%25,l:0.96%25,w:98.09%25,h:100%25/rs=w:480,h:361,cg:true",
    description: `TÜV-certified safety PLCs for applications needing compliance with SIL3 or higher safety standards.`,
    items: ["Triconex", "HIMA", "ProSafe-RS", "GuardPLC"],
  },
  {
    title: "SIL BARRIER / ISOLATOR",
    image: "https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/Safety%20Barrier-56f0c7c.jpg/:/rs=w:480,h:361,cg:true,m/cr=w:480,h:361",
    description: `Certified devices for isolating and protecting safety loops in hazardous environments.`,
    items: ["Analog Input/Output", "RTD", "Thermocouple", "Pressure Transmitter"],
  },
  {
    title: "SIL3 RELAYS",
    image: "https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/SIL3%20Relay-8b4e804.jpg/:/cr=t:0%25,l:0.96%25,w:98.09%25,h:100%25/rs=w:480,h:361,cg:true",
    description: `SIL3 Certified relays ensure safe shutdown operations and isolation in emergency cases.`,
    items: ["Single/dual-channel", "Loop monitoring", "Failsafe circuits"],
  },
  {
    title: "HART COMMUNICATOR",
    image: "https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/HART-4eefdf9.jpg/:/cr=t:0%25,l:0.96%25,w:98.09%25,h:100%25/rs=w:480,h:361,cg:true",
    description: `Handheld & PC-based HART communicators for diagnostics, calibration, and loop tuning.`,
    items: ["HART Calibrator", "Process Calibrator"],
  },
  {
    title: "SURGE PROTECTION DEVICE",
    image: "https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/SPD-d84ffdb.jpg/:/cr=t:0%25,l:0.96%25,w:98.09%25,h:100%25/rs=w:480,h:361,cg:true",
    description: `SPDs for protecting field and control devices from voltage spikes in sensitive applications.`,
    items: ["Analog Loop SPD", "Power Line SPD", "PLC I/O SPD"],
  },
];

export default function ProductsSection() {
   const timer = useRef();
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
  });

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 2000); // change slide every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [instanceRef]);

  return (
    <section className="px-6 md:px-14 py-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Control and Safety Systems Products
      </h2>

      <div ref={sliderRef} className="keen-slider">
        {products.map((product, index) => (
          <div key={index} className="keen-slider__slide bg-gray-50 rounded-2xl shadow p-6">
             <img
                  src={product.image}
                  alt={`${product.title} solution illustration`}
                  className="h-50 md:h-72 w-full object-cover"
                  loading="lazy"
                />
            <h3 className="text-xl font-semibold text-center text-blue-800 mb-2">{product.title}</h3>
            <p className="text-gray-600 text-sm text-center mb-3">{product.description}</p>
            <p className="text-sm text-gray-700 text-center">
            {product.items.join(" • ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
