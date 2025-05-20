import React from 'react';
import { FaHeart } from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-normal text-pink-600 flex items-center space-x-2">
          <FaHeart className="text-pink-600" />
          <span>Saisha Karki</span>
        </div>

        {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8 text-gray-700 font-normal">
          <li><a href="#about" className="hover:text-pink-500">About</a></li>
          <li><a href="#education" className="hover:text-pink-500">Education</a></li>
          <li><a href="#projects" className="hover:text-pink-500">Projects</a></li>
          <li><a href="#skills" className="hover:text-pink-500">Skills</a></li>
          <li><a href="#contact" className="hover:text-pink-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
