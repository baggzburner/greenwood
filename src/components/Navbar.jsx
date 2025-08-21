import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        
        {/* Logo + School Name */}
        <a href="#hero" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
          <img
            src="/log.png"
            alt="School Logo"
            className="w-20 h-20 rounded-full"
          />
          <span className="text-white font-bold text-lg">
            Greenwood Secondary School
          </span>
        </a>

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
            <a href="#hero" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>About Us</a>
          </li>
          <li>
            <a href="#academics" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Academics</a>
          </li>
          <li>
            <a href="#admissions" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Admissions</a>
          </li>
          <li>
            <a href="#co-curricular" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Co-Curricular</a>
          </li>
          <li>
            <a href="#news-events" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>News & Events</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
