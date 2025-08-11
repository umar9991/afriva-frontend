import React from "react";

const StepItem = ({ img, title, description }) => {
  return (
    <div className="w-[352px] flex gap-8 mb-[25px]">
      <div className="flex flex-col items-center gap-1">
        <div className="w-5 h-5 relative">
          <div className="w-[40px] h-[40px] absolute overflow-hidden rounded-full bg-white border border-[#344054] flex items-center justify-center">
            {typeof img === "string" ? (
              <img
                src={img}
                alt=""
                className="h-[20px] w-[20px] rounded-full"
              />
            ) : (
              img
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-0.5">
        <div className="text-[#344054] text-base font-semibold leading-normal">
          {title}
        </div>
        <div className="text-[#475467] text-base font-normal leading-normal">
          {description}
        </div>
      </div>
    </div>
  );
};

export default StepItem;
