import React from 'react';

const coreSolutions = [
  {
    title: 'Refinery Automation',
    description: 'Addressing process optimization, safety, and compliance with advanced process control and predictive maintenance.',
    image: 'https://wallpapers.com/images/thumbnail/industry-pictures-1600-x-893-e06lvqjw6hbpth3l.webp',
  },
  {
    title: 'Terminal Automation',
    description: 'End-to-end automation in fuel handling, truck systems, and logistics for secure and efficient operations.',
    image: 'https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/terminal.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:720,h:720,cg:true',
  },
  {
    title: 'Power Automation',
    description: 'Automation for power plants covering load management, energy monitoring, and sustainability.',
    image: 'https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/Power.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:720,h:720,cg:true',
  },
  {
    title: 'Water SCADA',
    description: 'Smart water distribution and treatment systems with real-time monitoring and regulatory compliance.',
    image: 'https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/Water.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:720,h:720,cg:true',
  },
  {
    title: 'Chemical',
    description: 'Automation in chemical processes to increase efficiency and safety, minimizing manual interventions.',
    image: 'https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/Chemical.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:720,h:720,cg:true',
  },
  {
    title: 'Pharma',
    description: 'Automation in pharmaceutical processes for compliance, precision, and enhanced productivity.',
    image: 'https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/Pharma.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:720,h:720,cg:true',
  },
  {
    title: 'Metals and Mining',
    description: 'Automation solutions to optimize mining operations, safety, and resource management.',
    image: 'https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/metal.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:720,h:720,cg:true',
  },
];

export default function HomePage() {
return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white text-center py-3 text-base font-semibold" role="banner">
        An Automation Startup Company approved by Govt of India & ISO Certified
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-20" role="navigation" aria-label="Primary Navigation">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" aria-label="Orvion IntelliAct Automation Home">
            <img
              src="https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/Logo%20Final.jpg/:/rs=w:202,h:200,cg:true,m/cr=w:202,h:200/qt=q:95"
              alt="Orvion IntelliAct Automation Logo"
              className="h-12 md:h-14"
            />
          </a>
          <ul className="hidden md:flex space-x-8 text-base font-medium text-gray-700">
            {['Home', 'Products', 'Solutions', 'Careers', 'Company', 'Contact'].map((item) => (
              <li key={item} className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Banner Section */}
      <section
        className="relative w-full h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661878008007-7a13bf31c14b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFudWZhY3R1cmluZ3xlbnwwfHwwfHx8MA%3D%3D')", // Place your banner image in /public/images
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white px-4 md:px-10">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Orvion IntelliAct<br />
              Automation Private Limited
            </h1>
            <p className="text-lg md:text-xl font-medium italic mb-6">
              Anything and Everything in Automation
            </p>
            <button className="bg-black text-white px-6 py-3 border border-white hover:bg-white hover:text-black transition font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <main className="px-6 py-20" role="main">
        <section aria-labelledby="core-solutions-heading">
          <h2 id="core-solutions-heading" className="text-3xl font-bold mb-8 text-gray-900 text-center">
            Our Core Solutions
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {coreSolutions.map((solution, index) => (
              <article
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden flex flex-col"
              >
                <img
                  src={solution.image}
                  alt={`${solution.title} solution illustration`}
                  className="h-64 md:h-72 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">{solution.title}</h3>
                  <p className="text-gray-600 text-base mb-6 flex-grow">{solution.description}</p>
                  <button
                    className="bg-blue-700 text-white text-base px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-200 self-start"
                    aria-label={`Learn more about ${solution.title}`}
                  >
                    Learn More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-20 py-8 text-center text-sm text-gray-500" role="contentinfo">
        © 2025 Orvion IntelliAct Automation Pvt. Ltd. All rights reserved.
      </footer>
    </div>
  );

}