import React from 'react'

export default function CustomTextField({ placeholder}) {
  return (
    <div className="w-full max-w-md mb-[15px] self-stretch h-[48px]  px-[15px] py-2.5 rounded-md outline outline-1 outline-offset-[-1px] outline-[#e0e2e9] inline-flex justify-start items-center gap-2.5">
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-black text-[13px] font-medium font-['Inter'] leading-[14px]"
      />
    </div>
  )
}
