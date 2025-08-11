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
        className="p-[20px] h-screen flex items-center justify-center bg-no-repeat bg-center bg-contain max-w-[769px] max-h-[768px]"
        style={{ backgroundImage: `url(${Bg})`, display: 'flex', textAlign: 'start' }}
      >
        <div>
           <div className="flex justify-center mb-[24px] mt-[30px]">
             <img className="h-[24px] w-[24px]" src={EmailImg} alt="" />
           </div>
          <div className="text-center">
            <CustomHeading text="Check your email" />
          </div>
          <div className="max-w-[360px] mb-[32px] justify-center text-center">
            <span className="text-[#475467] text-base font-normal leading-normal">
              We sent a password reset link to
            </span>
            <br />
            <span className="text-[#475467] font-bold text-base">olivia@proadvisor.com</span>
          </div>

          <CustomButton label="Got it" to="/forgotMain/" />
          <AuthRedirectText
            question="Didn’t receive the email?"
            linkText="Click to resend"
            to="/forgotSideBar"
          />
          <BackButton />
               <div className="flex justify-center items-center text-center "><img className="max-h-[10px] max-w-[88px] mt-[80px] " src={Circle2} alt="" /></div>
          
        </div>
      </section>
    </>
  );
}