import Logo from '../../../components/Logo'
import CustomTextField from '../../../components/CustomTextField'
import CustomLabel from '../../../components/CustomLabel'
import CustomHeading from '../../../components/CustomHeading'
import SubHeading from '../../../components/SubHeading'
import PasswordField from '../../../components/PasswordField'
import CustomButton from '../../../components/CustomButton'
import AuthRedirectText from '../../../components/AuthRedirectText'
import BackButton from '../../../components/BackButton'
import Circle1 from '../../../assets/circle.png'
import Bg from '../../../assets/BG.png'
import EmailImg from '../../../assets/email.png'
import React, { useState } from "react";

export default function YourDetail() {
 
  return (
    <>
      <section
        className="min-h-screen flex items-center justify-center bg-no-repeat bg-center bg-contain p-4 sm:p-6 md:p-8"
        style={{
          backgroundImage: `url(${Bg})`,
          display: 'flex',
          textAlign: 'start',
        }}
      >
        <div className="w-full max-w-md mx-auto">
          <div className="p-4 sm:p-5 flex justify-center mb-6 mt-8">
            <img className="h-6 w-6 sm:h-8 sm:w-8" src={EmailImg} alt="" />
          </div>

          <div className="text-center mb-6">
            <CustomHeading text="Forgot password?" />
          </div>

          <SubHeading text="No worries, we'll send you reset instructions." />

          <div className="mt-6">
            <CustomLabel text="Email" />
            <CustomTextField 
              placeholder="Enter your email"
             
            />
          </div>

          <div className="mt-6">
            <CustomButton 
              label="Reset password" 
              to='/forgotMain/check-email'
            />
          </div>

          <div className="mt-4">
            <BackButton />
          </div>

          <div className="flex justify-center items-center text-center mt-16 sm:mt-20">
            <img
              className="max-h-3 max-w-22 sm:max-h-4 sm:max-w-24"
              src={Circle1}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  )
}
