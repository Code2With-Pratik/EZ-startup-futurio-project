import React from 'react';
import bgImage from '../assets/HeroBgImage.png';

const Hero = () => (
  <section className="relative w-full h-screen overflow-hidden text-center px-4 md:px-8 lg:px-20 flex flex-col justify-center items-center">
    {/* Background image using <img> */}
    <img
      src={bgImage}
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover z-0 opacity-[80%]"
    />

    {/* Overlay shapes */}
    <div className="absolute inset-0 z-10">
      <div className="absolute -left-16 -top-16 w-52 h-52 bg-gradient-to-br from-purple-300 to-indigo-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -right-20 bottom-10 w-64 h-64 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-3xl opacity-25"></div>
      <div className="absolute top-1/2 left-0 w-8 h-40 bg-gradient-to-br from-purple-400 to-purple-200 rounded-full opacity-20 transform -translate-y-1/2 rotate-12"></div>
      <div className="absolute bottom-1/3 right-10 w-6 h-32 bg-gradient-to-br from-purple-400 to-purple-200 rounded-full opacity-20 transform rotate-45"></div>
    </div>

    {/* Content */}
    <div className="relative z-20 text-[#1c1b33]">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-wider">
        Elevate Your Online<br /> Presence
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 font-semibold tracking-wide">
        At Booknetservices, we specialize in tailored PR solutions that enhance your digital visibility.
        Let us help you connect your brand effectively.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-6">
        <button className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white font-medium px-8 py-4 rounded-[24px] shadow-lg hover:opacity-90 transition">
          Let’s Connect
        </button>
        <button className="border border-gray-900 text-gray-900 font-medium px-8 py-4 rounded-[24px] shadow-sm hover:bg-purple-200 transition">
          Explore Our Work
        </button>
      </div>
    </div>
  </section>
);

export default Hero;