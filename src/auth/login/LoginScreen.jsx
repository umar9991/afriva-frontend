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
import { signin } from '../../services/authService'
import { useNavigate } from "react-router-dom";
import { useToast } from '../../utils/ToastContainer';

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { showSuccessToast, showErrorToast } = useToast();

  const validateForm = () => {
    const newErrors = {};
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 3) {
      newErrors.password = 'Password must be at least 3 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      const res = await signin({ email, password });
      console.log("Login success:", res.data);
      
      if (res.data.success) {
        showSuccessToast("Login successful! Redirecting...");
        localStorage.setItem('userToken', res.data.token);
        localStorage.setItem('userEmail', email);
        
        setTimeout(() => {
          navigate("/main-home");
        }, 1000);
      } else {
        showErrorToast(res.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      const errorMessage = error.response?.data?.message || "Login failed. Please try again.";
      showErrorToast(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
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
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
              }}
              onKeyPress={handleKeyPress}
              className={`mb-3 ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && (
              <div className="text-red-500 text-sm mt-0 mb-1">{errors.email}</div>
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
              className={`mb-3 ${errors.password ? 'border-red-500' : ''}`}
            />
            {errors.password && (
              <div className="text-red-500 text-sm mt-0 mb-1">{errors.password}</div>
            )}
            
            <Link to="/forgotMain">
              <div className="self-stretch text-right justify-center text-[#555555] text-[12.93px] font-medium font-['Poppins'] cursor-pointer hover:text-[#8BC53F] transition-colors">
                Forgot Password?
              </div>
            </Link>
            
            <CustomButton 
              label={isLoading ? 'Logging In...' : 'Log In'}
              onClick={handleLogin}
              disabled={isLoading}
            />
            
            <AuthRedirectText 
              question="Don't have an account?"
              linkText="Sign up" 
              to="/register"
            />
          </div>
        </div>
      </div>
  
      <div className="hidden md:block">
        <Logo className="" />
        <CustomHeading text="Login" />
        <SubHeading text="Welcome to Afriva - Login to your account" />
        
        <CustomLabel text="Email" />
        <CustomTextField 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
          }}
          onKeyPress={handleKeyPress}
          className={`mb-3 ${errors.email ? 'border-red-500' : ''}`}
        />
        {errors.email && (
          <div className="text-red-500 text-sm mt-0 mb-1">{errors.email}</div>
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
          className={`mb-3 ${errors.password ? 'border-red-500' : ''}`}
        />
        {errors.password && (
          <div className="text-red-500 text-sm mt-0 mb-1">{errors.password}</div>
        )}
        
        <Link to="/forgotMain">
          <div className="self-stretch text-right justify-center text-[#555555] text-[12.93px] font-medium font-['Poppins'] cursor-pointer hover:text-[#8BC53F] transition-colors">
            Forgot Password?
          </div>
        </Link>
        
        <CustomButton 
          label={isLoading ? 'Logging In...' : 'Log In'}
          onClick={handleLogin}
          disabled={isLoading}
        />
        
        <AuthRedirectText 
          question="Don't have an account?"
          linkText="Sign up" 
          to="/register"
        />
      </div>
  
      <div className="hidden md:block">
        <SideImage src={LoginImg} />
      </div>
      
    </section>
  )
}
