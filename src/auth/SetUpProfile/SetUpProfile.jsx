import React from 'react'
import CustomTextField from '../../components/CustomTextField'
import CustomLabel from '../../components/CustomLabel'
import CustomHeading from '../../components/CustomHeading'
import SubHeading from '../../components/SubHeading'
import AuthRedirectText from '../../components/AuthRedirectText'
import Logo from '../../components/Logo'
import SideImage from '../../components/SideImage'
import SignUpImg from "../.././assets/SignUp-Side.png"
import PasswordField from '../../components/PasswordField'
import CustomButton from '../../components/CustomButton'
export default function SetUpProfile() {
  return (
    <section className="px-[20px] h-screen flex items-center justify-center md:items-center md:flex md:justify-between md:pl-[63px] lg:flex lg:justify-between lg:pl-[63px]">
   <div className="">
     <Logo className=""/>
    <CustomHeading text="Verification" />
    <SubHeading text="Select your country and verify your identity to continue."/>
   <CustomLabel text="Account Type"/>
   <CustomTextField placeholder="Select Account Type"/>
   <CustomLabel text="Your Country"/>
   <CustomTextField  placeholder="Select Country"/>
   <CustomLabel text="Country ID"/>    
   <CustomTextField placeholder="Enter Country ID"/>
   {/* <div className="self-stretch text-right justify-center text-[#555555] text-[12.93px] font-medium font-['Poppins']">Forgot Password?</div> */}
   <CustomButton label='Verify' to='/setup-avatar'/>
   <AuthRedirectText question="I already have an account!"
  linkText="Log in"
  onClick={() => console.log("Navigate to signup")}/>
  
   </div>
  <div>
    <SideImage src={SignUpImg}/>
  </div>
</section>

  )
}
