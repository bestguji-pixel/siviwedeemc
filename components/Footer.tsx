"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-orange-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">SiwiDeeMC</h3>
            <p className="text-gray-400 text-sm">
              Creative MC, Music Producer & Brand Builder
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-orange-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-orange-500 transition"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-500 transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-orange-500 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Me</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SoundCloud
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: info@siviwedeemc.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Location: Your City, Country</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-orange-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} SiwiDeeMC. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-orange-500 transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-orange-500 transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
