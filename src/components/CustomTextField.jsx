import React from 'react'

export default function CustomTextField({ placeholder, value, onChange }) {
  return (
    <div className="w-full max-w-md sm:max-w-lg md:max-w-xl mb-3 sm:mb-4 md:mb-5 h-[48px] sm:h-[50px] md:h-[52px] px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5 rounded-md outline outline-1 outline-offset-[-1px] outline-[#e0e2e9] hover:outline-[#c0c4d0] focus-within:outline-[#8BC53F] focus-within:outline-2 transition-all duration-200 inline-flex justify-start items-center gap-2.5">
    <input
      type="text"
      placeholder={placeholder}
      value={value}         
      onChange={onChange}   
      className="flex-1 bg-transparent outline-none text-black text-xs sm:text-sm md:text-base font-medium font-['Inter'] leading-tight sm:leading-normal placeholder:text-[#9ca3af] placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base transition-colors duration-200"
    />
  </div>
  )
}
