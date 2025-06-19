import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import aboutImage from '../assets//aboutImage.png';

const About = () => {
  return (
    <section id='about' className="relative w-full px-4 py-24 md:px-16 lg:px-28 bg-gradient-to-br from-[#aea0f0] via-[#ac68f4] to-[#798ed2] overflow-hidden">
      {/* Decorative animated blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 rounded-full blur-2xl opacity-20 -z-10 animate-spin-slow"></div>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Image Frame */}
        <div className="relative w-full lg:w-1/2 flex flex-col items-center">
          <div className="relative border-4 border-white/50 rounded-3xl p-2 shadow-2xl ">
            <img
              src={aboutImage}
              alt="About"
              className="w-full h-auto object-cover rounded-2xl transform hover:scale-102 transition duration-500 shadow-lg"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-white text-xl">
            <a href="#" className="hover:text-gray-300 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-300 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300 transition"><FaYoutube /></a>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1c1b33] leading-tight">
            Elevate Your Online <br className="hidden md:block" /> Presence with Us
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            At Booknetservices, I am dedicated to transforming the way businesses and individuals present themselves in the digital world.
            With a passion for storytelling and a keen eye for strategy, I work closely with professionals—be it doctors, real estate agents,
            lawyers, or artists—to create tailored PR solutions that resonate with their target audience.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Since our inception, we have proudly helped numerous clients enhance their online visibility,
            leading to significant growth in engagement and reputation. Our commitment to exceptional service
            has earned us the trust of our partners, making Booknetservices a leader in digital PR strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
