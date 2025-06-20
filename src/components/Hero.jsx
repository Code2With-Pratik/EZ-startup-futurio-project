import React from "react";
import bgImage from "../assets/HeroBgImage.png";

const Hero = () => (
  <section
    id="hero"
    className="relative w-full h-screen overflow-hidden text-center px-4 md:px-8 lg:px-20 flex flex-col justify-center items-center"
  >
    {/* Background image */}
    <img
      src={bgImage}
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover z-0"
    />

    {/* Content */}
    <div className="relative z-20 text-white max-w-4xl w-full">
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-wide">
        We provide solutions
        <br className="hidden sm:block" />
        for your business!
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-white mx-auto mb-8 sm:mb-10 font-medium sm:font-semibold tracking-wide bg-black/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-5 shadow-lg max-w-[95%] sm:max-w-2xl">
        At EZ Startup Futurio Pvt Ltd, we are passionate about turning visionary
        ideas into powerful digital realities. As a dynamic IT Solutions and
        PR company, we empower businesses to thrive in today’s fast-paced
        digital ecosystem. With a team of creative minds and technical experts,
        we specialize in a wide range of services including
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
        <a
            href="#connect"
            className="bg-gradient-to-br from-cyan-500 to-indigo-500 text-white text-sm sm:text-base font-semibold px-8 py-4 rounded-full shadow-xl hover:opacity-90 transition-all"
          >
            Let’s Connect
          </a>

          <a
            href="#services"
            className="border border-cyan-400 text-white text-sm sm:text-base font-semibold px-8 py-4 rounded-full shadow-xl hover:bg-gradient-to-br from-cyan-500 to-indigo-500 transition-all"
          >
            Explore Our Work
          </a>
      </div>
    </div>
  </section>
);

export default Hero;
