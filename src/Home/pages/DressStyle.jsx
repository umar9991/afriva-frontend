import React from 'react'
import CustomHeading from '../../components/CustomHeading'
import CasualImage from '../../assets/Casual.png'
import Formal from '../../assets/Formal.png'
import PartyImg from '../../assets/Party.png'
import GymImg from '../../assets/Gym.png'
import ArrowLeft from '../../assets/arrow-left.png'
import ArrowRight from '../../assets/arrow-right.png'
import TestimonialCard from '../../components/TestimonialCard'
import EmailImg from '../../assets/emailBox.png'


export default function DressStyle() {
  return (
    <>
  <section className="bg-gray-100 lg:h-[866px] max-w-full lg:mx-[100px] mx-4 rounded-[40px] overflow-hidden">
  <div className="text-center pt-12 lg:pt-[70px] px-4">
    <CustomHeading text="BROWSE BY DRESS STYLE" />
  </div>

  <div className="px-4 lg:px-16 pt-8 lg:pt-[60px] pb-[30px]">
    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-5 mb-4 lg:mb-5">
      <div className="w-[310px] lg:w-[407px] h-[190px] lg:h-[289px] rounded-xl overflow-hidden">
        <img 
          className="w-full h-full hover:scale-105 transition-transform duration-300" 
          src={CasualImage} 
          alt="Casual Dress Style" 
        />
      </div>
      <div className="w-[310px] lg:w-[689px] h-[190px] lg:h-[289px] rounded-xl overflow-hidden">
        <img 
          className="w-full h-full hover:scale-105 transition-transform duration-300" 
          src={Formal} 
          alt="Formal Dress Style" 
        />
      </div>
    </div>

    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-5">
      <div className="w-[310px] lg:w-[689px] h-[190px] lg:h-[289px] rounded-xl overflow-hidden">
        <img 
          className="w-full h-full hover:scale-105 transition-transform duration-300" 
          src={PartyImg} 
          alt="Party Dress Style" 
        />
      </div>
      <div className="w-[310px] lg:w-[407px] h-[190px] lg:h-[289px] rounded-xl overflow-hidden">
        <img 
          className="w-full h-full hover:scale-105 transition-transform duration-300" 
          src={GymImg} 
          alt="Gym Dress Style" 
        />
      </div>
    </div>
  </div>
</section>
 <div className="flex justify-between mx-[16px] mt-[80px] md:mx-[100px]">
    <CustomHeading text="OUR HAPPY CUSTOMERS" className="text-center pt-[60px]" />
    <div className="flex">
        <img className="h-[24px] w-[24px]" src={ArrowLeft} alt="" />
        <img className="h-[24px] w-[24px]" src={ArrowRight} alt="" />
    </div>
   </div>
  <div className=" flex flex-col items-center justify-center gap-[16px] 
  mt-[40px] mb-[80px] mx-[20px]
  
  md:grid md:grid-cols-2 md:place-items-center md:px-[20px]
  
  lg:grid lg:grid-cols-2 lg:gap-[16px] lg:items-center lg:px-[100px] lg:mx-[0px]
  
  xl:flex xl:flex-row xl:justify-between xl:items-center xl:gap-[16px] xl:px-[100px] ">
    <TestimonialCard />
     <TestimonialCard />
      <TestimonialCard />
       <TestimonialCard />
  </div>
  {/* <section className="w-full bg-[#efefef] mt-[80.42px]">

    
  </section> */}
   </>
  )
}
