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
import Circle4 from '../../../assets/circle4.png'
import EmailImg from '../../../assets/email.png'
import Bg from '../../../assets/BG.png'
import CheckCircle from '../../../assets/check-circle.png'

export default function ForgotPassword() {
  return (
    <>
      <section
        className="min-h-screen flex items-center justify-center bg-no-repeat bg-center bg-contain p-4 sm:p-6 md:p-8"
        style={{ backgroundImage: `url(${Bg})`, display: 'flex', textAlign: 'start' }}
      >
        <div className="w-full max-w-md mx-auto text-center">
          <div className="flex justify-center mb-6 mt-8">
            <img className="h-6 w-6 sm:h-8 sm:w-8" src={CheckCircle} alt="" />
          </div>
          
          <div className="mb-6">
            <CustomHeading text="Successfully" />
          </div>
          
          <div className="mb-8">
            <SubHeading text={'Your password has been successfully reset.\nClick below to log in magically.'} />
          </div>
          
          <div className="mb-8">
            <CustomButton label="Back to log In" to="/login" />
          </div>
        
          <div className="flex justify-center items-center">
            <img 
              className="max-h-3 max-w-22 sm:max-h-4 sm:max-w-24" 
              src={Circle4} 
              alt="" 
            />
          </div>
        </div>
      </section>
    </>
  );
}