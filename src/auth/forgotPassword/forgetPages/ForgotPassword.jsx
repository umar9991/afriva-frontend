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
        className="p-[20px] h-screen flex items-center justify-center bg-no-repeat bg-center bg-contain max-w-[769px] max-h-[768px]"
        style={{ backgroundImage: `url(${Bg})`, display: 'flex', textAlign: 'start' }}
      >
        <div>
           <div className="flex justify-center mb-[24px] mt-[30px]">
             <img className="h-[24px] w-[24px] " src={CheckCircle} alt="" />
           </div>
          <div className="text-center">
            <CustomHeading text="Successfully" />
          </div>
       <div className="text-center"> <SubHeading text={'Your password has been successfully reset.\nClick below to log in magically.'} />
</div>
          <CustomButton label="Back to log In" to="/login" />
        
               <div className="flex justify-center items-center text-center "><img className="max-h-[10px] max-w-[88px] mt-[80px] " src={Circle4} alt="" /></div>
          
        </div>
      </section>
    </>
  );
}