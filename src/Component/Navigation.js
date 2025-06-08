import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Careers', path: '/careers' },
  { name: 'Company', path: '/company' },
  { name: 'Contact', path: '/contact' },
  { name: 'Leadership', path: '/leadership' },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" aria-label="Orvion IntelliAct Home">
          <img
            src="https://img1.wsimg.com/isteam/ip/e5e1f2a6-28cb-4358-bddc-d0b930b52682/Logo%20Final.jpg/:/rs=w:202,h:200,cg:true,m/cr=w:202,h:200/qt=q:95"
            alt="Orvion IntelliAct Logo"
            className="h-12 md:h-14"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-base font-medium text-gray-700">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                    : 'hover:text-blue-500 transition-colors duration-200'
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden text-2xl text-gray-800 cursor-pointer">
          {menuOpen ? <FiX onClick={toggleMenu} /> : <FiMenu onClick={toggleMenu} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-4 bg-white shadow-inner text-gray-700">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 font-semibold'
                    : 'hover:text-blue-500 transition-colors duration-200'
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
