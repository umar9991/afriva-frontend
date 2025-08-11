import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function CustomTextField({ placeholder }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(prev => !prev);

  return (
    <div className="w-full max-w-md mb-[33px] self-stretch h-[48px] px-[15px] py-2.5 rounded-md outline outline-1 outline-offset-[-1px] outline-[#e0e2e9] inline-flex justify-between items-center gap-2.5">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-black text-[13px] font-medium font-['Inter'] leading-[14px]"
      />
      <button onClick={togglePassword} type="button" className="focus:outline-none">
        {showPassword ? (
          <EyeSlashIcon className="h-5 w-5 text-gray-600" />
        ) : (
          <EyeIcon className="h-5 w-5 text-gray-600" />
        )}
      </button>
    </div>
  );
}
