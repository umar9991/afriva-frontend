import React from 'react'

export default function CustomHeading({ text}) {
  return (
    <div className="mb-[16px] self-stretch justify-start text-black text-[38px] font-semibold font-['Inter'] leading-none">
      {text}
    </div>
  )
}
