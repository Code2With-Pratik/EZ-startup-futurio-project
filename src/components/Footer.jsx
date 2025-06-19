import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const socialIcons = [
  { icon: <FaFacebookF />, link: '#' },
  { icon: <FaTwitter />, link: '#' },
  { icon: <FaInstagram />, link: '#' },
  { icon: <FaLinkedin />, link: '#' },
  { icon: <FaYoutube />, link: '#' },
];

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-tr from-black via-gray-900 to-black text-white py-10 px-6 sm:px-10 md:px-20 overflow-hidden">
      {/* Glow circle decoration */}
      <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-purple-800 opacity-20 rounded-full blur-3xl z-0"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Brand?</h2>

        <div className="inline-block bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full mb-8">
          <p className="text-purple-200 text-sm sm:text-base">Booknetservicesinfo@gmail.com</p>
        </div>

        <div className="flex justify-center items-center gap-5 sm:gap-6 mt-4 flex-wrap">
          {socialIcons.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-purple-300 transition-all"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-sm text-purple-300">
            &copy; 2025 Booknetservices. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
