import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Careers', path: '/careers' },
    { name: 'Company', path: '/company' },
    { name: 'Contact', path: '/contact' },
    { name: 'Leadership', path: '/leadership' },
  ];

  return (
    <nav
      className="bg-white shadow-sm sticky top-0 z-20"
      role="navigation"
      aria-label="Primary Navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" aria-label="Orvion IntelliAct Automation Home">
          <img
            src="https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/Logo%20Final.jpg/:/rs=w:202,h:200,cg:true,m/cr=w:202,h:200/qt=q:95"
            alt="Orvion IntelliAct Automation Logo"
            className="h-12 md:h-14"
          />
        </Link>
        <ul className="hidden md:flex space-x-8 text-base font-medium text-gray-700">
          {navItems.map(({ name, path }) => (
            <li
              key={name}
              className="hover:text-blue-600 cursor-pointer transition-colors duration-200"
            >
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
