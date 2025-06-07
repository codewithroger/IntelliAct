import React from "react";

const sections = [
  {
    title: "Our Partners",
    logos: [
      "https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/Drager.jpg/:/rs=w:370,cg:true,m",
      "https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/KIDDE.jpg/:/rs=w:370,cg:true,m",
      "https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/HTS.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:370,cg:true",
      "https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/blob-3f08277.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:370,cg:true",
    ],
  },
    
];

const LogoSection = ({ title, logos }) => (
  <section className="mb-16">
    <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-2 mb-6 text-center">
      {title}
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
      {logos.map((logo, idx) => (
        <div
          key={idx}
          className="bg-white p-3 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
        >
          <img
            src={logo}
            alt="Partner Logo"
            className="h-16 object-contain mx-auto"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </section>
);

const LogoGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-b from-white via-gray-50 to-white">
      {sections.map((section, index) => (
        <LogoSection key={index} {...section} />
      ))}
    </div>
  );
};

export default LogoGrid;
