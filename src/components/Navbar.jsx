import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo + School Name */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/log.png"
            alt="School Logo"
            className="w-20 h-20 rounded-full"
          />
          <span className="text-white font-bold text-lg">
            Greenwood Secondary School
          </span>
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Menu Items */}
        <ul
          className={`md:flex md:space-x-8 text-white font-medium absolute md:static top-14 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0 transition-all ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link to="/" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>About Us</Link>
          </li>
          <li>
            <Link to="/academics" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Academics</Link>
          </li>
          <li>
            <Link to="/admissions" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Admissions</Link>
          </li>
          <li>
            <Link to="/co-curricular" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Co-curricular</Link>
          </li>
          <li>
            <Link to="/news" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>News & Events</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
