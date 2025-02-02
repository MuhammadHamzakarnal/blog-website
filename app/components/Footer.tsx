"use client";

import Link from 'next/link';

import { LuFacebook, LuInstagram, LuTwitter,LuYoutube } from "react-icons/lu";

import { Poppins } from 'next/font/google'

// Initialize the Poppins font
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],

})
const Footer = () => {
  return (
    <footer className={`${poppins.className} bg-gradient-to-r from-[#86c9dd] to-[#a078d4]  text-white py-8 mt-36`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-bold text-gray-600">About Pakistan Fighter Jets Blog</h2>
            <p className="mt-2 text-gray-900">
              A blog dedicated to the latest updates on Pakistan fighter jets aviation technology and military aircraft.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold text-gray-600">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li><Link href="/" className="text-gray-900 hover:text-white">Home</Link></li>
              <li><Link href="/Jets" className="text-gray-900 hover:text-white">Jets</Link></li>
              <li><Link href="/About" className="text-gray-900 hover:text-white">About</Link></li>
              <li><Link href="/Contact" className="text-gray-900 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-lg font-bold text-gray-600">Follow Us</h2>
            <div className="mt-2 flex space-x-4">
              <Link href="#" className="text-gray-900 hover:text-white">
              <LuFacebook size={24} />
              </Link>
              <Link href="#" className="text-gray-900 hover:text-white">
              <LuTwitter size={24} />
              </Link>
              <Link href="#" className="text-gray-900 hover:text-white">
              <LuInstagram size={24} />
              </Link>
              <Link href="#" className="text-gray-900 hover:text-white">
                <LuYoutube size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-900">
          <p>&copy; {new Date().getFullYear()} Pakistan Fighter Jets Blog. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
