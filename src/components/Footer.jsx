// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-3">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black border border-gray-300 hover:bg-orange-500 hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black border border-gray-300 hover:bg-orange-500 hover:text-white transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black border border-gray-300 hover:bg-orange-500 hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black border border-gray-300 hover:bg-orange-500 hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
          <p className="text-gray-600 text-sm">
            Food, 10001, 5th Avenue, #06 lane street, NY - 62617.
          </p>
          <p className="text-gray-600 text-sm mt-2">+1(21) 234 4567</p>
          <p className="text-gray-600 text-sm">info@example.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Blog Posts", "Contact"].map((link, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <span className="text-orange-500 font-bold">&gt;</span>
                <a href="#" className="hover:text-orange-500 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Help & Support</h2>
          <ul className="space-y-2 text-sm">
            {["Live Chat", "FAQs", "Support", "Terms of Use"].map((link, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <span className="text-orange-500 font-bold">&gt;</span>
                <a href="#" className="hover:text-orange-500 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Food. All rights reserved.
      </div>
    </footer>
  );
}
