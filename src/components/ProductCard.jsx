import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function ProductCard({ image, name, price, rating }) {
  return (
    <div className="w-[295px]">
      <div className="w-[295px] h-[298px] relative bg-[#f0eeed] rounded-[20px] overflow-hidden mb-2">
        <img
          src={image}
          alt="product"
        />
      </div>

      <div className="text-xl font-bold font-['Inter'] text-black leading-tight mb-1">
        {name}
      </div>
  <div className="inline-flex items-center gap-[13px] mb-2">
        <div className="flex items-center gap-[3px]">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} size={14} color="#ffc533" />
          ))}
        </div>
        <div className="text-sm font-normal font-['Inter'] text-black">
          {rating}/<span className="text-black/60">5</span>
        </div>
      </div>
      <div className="text-2xl font-bold font-['Inter'] text-black">
        ${price}
      </div>
    </div>
  );
}
