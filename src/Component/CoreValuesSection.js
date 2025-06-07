import React from "react";
const coreValues = [
  {
    title: "Technology",
    image: "https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/Technology.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true",
    points: [
      "Application of latest tools and knowledge",
      "Create systems and solve problems",
      "Innovations in sustainable energy",
      "Technologies for future sustainability"
    ]
  },
  {
    title: "Industry Expertise",
    image: "https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/blob-8b44737.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true",
    points: [
      "Broad industrial understanding",
      "Industry-specific insights",
      "Customized end-to-end solutions"
    ]
  },
  {
    title: "Quality",
    image: "https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/Quality.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true",
    points: [
      "Timely delivery of projects and products",
      "24/7 support and QA",
      "Customer-centric engineering focus"
    ]
  },
  {
    title: "Customer Centric Approach",
    image: "https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/Customer%20Centric.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true",
    points: [
      "Strong OEM relationships",
      "Direct customer support",
      "Localized & global brand partnerships"
    ]
  }
];

export default function CoreValuesSection() {
  return (
    <section className="py-16 bg-white" id="core-values">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Core Values</h2>
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 px-6 md:px-12">
        {coreValues.map((value, index) => (
          <div key={index} className="text-center hover:shadow-xl transition rounded-xl p-4 group">
            <img
              src={value.image}
              alt={value.title}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-blue-200 group-hover:border-blue-600"
            />
            <h3 className="text-lg font-semibold text-blue-800 mb-2">{value.title}</h3>
            <ul className="text-sm text-gray-700 list-disc list-inside text-left mx-auto max-w-xs">
              {value.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
