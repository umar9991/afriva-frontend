import React from "react";
import { Star } from "lucide-react";

const TestimonialCard = () => {
  return (
    <div
      className="w-full max-w-[360px] sm:max-w-[400px] md:max-w-[420px] lg:max-w-[460px] px-5 sm:px-6 md:px-7 lg:px-8 py-5 sm:py-6 md:py-7 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-start items-start flex-wrap content-start overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out"
    >
      <div className="flex-1 flex justify-between items-start">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-[15px]">
          
          {/* 5 Stars */}
          <div className="inline-flex justify-start items-center gap-[6px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} fill="gold" stroke="gold" />
            ))}
          </div>

          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="inline-flex justify-start items-center gap-1">
              <div className="text-black text-lg sm:text-xl font-bold font-['Inter'] leading-snug">Alex K.</div>
              <div className="w-6 h-6 relative" />
            </div>
            <div className="self-stretch text-black/60 text-sm sm:text-base font-normal font-['Inter'] leading-snug">
              "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co.
              The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
