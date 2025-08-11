import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BackButton({ to = "/login" }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(to)}
      className="mt-[30px] justify-center flex items-center gap-2 cursor-pointer text-[#344054] text-sm font-medium leading-[20px]">
      <svg
        className="w-5 h-5 text-[#667085]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Back to log in
    </div>
  );
}
