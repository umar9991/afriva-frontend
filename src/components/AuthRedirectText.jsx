import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AuthRedirectText({
  question = "Don’t have an account?",
  linkText = "Sign up",
  to = "/register", // Add a default route
}) {
  const navigate = useNavigate()

  return (
    <div className="mt-[30px] self-stretch text-center justify-start">
      <span className="text-[#4c5673] text-[15px] font-normal font-['Inter'] leading-[25px] tracking-tight">
        {question + " "}
      </span>
      <span
        className="text-[#597596] text-[15px] font-semibold font-['Inter'] leading-[25px] tracking-tight cursor-pointer"
        onClick={() => navigate(to)}
      >
        {linkText}
      </span>
    </div>
  )
}
