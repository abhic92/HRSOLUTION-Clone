import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../assets/logo.webp'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
        </div>

        {/* Navigation links */}
        <ul className="hidden md:flex space-x-28 font-serif font-bold">
          <li><a href="#home" className="text-black-100 hover:text-blue-700 transition">Home</a></li>
          <li><a href="#about-us" className="text-black-100 hover:text-blue-700 transition">About Us</a></li>
          <li><a href="#services" className="text-black-100 hover:text-blue-700 transition">Services</a></li>
          <li><a href="#initiatives" className="text-black-100 hover:text-blue-700 transition">Initiatives</a></li>
          <li><a href="#blogs" className="text-black-100 hover:text-blue-700 transition">Blogs</a></li>
          <li><a href="#vacancies" className="text-black-100 hover:text-blue-700 transition">Vacancies</a></li>
        </ul>

        {/* Contact button using Link */}
        <Link to="/contact" className="hidden md:inline-block bg-blue-900 text-white px-5 py-2 rounded-full hover:bg-blue-500 transition">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;