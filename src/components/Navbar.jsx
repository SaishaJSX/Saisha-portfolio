import React, { useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import gsap from 'gsap';

const Navbar = () => {
  useEffect(() => {
    // Navbar animation on page load
    gsap.fromTo(
      '.navbar', // Target the entire navbar
      { opacity: 0, y: -50 }, // Initial state (hidden and above)
      { opacity: 1, y: 0, duration: 1 } // Final state (visible and at original position)
    );

    // Navbar links animation (fade in from the right)
    gsap.fromTo(
      '.nav-links li',
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1, // Stagger the animation for each item
        duration: 0.5,
        delay: 0.5, // Delay to start after the navbar animation
      }
    );
  }, []);

  return (
    <nav className="navbar bg-white py-4 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-normal text-pink-600 flex items-center space-x-2">
          <FaHeart className="text-pink-600" />
          <span>Saisha Karki</span>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links hidden md:flex space-x-8 text-gray-700 font-normal">
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
