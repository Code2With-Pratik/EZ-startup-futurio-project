import React from 'react';
import { FaStar } from 'react-icons/fa';

const FeedbackCard = ({ data }) => {
  return (
    <div className="h-[340px] flex flex-col justify-around min-w-full sm:min-w-[80%] md:min-w-[50%] lg:min-w-[40%] xl:min-w-[30%] 
      flex-shrink-0 bg-gray-900  backdrop-blur-md border border-white/10 rounded-xl px-6 py-8   shadow-lg 
      transition-transform hover:scale-[1.02]">
      
      <div>
        <div className="flex mb-4 text-yellow-400">
          {Array.from({ length: data.stars }).map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <p className="text-gray-200 italic text-sm leading-relaxed line-clamp-5">
          &ldquo;{data.feedback}&rdquo;
        </p>
      </div>

      <div className="flex items-center gap-4 pt-6">
        <img
          src={data.client_image}
          alt={data.client_name}
          className="w-12 h-12 rounded-full object-cover border-2 border-white"
        />
        <div>
          <h4 className="text-white font-semibold">{data.client_name}</h4>
          <p className="text-sm text-purple-200">{data.client_designation}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
