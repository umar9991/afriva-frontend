import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CustomButton({ label = "Continue", to = "/"  }) {
    const navigate = useNavigate();

return (
    <div
      onClick={() => navigate(to)}
      className="cursor-pointer max-w-[514.99px] h-[50px] relative rounded-lg mt-[20px]"
    >
      <div className="absolute inset-0 bg-[#8BC53F] rounded-lg shadow-[0px_10px_20px_0px_rgba(58,41,106,0.20)]" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-semibold font-['Inter']">
        {label}
      </div>
    </div>
  );
}