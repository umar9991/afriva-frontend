import React, { useState } from 'react'
import CustomTextField from '../../components/CustomTextField'
import CustomLabel from '../../components/CustomLabel'
import CustomHeading from '../../components/CustomHeading'
import SubHeading from '../../components/SubHeading'
import Logo from '../../components/Logo'
import SideImage from '../../components/SideImage'
import SignUpImg from "../.././assets/SignUp-Side.png"
import CustomButton from '../../components/CustomButton'
import AvatarImg from '../../assets/avatar.png'

export default function SetUpAvatar() {
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    avatar: null
  })
  
  const [avatarPreview, setAvatarPreview] = useState(AvatarImg)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const handleAvatarChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({
          ...prev,
          avatar: 'Please select a valid image file'
        }))
        return
      }
      
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          avatar: 'Image size should be less than 5MB'
        }))
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        setAvatarPreview(e.target.result)
      }
      reader.readAsDataURL(file)
      
      setFormData(prev => ({
        ...prev,
        avatar: file
      }))
      
      if (errors.avatar) {
        setErrors(prev => ({
          ...prev,
          avatar: ''
        }))
      }
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required'
    } else if (formData.username.trim().length < 3) {
      newErrors.username = 'Username must be at least 3 characters'
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required'
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid phone number'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Form submitted with data:', {
        username: formData.username,
        phoneNumber: formData.phoneNumber,
        avatar: formData.avatar ? 'File uploaded' : 'No file'
      })
      
      
      
      
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors(prev => ({
        ...prev,
        submit: 'An error occurred. Please try again.'
      }))
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.username.trim() && formData.phoneNumber.trim() && Object.keys(errors).length === 0

  return (
    <section className="min-h-screen h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 md:flex-row md:items-center md:justify-between md:pl-[63px] lg:pl-[63px] md:px-0">
  
  <div className="md:hidden w-full h-full relative">
    <div className="absolute inset-0">
      <SideImage src={SignUpImg} className="w-full h-full object-cover" />
    </div>
    
    <div className="absolute inset-0 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm mx-auto">
        <Logo className="mb-4"/>
        <CustomHeading text="Setup your profile" />
        <SubHeading text="Fill in the details to complete your profile."/>
        
        {/* Avatar Section - Mobile */}
        <div className="flex justify-center items-center">
          <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] relative flex justify-center mb-[16px]">
            <img
              src={avatarPreview}
              alt="avatar"
              className="w-full h-full rounded-full object-cover"
            />
            
            <input
              type="file"
              id="avatar-upload-mobile"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
            
            <label
              htmlFor="avatar-upload-mobile"
              className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] absolute right-0 bottom-0 bg-[#12B76A] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#0ea55a] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536M9 11l6-6m2 2l-6 6m0 0L6 18H3v-3l6-6z"
                />
              </svg>
            </label>
          </div>
        </div>
        
        {errors.avatar && (
          <div className="flex justify-center mb-3">
            <p className="text-red-500 text-xs">{errors.avatar}</p>
          </div>
        )}

        <CustomLabel text="User name"/>
        <CustomTextField 
          placeholder="Enter brand name"
          value={formData.username}
          onChange={(e) => handleInputChange('username', e.target.value)}
          className="mb-3"
        />
        {errors.username && (
          <div className="text-red-500 text-xs">{errors.username}</div>
        )}

        <CustomLabel text="Phone number"/>
        <CustomTextField  
          placeholder="Enter number"
          value={formData.phoneNumber}
          onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
          className="mb-3"
        />
        {errors.phoneNumber && (
          <div className="text-red-500 text-xs">{errors.phoneNumber}</div>
        )}

        {errors.submit && (
          <div className="text-red-500 text-xs text-center mb-3">{errors.submit}</div>
        )}

        <div onClick={handleSubmit}>
          <CustomButton 
            label={isSubmitting ? 'Completing...' : 'Complete'} 
            to={isFormValid && !isSubmitting ? '/main-home' : null}
            disabled={!isFormValid || isSubmitting}
          />
        </div>
      </div>
    </div>
  </div>

  <div className="hidden md:block">
    <Logo className=""/>
    <CustomHeading text="Setup your profile" />
    <SubHeading text="Fill in the details to complete your profile."/>
    
    <div className="flex justify-center items-center">
      <div className="w-[140.47px] h-[140.47px] relative flex justify-center mb-[20px]">
        <img
          src={avatarPreview}
          alt="avatar"
          className="w-full h-full rounded-full object-cover"
        />
        
        <input
          type="file"
          id="avatar-upload"
          accept="image/*"
          onChange={handleAvatarChange}
          className="hidden"
        />
        
        <label
          htmlFor="avatar-upload"
          className="w-[34.11px] h-[34.11px] absolute left-[101.54px] top-[99.95px] bg-[#12B76A] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#0ea55a] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[14px] h-[14px] text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.232 5.232l3.536 3.536M9 11l6-6m2 2l-6 6m0 0L6 18H3v-3l6-6z"
            />
          </svg>
        </label>
      </div>
    </div>
    
    {errors.avatar && (
      <div className="flex justify-center mb-4">
        <p className="text-red-500 text-sm">{errors.avatar}</p>
      </div>
    )}

    <CustomLabel text="User name"/>
    <CustomTextField className="mb-[20px]" 
      placeholder="Enter brand name"
      value={formData.username}
      onChange={(e) => handleInputChange('username', e.target.value)}
    />
    {errors.username && (
      <div className="text-red-500 text-sm">{errors.username}</div>
    )}

    <CustomLabel text="Phone number"/>
    <CustomTextField  
      placeholder="Enter number"
      value={formData.phoneNumber}
      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
    />
    {errors.phoneNumber && (
      <div className="text-red-500 text-sm">{errors.phoneNumber}</div>
    )}

    {errors.submit && (
      <div className="text-red-500 text-sm text-center mb-4">{errors.submit}</div>
    )}

    <div onClick={handleSubmit}>
      <CustomButton 
        label={isSubmitting ? 'Completing...' : 'Complete'} 
        to={isFormValid && !isSubmitting ? '/main-home' : null}
        disabled={!isFormValid || isSubmitting}
      />
    </div>
  </div>
  
  <div className="hidden md:block">
    <SideImage src={SignUpImg}/>
  </div>
  
</section>
  )
}