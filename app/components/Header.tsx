'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Poppins } from 'next/font/google'

// Initialize the Poppins font
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],

})
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`${poppins.className} sticky top-0 bg-gradient-to-r from-[#86c9dd] to-[#a078d4] shadow-md z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-2xl font-bold text-gray-900">Fighter Jets Blog</h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link href="/Jets" className="text-gray-700 hover:text-gray-900">Jets</Link>
            <Link href="/About" className="text-gray-700 hover:text-gray-900">About</Link>
            <Link href="/Contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col p-4 space-y-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/Jets" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>Jets</Link>
            <Link href="/Cbout" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/Contact" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
