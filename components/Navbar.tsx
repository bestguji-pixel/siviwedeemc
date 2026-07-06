"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold gradient-text">SiwiDeeMC</div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="hover:text-orange-500 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="hover:text-orange-500 transition duration-300"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="hover:text-orange-500 transition duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="btn-primary text-sm"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link
              href="/"
              className="block px-3 py-2 text-white hover:text-orange-500"
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="block px-3 py-2 text-white hover:text-orange-500"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-white hover:text-orange-500"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-white hover:text-orange-500"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
