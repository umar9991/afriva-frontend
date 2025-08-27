import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function PasswordField({ placeholder, value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(prev => !prev);

  return (
    <div className="w-full max-w-md sm:max-w-lg md:max-w-xl mb-6 sm:mb-7 md:mb-8 h-[48px] sm:h-[50px] md:h-[52px] px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5 rounded-md outline outline-1 outline-offset-[-1px] outline-[#e0e2e9] hover:outline-[#c0c4d0] focus-within:outline-[#8BC53F] focus-within:outline-2 transition-all duration-200 inline-flex justify-between items-center gap-2.5">
    <input
      type={showPassword ? "text" : "password"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}    
      className="flex-1 bg-transparent outline-none text-black text-xs sm:text-sm md:text-base font-medium font-['Inter'] leading-tight sm:leading-normal placeholder:text-[#9ca3af] placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base transition-colors duration-200"
    />
    <button
      onClick={togglePassword}
      type="button"
      className="focus:outline-none hover:bg-gray-100 rounded-sm p-1 transition-all duration-200 flex items-center justify-center"
    >
      {showPassword ? (
        <EyeSlashIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-600 hover:text-gray-800 transition-colors duration-200" />
      ) : (
        <EyeIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-600 hover:text-gray-800 transition-colors duration-200" />
      )}
    </button>
  </div>
  );
}
