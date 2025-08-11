import React, { useState } from 'react';
import Cart from '../../assets/cart.png';
import WishlistIcon from '../../components/WishListIcon';
import Heart from '../../assets/heart.png';
import Notification from '../../assets/notification.png';
import Avatar from '../../assets/avatar.png';
import Logo from '../../assets/Afriva-logoo.png';
import { Link } from 'react-router-dom';
import { showSuccessToast, showErrorToast } from '../../utils/ToastContainer';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <section className="px-4 py-4 flex justify-between items-center md:px-4 lg:px-[100px] md:pt-6">
        <div className='flex gap-4'>

  <img 
          className="h-8 w-[86px] md:h-[59px] md:w-[161px]" 
          src={Logo} 
          alt="Logo" 
        />

        <button 
          id="menu-btn" 
          className="lg:hidden text-black text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        </div>
      

        <div onClick={() => showSuccessToast('Text clicked successfully!')} className="hidden lg:flex lg:flex-row lg:items-center lg:gap-4">
        
            <div className="text-black text-base font-normal font-['Inter'] cursor-pointer hover:text-gray-600">
              New Arrivals
            </div>
          <div className="text-black text-base font-normal font-['Inter'] cursor-pointer hover:text-gray-600">
            Brands
          </div>
        </div>

        <div className="hidden lg:self-stretch lg:px-4 lg:py-3 lg:max-w-[621px] max-h-[48px] bg-[#efefef] rounded-[62px] lg:inline-flex items-center gap-3 overflow-hidden">
          <div className="w-6 h-6 relative flex items-center justify-center">
            <svg
              className="w-[20px] h-[20px] text-black/40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M5.5 11a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent outline-none w-full text-black/70 text-base font-normal font-['Inter'] placeholder:text-black/40"
          />
        </div>

        <div onClick={() => showSuccessToast('Icon clicked successfully!')} className="hidden sm:flex flex-row items-center gap-4">
          <WishlistIcon imgSrc={Cart} altText="Cart" />
          <WishlistIcon imgSrc={Heart} altText="Wishlist" />
          <WishlistIcon imgSrc={Notification} altText="Notifications" />
          <WishlistIcon imgSrc={Avatar} altText="Avatar" />
        </div>

        <div className="flex sm:hidden gap-3">
          <WishlistIcon  imgSrc={Cart} altText="Cart" />
           <WishlistIcon imgSrc={Heart} altText="Wishlist" />
          <WishlistIcon imgSrc={Notification} altText="Notifications" />
          <WishlistIcon imgSrc={Avatar} altText="Avatar" />
        </div>
      </section>

      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md px-4 py-2">
          <div className="mb-4">
            <div className="flex items-center px-4 py-3 max-w-full bg-[#efefef] rounded-[62px]">
              <div className="w-6 h-6 relative flex items-center justify-center">
                <svg
                  className="w-[20px] h-[20px] text-black/40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M5.5 11a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for products..."
                className="bg-transparent outline-none w-full text-black/70 text-base font-normal font-['Inter'] placeholder:text-black/40 ml-2"
              />
            </div>
          </div>
          
          <Link to="/newArrival">
            <div className="px-4 py-3 text-black text-base font-normal font-['Inter'] cursor-pointer hover:bg-gray-100 rounded">
              New Arrivals
            </div>
          </Link>
          <div className="px-4 py-3 text-black text-base font-normal font-['Inter'] cursor-pointer hover:bg-gray-100 rounded">
            Brands
          </div>
          
          {/* <div className="flex justify-around px-4 py-3 sm:hidden">
            <WishlistIcon imgSrc={Heart} altText="Wishlist" />
            <WishlistIcon imgSrc={Notification} altText="Notifications" />
            <WishlistIcon imgSrc={Avatar} altText="Avatar" />
          </div> */}
        </div>
      )}
    </>
  );
}