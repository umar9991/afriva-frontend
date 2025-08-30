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

export default function EmailVerify() {
  const [otp, setOtp] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const storedEmail = localStorage.getItem('verificationEmail')
    if (!storedEmail) {
      alert('No email found. Please start the verification process again.')
      navigate('/register')
      return
    }
    setEmail(storedEmail)
    console.log('Email found in localStorage:', storedEmail) 
  }, [navigate])

  const handleVerifyOtp = async () => {
    if (!email) {
      alert('Email not found. Please go back and try again.')
      navigate('/register')
      return
    }

    if (!otp || otp.length < 4) {
      alert('Please enter complete OTP')
      return
    }

    console.log('Verifying OTP:', { email, otp }) 

    setIsLoading(true)
    try {
      const res = await verifyOtp(email, otp)
      console.log('Verification response:', res.data) 
      alert(res.data.message)
      
      localStorage.removeItem('verificationEmail')
      
      localStorage.setItem('emailVerified', 'true')
      localStorage.setItem('userEmail', email)
      
      navigate('/setup-profile')
    } catch (error) {
      console.error('OTP verification failed:', error)
      console.error('Error details:', error.response?.data) 
      alert(error.response?.data?.message || 'Invalid OTP')
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendCode = async () => {
    if (!email) {
      alert('Email not found. Please go back and try again.')
      return
    }

    setIsResending(true)
    try {
      const res = await sendVerificationCode(email)
      alert('Verification code sent again!')
    } catch (error) {
      console.error('Failed to resend code:', error)
      alert('Failed to resend code. Please try again.')
    } finally {
      setIsResending(false)
    }
  }

  return (
    <section className="h-screen flex items-center justify-center sm:flex sm:items-center sm:justify-center md:items-center md:flex md:justify-between md:pl-[63px] lg:flex lg:justify-between lg:pl-[63px]">
      <div className="">
        <Logo className=""/>
        <CustomHeading text="Check your mail box" />
        <SubHeading text="Verify codes delivered to your inbox."/>
        
        <div className="max-w-[360px] mb-[32px] justify-start">
          <span className="text-[#475467] text-base font-normal font-['Inter'] leading-normal">
            We sent a verification code to 
          </span>
          <br />
          <span className="text-[#475467] font-bold text-base font-['Inter']">
            {email || 'your email'}
          </span>
        </div>
        
        <OtpInput value={otp} onChange={setOtp} />
        
        <CustomButton 
          label={isLoading ? 'Verifying...' : 'Continue'} 
          onClick={handleVerifyOtp}
          disabled={isLoading || !otp || otp.length < 4}
        />
        
        <AuthRedirectText 
          question="Didn't receive the email?"
          linkText={isResending ? "Sending..." : "Click to resend"}
          onClick={handleResendCode}
        />
        <BackButton to='/register'/>
      </div>
      <div>
        <SideImage src={LoginImg}/>
      </div>
    </section>
  )
}