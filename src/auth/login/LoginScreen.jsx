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
import React, { useState } from "react";
import { signin } from '../../../backend/services/authService'
import { useNavigate } from "react-router-dom";


export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("Debug=======>")
    console.log(email,password)
    try {
      const res = await signin({ email, password });
      console.log("Login success:", res.data);

      alert(res.data.message);
      navigate("/main-home");
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Login failed");
    }
  };
  return (
    <section className="h-screen flex items-center justify-center relative md:flex-row md:justify-between md:pl-[63px] lg:pl-[63px]">
  
    <div className="md:hidden w-full h-full relative">
      <div className="absolute inset-0">
        <SideImage src={LoginImg} className="w-full h-full object-cover" />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
          <Logo className="" />
          <CustomHeading text="Login" />
          <SubHeading text="Welcome to Afriva - Login to your account" />
          
          <CustomLabel text="Email" />
          <CustomTextField 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <CustomLabel text="Password" />
          <PasswordField  
            placeholder="Enter password"  
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <Link to="/forgotMain">
            <div className="self-stretch text-right justify-center text-[#555555] text-[12.93px] font-medium font-['Poppins'] cursor-pointer">
              Forgot Password?
            </div>
          </Link>
          
          <CustomButton 
            label='Log In'
            to="/main-home"
            onClick={handleLogin}
          />
          
          <AuthRedirectText 
            question="Don't have an account?"
            linkText="Sign up" 
            to="/register"
            onClick={() => console.log("Navigate to signup")}
          />
        </div>
      </div>
    </div>
  
    {/* Desktop Layout - Original Side by Side */}
    <div className="hidden md:block">
      <Logo className="" />
      <CustomHeading text="Login" />
      <SubHeading text="Welcome to Afriva - Login to your account" />
      
      <CustomLabel text="Email" />
      <CustomTextField 
        placeholder="Enter your email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <CustomLabel text="Password" />
      <PasswordField  
        placeholder="Enter password"  
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <Link to="/forgotMain">
        <div className="self-stretch text-right justify-center text-[#555555] text-[12.93px] font-medium font-['Poppins'] cursor-pointer">
          Forgot Password?
        </div>
      </Link>
      
      <CustomButton 
        label='Log In'
        to="/main-home"
        onClick={handleLogin}
      />
      
      <AuthRedirectText 
        question="Don't have an account?"
        linkText="Sign up" 
        to="/register"
        onClick={() => console.log("Navigate to signup")}
      />
    </div>
  
    {/* Desktop Right Side Image */}
    <div className="hidden md:block">
      <SideImage src={LoginImg} />
    </div>
    
  </section>
  )
}
