import React from 'react';
import bgImage from '../assets/HeroBgImage.png';

const Hero = () => (
  <section className="relative w-full h-screen overflow-hidden text-center px-4 md:px-8 lg:px-20 flex flex-col justify-center items-center">
    {/* Background image using <img> */}
    <img
      src={bgImage}
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover z-0"
    />

    {/* Content */}
    <div className="relative z-20 text-white">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-wider">
        Elevate Your Online<br /> Presence
      </h1>
      <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10 font-semibold tracking-wide">
        At Booknetservices, we specialize in tailored PR solutions that enhance your digital visibility.
        Let us help you connect your brand effectively.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-6">
        <button className="bg-gradient-to-br from-cyan-500 to-indigo-500 text-white font-medium px-8 py-4 rounded-[24px] shadow-lg hover:opacity-90 transition">
          Let’s Connect
        </button>
        <button className="border border-cyan-400 text-white font-medium px-8 py-4 rounded-[24px] shadow-sm hover:bg-gradient-to-br from-cyan-500 to-indigo-500 transition">
          Explore Our Work
        </button>
      </div>
    </div>
  </section>
);

export default Hero;