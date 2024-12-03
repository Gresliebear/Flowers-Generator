// src/components/Navbar.tsx
'use client';

import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-green-800 p-4">
      <nav className="flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          Blooming For You
        </div>

        {/* Mobile menu toggle button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navbar links for large screens */}
        <div className={`hidden lg:flex space-x-8 text-white ${isMenuOpen ? 'block' : 'hidden'}`}>
          {/* <a href="#" className="hover:text-blue-300">Home</a>
          <a href="#about" className="hover:text-blue-300">About</a>
          <a href="#services" className="hover:text-blue-300">Services</a>
          <a href="#contact" className="hover:text-blue-300">Contact</a> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
