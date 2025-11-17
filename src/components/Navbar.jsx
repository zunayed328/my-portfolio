import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">

        {/* LOGO */}
        <a href="#home" className="text-xl font-bold text-gray-800">
          MyPortfolio
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-800 hover:text-gray-500">Home</a>
          <a href="#about" className="text-gray-800 hover:text-gray-500">About</a>
          <a href="#projects" className="text-gray-800 hover:text-gray-500">Projects</a>
          <a href="#contact" className="text-gray-800 hover:text-gray-500">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-700 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 shadow-lg">
          <a href="#home" className="block text-gray-800">Home</a>
          <a href="#about" className="block text-gray-800">About</a>
          <a href="#projects" className="block text-gray-800">Projects</a>
          <a href="#contact" className="block text-gray-800">Contact</a>
        </div>
      )}
    </nav>
  );
}
