import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup, sendVerificationCode } from '../../services/authService'
import CustomHeading from '../../components/CustomHeading'
import SubHeading from '../../components/SubHeading'
import AuthRedirectText from '../../components/AuthRedirectText'
import Logo from '../../components/Logo'
import SideImage from '../../components/SideImage'
import SignUpImg from "../.././assets/SignUp-Side.png"
import CustomLabel from '../../components/CustomLabel'
import CustomTextField from '../../components/CustomTextField'
import PasswordField from '../../components/PasswordField'
import CustomButton from '../../components/CustomButton'
import { useToast } from '../../utils/ToastContainer'
import { quickTest } from '../../utils/debug'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()
  const { showSuccessToast, showErrorToast } = useToast()

  useEffect(() => {
    // Run quick test when component mounts
    quickTest()
  }, [])

  const validateForm = () => {
    const newErrors = {};
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async () => {
    if (!validateForm()) {
      console.log('❌ Form validation failed');
      return;
    }

    console.log('🚀 Starting signup process for email:', email);
    console.log('🔍 Form data:', { email, password: '***', confirmPassword: '***' });
    
    setIsLoading(true);
    try {
      console.log('📡 Calling signup API...');
      const res = await signup({ email, password, confirmPassword });
      console.log("✅ Signup API response:", res.data);

      if (res.data.success) {
        showSuccessToast("Account created successfully! Sending verification code...");
        console.log('📧 Account created, now sending verification code...');
        
        try {
          console.log('📡 Calling sendVerificationCode API...');
          const verifyRes = await sendVerificationCode(email);
          console.log("📧 Verification code API response:", verifyRes.data);
          
          if (verifyRes.data.success) {
            showSuccessToast("Verification code sent to your email!");
            console.log('💾 Setting verificationEmail in localStorage:', email);
            localStorage.setItem('verificationEmail', email);
            
            // Verify it was set
            const storedEmail = localStorage.getItem('verificationEmail');
            console.log('🔍 Verification email stored in localStorage:', storedEmail);
            console.log('🔍 localStorage keys:', Object.keys(localStorage));
            console.log('🔍 All localStorage items:', Object.fromEntries(
              Object.keys(localStorage).map(key => [key, localStorage.getItem(key)])
            ));
            
            if (storedEmail === email) {
              console.log('✅ Email successfully stored in localStorage');
              console.log('🧭 Navigating to email-verify page...');
              navigate("/email-verify");
            } else {
              console.error('❌ Failed to store email in localStorage');
              showErrorToast("Failed to store email. Please try again.");
            }
          } else {
            console.error('❌ Verification code API failed:', verifyRes.data);
            showErrorToast(verifyRes.data.message || "Failed to send verification code");
          }
        } catch (verifyError) {
          console.error("❌ Verification code error:", verifyError);
          console.error("❌ Verification error details:", {
            message: verifyError.message,
            response: verifyError.response?.data,
            status: verifyError.response?.status
          });
          showErrorToast("Account created but failed to send verification code. Please try again.");
        }
      } else {
        console.error('❌ Signup API failed:', res.data);
        showErrorToast(res.data.message || "Signup failed");
      }
    } catch (error) {
      console.error("❌ Signup error:", error);
      console.error("❌ Signup error details:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        stack: error.stack
      });
      const errorMessage = error.response?.data?.message || "Signup failed. Please try again.";
      showErrorToast(errorMessage);
    } finally {
      setIsLoading(false);
      console.log('🏁 Signup process completed');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSignup();
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
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
              }}
              onKeyPress={handleKeyPress}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <div className="text-red-500 text-sm mt-1">{errors.email}</div>
            )}
            
            <CustomLabel text="Password" />
            <PasswordField  
              placeholder="Enter password"  
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors(prev => ({ ...prev, password: '' }));
              }}
              onKeyPress={handleKeyPress}
              className={errors.password ? 'border-red-500' : ''}
            />
            {errors.password && (
              <div className="text-red-500 text-sm mt-1">{errors.password}</div>
            )}
            
            <CustomLabel text="Confirm Password" />    
            <PasswordField 
              placeholder="Confirm password" 
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (errors.confirmPassword) setErrors(prev => ({ ...prev, confirmPassword: '' }));
              }}
              onKeyPress={handleKeyPress}
              className={errors.confirmPassword ? 'border-red-500' : ''}
            />
            {errors.confirmPassword && (
              <div className="text-red-500 text-sm mt-1">{errors.confirmPassword}</div>
            )}
            
            <CustomButton 
              label={isLoading ? 'Creating Account...' : 'Continue'}
              onClick={handleSignup}
              disabled={isLoading}
            />
            
            <AuthRedirectText 
              question="I already have an account!"
              linkText="Log in"
              to='/login'
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
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
          }}
          onKeyPress={handleKeyPress}
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && (
          <div className="text-red-500 text-sm mt-1">{errors.email}</div>
        )}
        
        <CustomLabel text="Password" />
        <PasswordField  
          placeholder="Enter password"  
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (errors.password) setErrors(prev => ({ ...prev, password: '' }));
          }}
          onKeyPress={handleKeyPress}
          className={errors.password ? 'border-red-500' : ''}
        />
        {errors.password && (
          <div className="text-red-500 text-sm mt-1">{errors.password}</div>
        )}
        
        <CustomLabel text="Confirm Password" />    
        <PasswordField 
          placeholder="Confirm password" 
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            if (errors.confirmPassword) setErrors(prev => ({ ...prev, confirmPassword: '' }));
          }}
          onKeyPress={handleKeyPress}
          className={errors.confirmPassword ? 'border-red-500' : ''}
        />
        {errors.confirmPassword && (
          <div className="text-red-500 text-sm mt-1">{errors.confirmPassword}</div>
        )}
        
        <CustomButton 
          label={isLoading ? 'Creating Account...' : 'Continue'}
          onClick={handleSignup}
          disabled={isLoading}
        />
        
        <AuthRedirectText 
          question="I already have an account!"
          linkText="Log in"
          to='/login'
        />
      </div>
  
      <div className="hidden md:block">
        <SideImage src={SignUpImg} />
      </div>
      
    </section>
  )
}