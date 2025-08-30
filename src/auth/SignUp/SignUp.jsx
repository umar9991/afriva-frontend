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
import React, { useState } from "react";
import { signup } from '../../services/authService'
import { sendVerificationCode } from '../../services/authService'
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!email || !password) {
      alert("Please fill in all fields!");
      return;
    }

    setIsLoading(true);
    try {
      const res = await signup({ email, password });
      console.log("Signup success:", res.data);
      alert(res.data.message);

      const verifyRes = await sendVerificationCode(email);
      console.log("Verification code sent:", verifyRes.data);
      alert(verifyRes.data.message);

      localStorage.setItem('verificationEmail', email);

      navigate("/email-verify");
    } catch (error) {
      console.error("Signup/Verification error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Signup failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="h-screen flex items-center justify-center relative md:flex-row md:justify-between md:pl-[63px] lg:pl-[63px]">
  
      <div className="md:hidden w-full h-full relative">
        <div className="absolute inset-0">
          <SideImage src={SignUpImg} className="w-full h-full object-cover" />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
            <Logo className="" />
            <CustomHeading text="Create an account" />
            <SubHeading text="Welcome to Afriva - Lets create your account" />
            
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
            
            <CustomLabel text="Confirm Password" />    
            <PasswordField 
              placeholder="Enter password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            
            <CustomButton 
              label={isLoading ? 'Creating Account...' : 'Continue'}
              onClick={handleSignup}
              disabled={isLoading}
            />
            
            <AuthRedirectText 
              question="I already have an account!"
              linkText="Log in"
              to='/login'
              onClick={() => console.log("Navigate to login")}
            />
          </div>
        </div>
      </div>
  
      <div className="hidden md:block">
        <Logo className="" />
        <CustomHeading text="Create an account" />
        <SubHeading text="Welcome to Afriva - Lets create your account" />
        
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
        
        <CustomLabel text="Confirm Password" />    
        <PasswordField 
          placeholder="Enter password" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        
        {/* REMOVED 'to' prop, only using onClick */}
        <CustomButton 
          label={isLoading ? 'Creating Account...' : 'Continue'}
          onClick={handleSignup}
          disabled={isLoading}
        />
        
        <AuthRedirectText 
          question="I already have an account!"
          linkText="Log in"
          to='/login'
          onClick={() => console.log("Navigate to login")}
        />
      </div>
  
      <div className="hidden md:block">
        <SideImage src={SignUpImg} />
      </div>
      
    </section>
  )
}