import React from 'react'
import { motion } from 'framer-motion'
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
      {[CasualImage, Formal].map((img, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          className={idx === 0 ? "w-[310px] lg:w-[407px] h-[190px] lg:h-[289px] rounded-xl overflow-hidden" : "w-[310px] lg:w-[689px] h-[190px] lg:h-[289px] rounded-xl overflow-hidden"}
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            className="w-full h-full"
            src={img}
            alt={idx === 0 ? 'Casual Dress Style' : 'Formal Dress Style'}
          />
        </motion.div>
      ))}
    </div>

    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-5">
      {[PartyImg, GymImg].map((img, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          className={idx === 0 ? "w-[310px] lg:w-[689px] h-[190px] lg:h-[289px] rounded-xl overflow-hidden" : "w-[310px] lg:w-[407px] h-[190px] lg:h-[289px] rounded-xl overflow-hidden"}
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            className="w-full h-full"
            src={img}
            alt={idx === 0 ? 'Party Dress Style' : 'Gym Dress Style'}
          />
        </motion.div>
      ))}
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
    {[0,1,2,3].map((i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: i * 0.1, duration: 0.45 }}
      >
        <TestimonialCard />
      </motion.div>
    ))}
  </div>
  {/* <section className="w-full bg-[#efefef] mt-[80.42px]">

    
  </section> */}
   </>
  )
}
