import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import Navigation from "./Navigation";
const directors = [
  {
    name: "Sachin Samant",
    title: "Director, Orvion IntelliAct Automation Pvt Ltd",
    image: "https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/Sachin%20Photo-d5d862a.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,h:600,cg:true",
    about:
      "With over 28+ years of experience in a MNC with Industrial Automation industry...",
    highlights: [
      "Strategic Planning and Execution",
      "Reward and Profit Optimization",
      "Market Positioning and Innovation",
      "Team Leadership and Development",
      "Stakeholder Engagement",
    ],
    linkedin: "https://linkedin.com/in/sachinsamant"
  },
  {
    name: "Sreedharan P",
    title: "Director, Orvion IntelliAct Automation Pvt Ltd",
    image: "https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/Sree%20Photo1.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,h:600,cg:true",
    about:
      "With over 24+ years of experience in Oil and GAS Sector in MNC with Industrial Automation...",
    highlights: [
      "Value Engineering & Project/Operations Management",
      "Budget and Resource Management",
      "Risk Mitigation and Compliance",
    ],
    linkedin: "https://linkedin.com/in/sreedharanp"
  },
];


const DirectorCard = ({ name, title, image, about, highlights, linkedin }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 100 }}
    className="w-full md:w-[48%] shadow-2xl rounded-2xl bg-white p-6 mb-8"
  >
    <div className="flex flex-col md:flex-row gap-6 items-center">
      <img
        src={image}
        alt={name}
        className="w-40 h-40 rounded-full object-cover border-4 border-blue-300"
      />
      <div className="text-left">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">{name}</h2>
        <h3 className="text-sm text-gray-500 mb-4">{title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed mb-3 line-clamp-4">
          {about}
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-600">
          {highlights.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-600 mt-4 text-sm hover:underline"
        >
          <FaLinkedin /> Connect on LinkedIn
        </a>
      </div>
    </div>
  </motion.div>
);

export default function LeadershipSection() {
  return (
    <div>
        <Navigation/>
  <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-12">
          Meet Our Leadership
        </h1>
        <div className="flex flex-wrap justify-between gap-6">
          {directors.map((director, index) => (
            <DirectorCard key={index} {...director} />
          ))}
        </div>
      </div>
    </section>
    </div>
  
  );
}
