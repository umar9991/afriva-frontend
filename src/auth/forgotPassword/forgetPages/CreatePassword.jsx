import React from 'react'
import CustomTextField from '../../../components/CustomTextField'
import CustomLabel from '../../../components/CustomLabel'
import CustomHeading from '../../../components/CustomHeading'
import SubHeading from '../../../components/SubHeading'
import PasswordField from '../../../components/PasswordField'
import CustomButton from '../../../components/CustomButton'
import BackButton from '../../../components/BackButton'
import Circle3 from '../../../assets/circle3.png'
import fImg from '../../../assets/ficon.png'
import Bg from '../../../assets/BG.png'
import CheckCircle from '../../../assets/check-circle.png'

export default function CreatePassword() {
  return (
    <>
      <section
        className="min-h-screen flex items-center justify-center bg-no-repeat bg-center bg-contain p-4 sm:p-6 md:p-8"
        style={{ backgroundImage: `url(${Bg})`, display: 'flex', textAlign: 'start' }}
      >
        <div className="w-full max-w-sm sm:max-w-md mx-auto">
          <div className="flex justify-center mb-6 mt-4 sm:mt-8">
            <img className="h-8 w-8 sm:h-10 sm:w-10" src={fImg} alt="Password icon" />
          </div>
          
          <div className="text-center mb-6 sm:mb-8">
            <CustomHeading text="Set new password" />
            <div className="mt-2">
              <SubHeading text={'Your new password must be different\n to previously used passwords.'}/>
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <div>
              <CustomLabel text="Password"/>
              <div className="mt-2">
                <PasswordField placeholder="Enter password"/>
              </div>
            </div>
            <div>
              <CustomLabel text="Confirm Password"/>
              <div className="mt-2">
                <PasswordField placeholder="Enter password"/>
              </div>
            </div>
          </div>
          
          <div className=" rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-3 font-medium">Password requirements:</div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <img src={CheckCircle} alt="check" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <div className="text-[#475467] text-sm font-normal font-['Inter'] leading-snug">
                  Must be at least 8 characters
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={CheckCircle} alt="check" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <div className="text-[#475467] text-sm font-normal font-['Inter'] leading-snug">
                  Must contain at least one number
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 mb-8">
            <CustomButton label="Reset password" to="/forgotMain/success" />
            <BackButton />
          </div>
          
          <div className="flex justify-center items-center">
            <img 
              className="h-3 w-20 sm:h-4 sm:w-24" 
              src={Circle3} 
              alt="Decoration" 
            />
          </div>
        </div>
      </section>
    </>
  );
}