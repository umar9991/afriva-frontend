import React from 'react'
import CustomTextField from '../../components/CustomTextField'
import CustomLabel from '../../components/CustomLabel'
import CustomHeading from '../../components/CustomHeading'
import SubHeading from '../../components/SubHeading'
import AuthRedirectText from '../../components/AuthRedirectText'
import Logo from '../../components/Logo'
import SideImage from '../../components/SideImage'
import LoginImg from "../.././assets/Login-Side.png"
import PasswordField from '../../components/PasswordField'
import CustomButton from '../../components/CustomButton'
import OtpInput from '../../components/OtpInput'
import BackButton from '../../components/BackButton'
import EditableAvatar from '../../components/EditAbleAvatar'
import ButtonImg from "../.././assets/Button.png"
export default function SuccessfullyScreen() {
  return (
    <section className=" h-screen text-center justify-center flex sm:flex md: md:flex md:justify-between md:pl-[63px] lg:flex lg:justify-between lg:pl-[63px]">
   <div className="">
   <div className='mt-[130px] '> <Logo /></div>
  <div className='flex justify-center items-center flex-col sm:flex sm:items-center sm:justify-center sm:flex-col sm:pl-0 md:flex md:items-center md:justify-center md:flex-col md:mt-[100px] md:ml-[100px]'>
      <div className="flex justify-center items-center ">
  <img className="h-[80px] w-[80px] mb-[24px]" src={ButtonImg} alt="" />
</div>

    <CustomHeading text="Successfully" />  
<SubHeading text={`Your account has beensuccessfully\n created and activated. Please check your\nemail for confirmation.`} />
  <BackButton />
  </div>
   </div>
  <div>
    <SideImage src={LoginImg}/>
  </div>
</section>

  )
}
