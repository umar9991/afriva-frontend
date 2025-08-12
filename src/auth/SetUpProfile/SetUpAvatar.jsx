import React from 'react'
import CustomTextField from '../../components/CustomTextField'
import CustomLabel from '../../components/CustomLabel'
import CustomHeading from '../../components/CustomHeading'
import SubHeading from '../../components/SubHeading'
import Logo from '../../components/Logo'
import SideImage from '../../components/SideImage'
import SignUpImg from "../.././assets/SignUp-Side.png"
import CustomButton from '../../components/CustomButton'
import AvatarImg from '../../assets/avatar.png'

export default function SetUpAvatar() {
  return (
    <section className="h-screen flex items-center justify-center md:items-center md:flex md:justify-between md:pl-[63px] lg:flex lg:justify-between lg:pl-[63px]">
   <div className="">
     <Logo className=""/>
    <CustomHeading text="Setup your profile" />
    <SubHeading text="Fill in the details to complete your profile."/>
   <div className="flex justify-center items-center ">
   <div className="w-[140.47px] h-[140.47px] relative flex justify-center mb-[20px]">
      <img
        src={AvatarImg}
        alt="avatar"
        className="w-full h-full rounded-full"
      />

      <button
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
</div>
   <CustomLabel text="User name"/>
   <CustomTextField placeholder="Enter brand name"/>
   <CustomLabel text="Phone number"/>
   <CustomTextField  placeholder="Enter number"/>
   <CustomButton label='Complete' to='/main-home'/>
   </div>
  <div>
    <SideImage src={SignUpImg}/>
  </div>
</section>

  )
}
