import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { verifyOtp, sendVerificationCode } from '../../services/authService'
import CustomHeading from '../../components/CustomHeading'
import SubHeading from '../../components/SubHeading'
import AuthRedirectText from '../../components/AuthRedirectText'
import Logo from '../../components/Logo'
import SideImage from '../../components/SideImage'
import LoginImg from "../.././assets/Login-Side.png"
import CustomButton from '../../components/CustomButton'
import OtpInput from '../../components/OtpInput'
import BackButton from '../../components/BackButton'
import { useToast } from '../../utils/ToastContainer'
import { testOTPVerification } from '../../utils/debug'

export default function EmailVerify() {
  const [otp, setOtp] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [email, setEmail] = useState('')
  const [resendCountdown, setResendCountdown] = useState(0)
  const navigate = useNavigate()
  const { showSuccessToast, showErrorToast, showInfoToast } = useToast()

  useEffect(() => {
    console.log('🔍 EmailVerify component mounted');
    
    const storedEmail = localStorage.getItem('verificationEmail');
    const userEmail = localStorage.getItem('userEmail');
    
    console.log('🔍 Stored email from localStorage:', storedEmail);
    console.log('🔍 User email from localStorage:', userEmail);
    console.log('🔍 All localStorage keys:', Object.keys(localStorage));
    console.log('🔍 All localStorage items:', Object.fromEntries(
      Object.keys(localStorage).map(key => [key, localStorage.getItem(key)])
    ));
    
    let emailToUse = storedEmail || userEmail;
    
    if (!emailToUse) {
      console.error('❌ No email found in localStorage');
      console.error('❌ This means signup failed or localStorage was cleared');
      
      const urlParams = new URLSearchParams(window.location.search);
      const emailParam = urlParams.get('email');
      
      if (emailParam) {
        console.log('🔍 Found email in URL params:', emailParam);
        emailToUse = emailParam;
        localStorage.setItem('verificationEmail', emailParam);
        showInfoToast('Email found in URL, proceeding with verification');
      } else {
        showErrorToast('No email found. Please start the verification process again.')
        navigate('/register')
        return
      }
    }
    
    console.log('✅ Using email for verification:', emailToUse);
    setEmail(emailToUse);
    
    if (emailToUse) {
      testOTPVerification(emailToUse);
    }
  }, [navigate, showErrorToast, showInfoToast])

  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [resendCountdown])

  const handleVerifyOtp = async () => {
    if (!email) {
      showErrorToast('Email not found. Please go back and try again.')
      navigate('/register')
      return
    }

    if (!otp || otp.length < 4) {
      showErrorToast('Please enter complete OTP')
      return
    }

    console.log('🔍 Verifying OTP:', { email, otp }) 

    setIsLoading(true)
    try {
      const res = await verifyOtp(email, otp)
      console.log('✅ Verification response:', res.data) 
      
      if (res.data.success) {
        showSuccessToast('Email verified successfully!')
        
        localStorage.removeItem('verificationEmail')
        localStorage.setItem('emailVerified', 'true')
        localStorage.setItem('userEmail', email)
        
        setTimeout(() => {
          navigate('/setup-profile')
        }, 1500)
      } else {
        showErrorToast(res.data.message || 'Verification failed')
      }
    } catch (error) {
      console.error('❌ OTP verification failed:', error)
      console.error('❌ Error response:', error.response)
      console.error('❌ Error status:', error.response?.status)
      console.error('❌ Error data:', error.response?.data)
      console.error('❌ Error message:', error.response?.data?.message)
      
      const errorMessage = error.response?.data?.message || 'Invalid OTP. Please try again.'
      showErrorToast(errorMessage)
      
      if (error.response?.data?.message === 'User not found! Please check your email address.') {
        console.log('🔍 This suggests the backend is running the OLD code without case-insensitive search')
        console.log('🔍 Email being searched:', email)
        console.log('🔍 Try deploying the backend changes again')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendCode = async () => {
    if (!email) {
      showErrorToast('Email not found. Please go back and try again.')
      return
    }

    if (resendCountdown > 0) {
      showInfoToast(`Please wait ${resendCountdown} seconds before resending`)
      return
    }

    setIsResending(true)
    try {
      const res = await sendVerificationCode(email)
      if (res.data.success) {
        showSuccessToast('Verification code sent again!')
        setResendCountdown(30) 
      } else {
        showErrorToast(res.data.message || 'Failed to resend code')
      }
    } catch (error) {
      console.error('Failed to resend code:', error)
      showErrorToast('Failed to resend code. Please try again.')
    } finally {
      setIsResending(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && otp.length === 4 && !isLoading) {
      handleVerifyOtp()
    }
  }

  return (
    <section className="min-h-screen h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 md:flex-row md:items-center md:justify-between md:pl-[63px] lg:pl-[63px] md:px-0">
  
    <div className="md:hidden w-full h-full relative">
      <div className="absolute inset-0">
        <SideImage src={LoginImg} className="w-full h-full object-cover" />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-6 w-full max-w-sm mx-auto">
          <Logo className="mb-4" />
          <CustomHeading text="Check your mail box" />
          <SubHeading text="Verify codes delivered to your inbox." />
          
          <div className="mb-6">
            <span className="text-[#475467] text-sm font-normal font-['Inter'] leading-normal">
              We sent a verification code to
            </span>
            <br />
            <span className="text-[#475467] font-bold text-sm font-['Inter'] break-all">
              {email || 'your email'}
            </span>
          </div>
          
          <div className="mb-6 flex justify-center">
            <OtpInput value={otp} onChange={setOtp} onKeyPress={handleKeyPress} />
          </div>
          
          <CustomButton
            label={isLoading ? 'Verifying...' : 'Continue'}
            onClick={handleVerifyOtp}
            disabled={isLoading || !otp || otp.length < 4}
          />
          
          <div className="mt-4">
            {resendCountdown > 0 ? (
              <div className="text-center text-gray-500 text-sm">
                Resend available in {resendCountdown} seconds
              </div>
            ) : (
              <AuthRedirectText
                question="Didn't receive the email?"
                linkText={isResending ? "Sending..." : "Click to resend"}
                onClick={handleResendCode}
                disabled={isResending}
              />
            )}
          </div>
          
          <div className="mt-4">
            <BackButton to='/register'/>
          </div>
        </div>
      </div>
    </div>
  
    <div className="hidden md:block lg:hidden w-full md:w-auto md:max-w-md">
      <Logo className="mb-4" />
      <CustomHeading text="Check your mail box" />
      <SubHeading text="Verify codes delivered to your inbox." />
      
      <div className="max-w-[360px] mb-[32px] justify-start">
        <span className="text-[#475467] text-base font-normal font-['Inter'] leading-normal">
          We sent a verification code to
        </span>
        <br />
        <span className="text-[#475467] font-bold text-base font-['Inter'] break-words">
          {email || 'your email'}
        </span>
      </div>
      
      <div className="mb-6 flex justify-center">
        <OtpInput value={otp} onChange={setOtp} onKeyPress={handleKeyPress} />
      </div>
      
      <CustomButton
        label={isLoading ? 'Verifying...' : 'Continue'}
        onClick={handleVerifyOtp}
        disabled={isLoading || !otp || otp.length < 4}
      />
      
      <div className="mt-4">
        {resendCountdown > 0 ? (
          <div className="text-center text-gray-500 text-sm">
            Resend available in {resendCountdown} seconds
          </div>
        ) : (
          <AuthRedirectText
            question="Didn't receive the email?"
            linkText={isResending ? "Sending..." : "Click to resend"}
            onClick={handleResendCode}
            disabled={isResending}
          />
        )}
      </div>
      
      <div className="mt-6">
        <BackButton to='/register'/>
      </div>
    </div>
  
    <div className="hidden lg:block w-full md:w-auto md:max-w-md lg:max-w-lg xl:max-w-xl">
      <Logo className="mb-4" />
      <CustomHeading text="Check your mail box" />
      <SubHeading text="Verify codes delivered to your inbox." />
      
      <div className="max-w-[360px] mb-[32px] justify-start">
        <span className="text-[#475467] text-base font-normal font-['Inter'] leading-normal">
          We sent a verification code to
        </span>
        <br />
        <span className="text-[#475467] font-bold text-base font-['Inter'] break-words">
          {email || 'your email'}
        </span>
      </div>
      
      <div className="mb-6">
        <OtpInput value={otp} onChange={setOtp} onKeyPress={handleKeyPress} />
      </div>
      
      <CustomButton
        label={isLoading ? 'Verifying...' : 'Continue'}
        onClick={handleVerifyOtp}
        disabled={isLoading || !otp || otp.length < 4}
      />
      
      <div className="mt-4">
        {resendCountdown > 0 ? (
          <div className="text-center text-gray-500 text-sm">
            Resend available in {resendCountdown} seconds
          </div>
        ) : (
          <AuthRedirectText
            question="Didn't receive the email?"
            linkText={isResending ? "Sending..." : "Click to resend"}
            onClick={handleResendCode}
            disabled={isResending}
          />
        )}
      </div>
      
      <div className="mt-6">
        <BackButton to='/register'/>
      </div>
    </div>
    
    <div className="hidden md:block md:flex-shrink-0">
      <SideImage src={LoginImg} />
    </div>
    
  </section>
  )
}