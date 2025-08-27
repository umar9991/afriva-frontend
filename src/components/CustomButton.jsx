import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CustomButton({ label = "Continue", to = "/", onClick }) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer w-full max-w-[514.99px] h-[50px] sm:h-[52px] md:h-[54px] relative rounded-lg mt-4 sm:mt-5 md:mt-6 mx-auto transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
    >
      {/* Background with responsive shadow */}
      <div className="absolute inset-0 bg-[#8BC53F] rounded-lg shadow-[0px_8px_16px_0px_rgba(58,41,106,0.15)] sm:shadow-[0px_10px_20px_0px_rgba(58,41,106,0.20)] hover:shadow-[0px_12px_24px_0px_rgba(58,41,106,0.25)] transition-shadow duration-200" />
      
      {/* Text with responsive sizing */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-semibold font-['Inter'] text-sm sm:text-base md:text-lg whitespace-nowrap px-4">
        {label}
      </div>
    </div>
  );
}