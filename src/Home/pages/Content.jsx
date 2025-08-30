import React from 'react'
import { motion } from 'framer-motion'
import BgPic from '../../assets/BgImg.png'
import Versace from '../../assets/versace.png'
import Zara from '../../assets/zara.png'
import Gucci from '../../assets/gucci.png'
import prada from '../../assets/prada.png'
import calvin from '../../assets/calvin.png'
export default function Content() {
  return (
    <>
    <section  className="h-screen bg-cover w-full max-h-[703px] pl-[16px] pt-[30px]"
      style={{ backgroundImage: `url(${BgPic})`  } } >
       <div className="w-full px-4 sm:px-6 lg:px-[100px] py-8 sm:py-12 lg:py-[39px]">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6 }}
    className="w-full max-w-[577px] flex flex-col gap-4 sm:gap-6"
  >
    <motion.h1
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-black leading-tight sm:leading-tight lg:leading-tight"
    >
      FIND CLOTHES THAT MATCHES YOUR STYLE
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="text-black/60 text-base sm:text-lg leading-relaxed max-w-[545px]"
    >
      Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
    </motion.p>
  </motion.div>

  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="mt-6 sm:mt-[24px] mb-6 sm:mb-[38px] w-full sm:w-[210px] h-[52px] cursor-pointer px-4 sm:px-[54px] py-4 bg-[#8BC53F] hover:bg-[#7CB235] rounded-[62px] flex justify-center items-center gap-3 transition-colors duration-200"
  >
    <span className="text-white text-lg font-semibold">Shop Now</span>
  </motion.button>

  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.4 }}
    className="grid grid-cols-2 gap-6 sm:flex sm:justify-start sm:items-start sm:gap-8"
  >
    {[0,1,2].map((i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * i, duration: 0.4 }}
        className={i===2 ? "col-span-2 flex flex-col gap-1 sm:gap-2 text-center sm:text-left sm:col-auto" : "flex flex-col gap-1 sm:gap-2 text-center sm:text-left"}
      >
        <span className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-black">{["200+","2,000+","30,000+"][i]}</span>
        <span className="text-black/60 text-base leading-snug">{["International Brands","High-Quality Products","Happy Customers"][i]}</span>
      </motion.div>
    ))}
  </motion.div>
</div>
    </section>
  <section className="w-full bg-[#7F0000] flex flex-wrap justify-center items-center px-4 py-6 sm:px-[100px] sm:h-[122px] sm:py-0 gap-4 sm:justify-between sm:gap-0">
  <img className="max-h-[25px] max-w-[80px] sm:max-h-[33.16px] sm:max-w-[166.48px]" src={Versace} alt="Versace" />
  <img className="max-h-[25px] max-w-[80px] sm:max-h-[33.16px] sm:max-w-[166.48px]" src={Zara} alt="Zara" />
  <img className="max-h-[25px] max-w-[80px] sm:max-h-[33.16px] sm:max-w-[166.48px]" src={Gucci} alt="Gucci" />
  <img className="max-h-[25px] max-w-[80px] sm:max-h-[33.16px] sm:max-w-[166.48px]" src={prada} alt="Prada" />
  <img className="max-h-[25px] max-w-[80px] sm:max-h-[33.16px] sm:max-w-[166.48px]" src={calvin} alt="Calvin Klein" />
</section>
    </>
  )
}
