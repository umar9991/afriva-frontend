import React from 'react';

export default function OtpInput() {
  const otpLength = 4;

  return (
    <div className="inline-flex flex-col items-center gap-5">
      <div className="flex gap-4 md:gap-[43px] overflow-hidden">
        {Array.from({ length: otpLength }).map((_, index) => (
          <div
            key={index}
            className="mb-[32px] max-w-20 max-h-20 p-2 bg-white rounded-[99px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] 
                       outline outline-1 outline-offset-[-1px] outline-[#cfd4dc] 
                       flex justify-center items-center"
          >
            <input
              type="text"
              maxLength={1}
              className="w-full text-center text-[#cfd4dc] text-5xl font-medium font-['Inter'] leading-[60px] bg-transparent outline-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
