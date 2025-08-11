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
import Circle3 from '../../../assets/circle3.png'
import fImg from '../../../assets/ficon.png'
import Bg from '../../../assets/BG.png'
import CheckCircle from '../../../assets/check-circle.png'


export default function CreatePassword() {
  return (
  <>
    <section
        className="p-[20px] h-screen flex items-center justify-center bg-no-repeat bg-center bg-contain max-w-[769px] max-h-[768px]"
        style={{ backgroundImage: `url(${Bg})`, display: 'flex', textAlign: 'start' }}
      >
        <div>
           <div className="flex justify-center mb-[24px] mt-[30px]">
             <img className="h-[24px] w-[24px]" src={fImg} alt="" />
           </div>
          <div className="text-center">
            <CustomHeading text="Set new password" />
             <SubHeading text={'Your new password must be different\n to previously used passwords.'}/>
          </div>
    <CustomLabel text="Password"/>
       <PasswordField  placeholder="Enter password"/>
       <CustomLabel text="Confirm Password"/>    
       <PasswordField placeholder="Enter password"/>
       <div className="flex flex-col gap-2 mb-4">
        <div className="self-stretch inline-flex justify-start items-center gap-2">
  <img src={CheckCircle} alt="check" className="w-[18px] h-[18px]" />
  <div className="text-[#475467] text-sm font-normal font-['Inter'] leading-snug">
    Must be at least 8 characters
  </div>
</div>
<div className="self-stretch inline-flex justify-start items-center gap-2">
  <img src={CheckCircle} alt="check" className="w-[18px] h-[18px]" />
  <div className="text-[#475467] text-sm font-normal font-['Inter'] leading-snug">
    Must be at least 8 characters
  </div>
</div>
       </div>


        <CustomButton label="Reset password" to="/forgotMain/success" />
          <BackButton />
               <div className="flex justify-center items-center text-center "><img className="max-h-[10px] max-w-[88px] mt-[80px] " src={Circle3} alt="" /></div>
          
        </div>
      </section>
    </>
  );
}