import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo / About */}
        
        <div>
            <a href="#hero">
           <img 
            src="/log1.png" 
            alt="Greenwood Secondary Logo" 
            className="w-32 mb-4"
          /> </a>
          <p className="text-gray-400 text-sm">
            Nurturing excellence in academics, sports, and co-curricular
            activities to produce responsible global citizens.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-green-400">Home</a></li>
            <li><a href="#about" className="hover:text-green-400">About Us</a></li>
            <li><a href="#academics" className="hover:text-green-400">Academics</a></li>
            <li><a href="#admissions" className="hover:text-green-400">Admissions</a></li>
            <li><a href="#co-curricular" className="hover:text-green-400">Co-Curricular</a></li>
            <li><a href="#news-events" className="hover:text-green-400">News & Events</a></li>
            <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-400 text-2xl">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-green-400 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-green-400 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-green-400 text-2xl">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Greenwood Secondary School. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
