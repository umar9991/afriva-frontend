import React, { useState } from 'react';
import Cart from '../../assets/cart.png';
import WishlistIcon from '../../components/WishListIcon';
import Heart from '../../assets/heart.png';
import Notification from '../../assets/notification.png';
import Avatar from '../../assets/avatar.png';
import Logo from '../../assets/Afriva-logoo.png';
import { Link, useNavigate } from 'react-router-dom';
import { showSuccessToast, showErrorToast } from '../../utils/ToastContainer';
import { motion, AnimatePresence } from 'framer-motion';
import { signout } from '../../services/authService';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); 
  const [searchQuery, setSearchQuery] = useState('');
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      showSuccessToast(`Searching for: ${searchQuery}`);
    }
  };

  const handleAvatarClick = () => {
    setIsAvatarDropdownOpen(!isAvatarDropdownOpen);
  };

  const handleSignout = async () => {
    try {
      await signout();
      showSuccessToast('Successfully signed out');
      setIsAvatarDropdownOpen(false);
      navigate('/login');
    } catch (error) {
      showErrorToast('Failed to sign out');
      console.error('Signout error:', error);
    }
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.avatar-dropdown')) {
      setIsAvatarDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <motion.section 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-4 py-4 flex justify-between items-center md:px-4 lg:px-[100px] md:pt-6 bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm"
      >
        <div className='flex gap-4'>
          <motion.img 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-8 w-[86px] md:h-[59px] md:w-[161px] cursor-pointer" 
            src={Logo} 
            alt="Logo" 
          />

          <motion.button 
            whileTap={{ scale: 0.9 }}
            id="menu-btn" 
            className="lg:hidden text-black text-2xl p-1 rounded hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </motion.button>
        </div>
      
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hidden lg:flex lg:flex-row lg:items-center lg:gap-6"
        >
          <motion.div 
            whileHover={{ y: -2 }}
            className="text-black text-base font-medium font-['Inter'] cursor-pointer hover:text-[#8BC53F] transition-colors"
          >
            New Arrivals
          </motion.div>
          <motion.div 
            whileHover={{ y: -2 }}
            className="text-black text-base font-medium font-['Inter'] cursor-pointer hover:text-[#8BC53F] transition-colors"
          >
            Brands
          </motion.div>
          <motion.div 
            whileHover={{ y: -2 }}
            className="text-black text-base font-medium font-['Inter'] cursor-pointer hover:text-[#8BC53F] transition-colors"
          >
          </motion.div>
        </motion.div>

        <form 
          onSubmit={handleSearch} 
          className="hidden lg:self-stretch lg:px-4 lg:py-3 lg:max-w-[621px] max-h-[48px] bg-[#efefef] rounded-[62px] lg:inline-flex items-center gap-3 overflow-hidden"
        >
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products..."
            className="bg-transparent outline-none w-full text-black/70 text-base font-normal font-['Inter'] placeholder:text-black/40"
          />
        </form>

        <div className="hidden sm:flex flex-row items-center gap-4">
          <WishlistIcon imgSrc={Cart} altText="Cart" badgeCount={cartCount} />
          <WishlistIcon imgSrc={Heart} altText="Wishlist" />
          <WishlistIcon imgSrc={Notification} altText="Notifications" />
          <div className="relative avatar-dropdown">
            <motion.img 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={Avatar} 
              alt="Avatar" 
              className="w-8 h-8 cursor-pointer"
              onClick={handleAvatarClick}
            />
            <AnimatePresence>
              {isAvatarDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                >
                  <motion.button
                    whileHover={{ backgroundColor: "#f3f4f6" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSignout}
                    className="w-full px-4 py-3 text-left text-gray-700 hover:text-gray-900 font-medium text-sm flex items-center gap-3"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Sign Out
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex sm:hidden gap-3">
          <WishlistIcon imgSrc={Cart} altText="Cart" badgeCount={cartCount} />
          <WishlistIcon imgSrc={Heart} altText="Wishlist" />
          <WishlistIcon imgSrc={Notification} altText="Notifications" />
          <div className="relative avatar-dropdown">
            <motion.img 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={Avatar} 
              alt="Avatar" 
              className="w-8 h-8 cursor-pointer"
              onClick={handleAvatarClick}
            />
            <AnimatePresence>
              {isAvatarDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                >
                  <motion.button
                    whileHover={{ backgroundColor: "#f3f4f6" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSignout}
                    className="w-full px-4 py-3 text-left text-gray-700 hover:text-gray-900 font-medium text-sm flex items-center gap-3"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Sign Out
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-md px-4 py-2 overflow-hidden"
          >
            <div className="mb-4">
              <form onSubmit={handleSearch} className="flex items-center px-4 py-3 max-w-full bg-[#efefef] rounded-[62px]">
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products..."
                  className="bg-transparent outline-none w-full text-black/70 text-base font-normal font-['Inter'] placeholder:text-black/40 ml-2"
                />
              </form>
            </div>
            
            <Link to="/newArrival">
              <motion.div 
                whileHover={{ backgroundColor: "rgb(243 244 246)" }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-3 text-black text-base font-normal font-['Inter'] cursor-pointer rounded"
              >
                New Arrivals
              </motion.div>
            </Link>
            <motion.div 
              whileHover={{ backgroundColor: "rgb(243 244 246)" }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-3 text-black text-base font-normal font-['Inter'] cursor-pointer rounded"
            >
              Brands
            </motion.div>
            <motion.div 
              whileHover={{ backgroundColor: "rgb(243 244 246)" }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-3 text-black text-base font-normal font-['Inter'] cursor-pointer rounded"
            >
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}