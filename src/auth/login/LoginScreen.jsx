import React from 'react'
import CustomTextField from '../../components/CustomTextField'
import CustomLabel from '../../components/CustomLabel'
import CustomHeading from '../../components/CustomHeading'
import SubHeading from '../../components/SubHeading'
import AuthRedirectText from '../../components/AuthRedirectText'
import Logo from '../../components/Logo'
import SideImage from '../../components/SideImage'
import LoginImg from "../.././assets/Login-Side.png"
import PasswordField from '../../components/PasswordField'
import { Link } from "react-router-dom";
import CustomButton from '../../components/CustomButton'
import StepItem from '../../components/StepItems'
export default function LoginScreen() {
  return (
    <section className="h-screen flex items-center justify-center md:items-center md:flex md:justify-between md:pl-[63px] lg:flex lg:justify-between lg:pl-[63px]">
   <div className="">
     <Logo className=""/>
    <CustomHeading text="Login" />
    <SubHeading text="Welcome to Afriva - Login to your account"/>
   <CustomLabel text="Email"/>
   <CustomTextField placeholder="Enter your email"/>
   <CustomLabel text="Password"/>
   <PasswordField  placeholder="Enter password"/>
<Link to="/forgotMain">
  <div className="self-stretch text-right justify-center text-[#555555] text-[12.93px] font-medium font-['Poppins'] cursor-pointer">
    Forgot Password?
  </div>
</Link>
   <CustomButton label='Log In' to="/main-home"/>
   <AuthRedirectText question="Don’t have an account?"
  linkText="Sign up" to="/register" 
  onClick={() => console.log("Navigate to signup")}/>
  
   </div>
  <div>
    <SideImage src={LoginImg}/>
  </div>
</section>

  )
}
