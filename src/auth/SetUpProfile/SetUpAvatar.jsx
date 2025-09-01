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
          </div>
        </div> 
        <CustomLabel text="User name"/>
        <CustomTextField placeholder="Enter brand name"/>
        <CustomLabel text="Phone number"/>
        <CustomTextField placeholder="Enter number"/>
        <CustomButton label='Complete' to='/main-home'/>
      </div>
      <div>
        <SideImage src={SignUpImg}/>
      </div>
    </section>
  )
}
