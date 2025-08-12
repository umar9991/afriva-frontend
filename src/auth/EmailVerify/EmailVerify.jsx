import React from 'react'
import CustomHeading from '../../components/CustomHeading'
import SubHeading from '../../components/SubHeading'
import AuthRedirectText from '../../components/AuthRedirectText'
import Logo from '../../components/Logo'
import SideImage from '../../components/SideImage'
import LoginImg from "../.././assets/Login-Side.png"
import CustomButton from '../../components/CustomButton'
import OtpInput from '../../components/OtpInput'
import BackButton from '../../components/BackButton'
export default function EmailVerify() {
  return (
    <section className=" h-screen flex items-center justify-center sm:flex sm:items-center sm:justify-center md:items-center md:flex md:justify-between md:pl-[63px] lg:flex lg:justify-between lg:pl-[63px]">
   <div className="">
     <Logo className=""/>
    <CustomHeading text="Check your mail box" />
    <SubHeading text="Verify codes delivered to your inbox."/>
 
    <div className="max-w-[360px] mb-[32px] justify-start"><span class="text-[#475467] text-base font-normal font-['Inter'] leading-normal">We sent a verification codes to </span><br /><span class="text-[#475467] font-bold text-base font-['Inter']">olivia@proadvisor.com</span></div>
  <OtpInput/>
   <CustomButton label='Continue' to='/setup-profile'/>
   <AuthRedirectText question="Didn’t receive the email?"
  linkText="Click to resend"
  onClick={() => console.log("Navigate to signup")}/>
  <BackButton to='/login'/>
   </div>
  <div>
    <SideImage src={LoginImg}/>
  </div>
</section>

  )
}
