import React from 'react'
import Logo from '../../../components/Logo'
import CustomTextField from '../../../components/CustomTextField'
import CustomLabel from '../../../components/CustomLabel'
import CustomHeading from '../../../components/CustomHeading'
import SubHeading from '../../../components/SubHeading'
import PasswordField from '../../../components/PasswordField'
import CustomButton from '../../../components/CustomButton'
import AuthRedirectText from '../../../components/AuthRedirectText'
import BackButton from '../../../components/BackButton'
import Circle2 from '../../../assets/circle2.png'
import EmailImg from '../../../assets/email.png'
import Bg from '../../../assets/BG.png'

export default function CheckEmail() {
  return (
    <>
      <section
        className="min-h-screen flex items-center justify-center bg-no-repeat bg-center bg-contain p-4 sm:p-6 md:p-8"
        style={{ backgroundImage: `url(${Bg})`, display: 'flex', textAlign: 'start' }}
      >
        <div className="w-full max-w-md mx-auto text-center">
          <div className="flex justify-center mb-6 mt-8">
            <img className="h-6 w-6 sm:h-8 sm:w-8" src={EmailImg} alt="" />
          </div>
          
          <div className="mb-6">
            <CustomHeading text="Check your email" />
          </div>
          
          <div className="max-w-[360px] mx-auto mb-8 text-center">
            <span className="text-[#475467] text-base font-normal leading-normal">
              We sent a password reset link to
            </span>
            <br />
            <span className="text-[#475467] font-bold text-base">
              olivia@proadvisor.com
            </span>
          </div>

          <div className="mb-6">
            <CustomButton label="Got it" to="/forgotMain/choose-password" />
          </div>
          
          <div className="mb-6">
            <AuthRedirectText
              question="Didn't receive the email?"
              linkText="Click to resend"
              to="/forgotSideBar"
            />
          </div>
          
          <div className="mb-8">
            <BackButton />
          </div>
          
          <div className="flex justify-center items-center">
            <img 
              className="max-h-3 max-w-22 sm:max-h-4 sm:max-w-24" 
              src={Circle2} 
              alt="" 
            />
          </div>
        </div>
      </section>
    </>
  );
}