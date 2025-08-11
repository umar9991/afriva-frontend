import React from 'react'
import EmailImg from '../../assets/emailBox.png'
import logo from '../../assets/Afriva-logoo.png'
import Visa from '../../assets/visa.png'
import Card from '../../assets/card.png'
import Paypal from '../../assets/paypal.png'
import Pay from '../../assets/pay.png'
import GPay from '../../assets/gPay.png'

import { Twitter, Facebook, Instagram, Github } from "lucide-react";


export default function Footer() {
  return (
  <>
 <section className="w-full bg-[#efefef] pt-[90px] pb-10 relative md:px-[75px]">
  {/* Newsletter Section */}
  <div className="w-full px-4 sm:px-6 lg:px-8 mb-[140px] sm:mb-[60px]">
    <div className="w-full bg-[#597596] rounded-[20px] p-6 sm:p-9 flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8">
      <h2 className="text-white text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight sm:leading-snug lg:leading-[45px] text-center lg:text-left">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h2>
      
      <div className="w-full lg:w-auto flex flex-col gap-3 sm:gap-4">
        <div className="w-full sm:w-[349px] px-4 py-3 bg-white rounded-[62px] flex items-center gap-3">
          <img src={EmailImg} alt="Email" className="w-6 h-6" />
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="w-full text-black/40 text-base font-normal focus:outline-none"
          />
        </div>
        <button className="w-full sm:w-[349px] px-4 py-3 bg-white rounded-[62px] text-black text-base font-medium hover:bg-gray-100 transition-colors">
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  </div>

  <div className="w-full px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row justify-between gap-10 sm:gap-16 mb-10">
      {/* Brand Info */}
      <div className="flex flex-col gap-6 sm:gap-9">
        <img className="w-[130px] h-[47.64px]" src={logo} alt="Brand Logo" />
        <p className="text-black/60 text-sm sm:text-base max-w-[248px]">
          We have clothes that suits your style and which you're proud to wear. From women to men.
        </p>
        <div className="flex items-center gap-3">
          <a href="https://twitter.com" className="social-icon">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="https://facebook.com" className="social-icon bg-black text-white hover:bg-blue-600">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="https://instagram.com" className="social-icon hover:bg-pink-500 hover:text-white">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="https://github.com" className="social-icon hover:bg-gray-800 hover:text-white">
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Links Sections */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-16">
        <div className="flex flex-col gap-4 sm:gap-[26px]">
          <h3 className="text-black text-base font-medium uppercase tracking-[3px]">Company</h3>
          <ul className="text-black/60 text-base flex flex-col gap-3 sm:gap-4">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 sm:gap-[26px]">
          <h3 className="text-black text-base font-medium uppercase tracking-[3px]">Help</h3>
          <ul className="text-black/60 text-base flex flex-col gap-3 sm:gap-4">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 sm:gap-[26px]">
          <h3 className="text-black text-base font-medium uppercase tracking-[3px]">FAQ</h3>
          <ul className="text-black/60 text-base flex flex-col gap-3 sm:gap-4">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="pt-6 border-t border-black/10 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
      <p className="text-black/60 text-sm">
        Afriva © 2000-2023, All Rights Reserved
      </p>
      
      <div className="flex items-center gap-2 sm:gap-3">
        <img src={Visa} alt="Visa" className="w-10 h-6 sm:w-[46.61px] sm:h-[30.03px]" />
        <img src={Card} alt="Card" className="w-10 h-6 sm:w-[46.61px] sm:h-[30.03px]" />
        <img src={Paypal} alt="Paypal" className="w-10 h-6 sm:w-[46.61px] sm:h-[30.03px]" />
        <img src={Pay} alt="Pay" className="w-10 h-6 sm:w-[46.61px] sm:h-[30.03px]" />
        <img src={GPay} alt="GPay" className="w-10 h-6 sm:w-[46.61px] sm:h-[30.03px]" />
      </div>
    </div>
  </div>

  {/* CSS for social icons (can be in your CSS file) */}
  <style jsx>{`
    .social-icon {
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      transition: all 0.2s ease;
    }
  `}</style>
</section>
  </>
  )
}
