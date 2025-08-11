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
export default function SignUp() {
  return (
    <section className="h-screen flex items-center justify-center md:items-center md:flex md:justify-between md:pl-[63px] lg:flex lg:justify-between lg:pl-[63px]">
   <div className="">
     <Logo className=""/>
    <CustomHeading text="Create an account" />
    <SubHeading text="Welcome to Afriva - Lets create your acount"/>
   <CustomLabel text="Email"/>
   <CustomTextField placeholder="Enter your email"/>
   <CustomLabel text="Password"/>
   <PasswordField  placeholder="Enter password"/>
   <CustomLabel text="Confirm Password"/>    
   <PasswordField placeholder="Enter password"/>
   {/* <div className="self-stretch text-right justify-center text-[#555555] text-[12.93px] font-medium font-['Poppins']">Forgot Password?</div> */}
   <CustomButton label='Continue' to='/email-verify' />
   <AuthRedirectText question="I already have an account!"
  linkText="Log in"
  to='/login'
  onClick={() => console.log("Navigate to signup")}/>
  
   </div>
  <div>
    <SideImage src={SignUpImg}/>
  </div>
</section>

  )
}
