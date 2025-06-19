import React from "react";

const FeaturesCard = ({ title, image }) => {
  return (
    <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-transform transform hover:scale-[1.03] hover:border-purple-500/20 duration-300">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 text-center">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
};


export default FeaturesCard;