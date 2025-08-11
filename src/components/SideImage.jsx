import React from 'react';

export default function SideImage({ src, alt = "Side Image",}) {
  return (
    <img
      className="hidden lg:block mr-[29.19px] w-full max-w-[540.81px] max-h-[965.69]  rounded-[30px] mt-[30px] mb-[30px] object-cover"
      src={src}
      alt={alt}
    />
  );
}
