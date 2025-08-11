import React from "react";
import AvatarImg from "../assets/avatar.png";

const EditAbleAvatar = ({ onEdit }) => {
  return (
    <div className="w-[140.47px] h-[140.47px] relative flex  justify-center mb-[20px]">
      <img
        src={AvatarImg}
        alt="avatar"
        className="w-full h-full rounded-full"
      />

      <button
        onClick={onEdit}
        className="w-[34.11px] h-[34.11px] absolute left-[101.54px] top-[99.95px] bg-[#12B76A] rounded-full flex items-center justify-center cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[14px] h-[14px] text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.232 5.232l3.536 3.536M9 11l6-6m2 2l-6 6m0 0L6 18H3v-3l6-6z"
          />
        </svg>
      </button>
    </div>
  );
};

export default EditAbleAvatar;