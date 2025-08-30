import React, { useState, useRef } from 'react';

export default function OtpInput({ value, onChange }) {
  const [otp, setOtp] = useState(value || ['', '', '', '']);
  const inputRefs = useRef([]);
  const otpLength = 4;

  const handleInputChange = (index, inputValue) => {
    if (!/^\d*$/.test(inputValue)) return;

    const newOtp = [...otp];
    newOtp[index] = inputValue;
    setOtp(newOtp);

    // Call onChange with the complete OTP string
    const otpString = newOtp.join('');
    if (onChange) {
      onChange(otpString);
    }

    // Auto-focus next input
    if (inputValue && index < otpLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
        
        const otpString = newOtp.join('');
        if (onChange) {
          onChange(otpString);
        }
      }
    }
    
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === 'ArrowRight' && index < otpLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, otpLength);
    
    if (!/^\d+$/.test(pastedData)) return; // Only allow numbers
    
    const newOtp = pastedData.split('').concat(Array(otpLength - pastedData.length).fill(''));
    setOtp(newOtp);
    
    if (onChange) {
      onChange(pastedData);
    }

    const nextIndex = Math.min(pastedData.length, otpLength - 1);
    inputRefs.current[nextIndex]?.focus();
  };

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
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              value={otp[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="w-full text-center text-[#101828] text-5xl font-medium font-['Inter'] leading-[60px] bg-transparent outline-none"
              autoComplete="off"
            />
          </div>
        ))}
      </div>
    </div>
  );
}