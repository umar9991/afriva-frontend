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
      
      // Here you would normally send the data to your backend
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
    <section className="h-screen flex items-center justify-center md:items-center md:flex md:justify-between md:pl-[63px] lg:flex lg:justify-between lg:pl-[63px]">
      <div className="">
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
        
        {/* Avatar error message */}
        {errors.avatar && (
          <div className="flex justify-center mb-4">
            <p className="text-red-500 text-sm">{errors.avatar}</p>
          </div>
        )}

        <CustomLabel text="User name"/>
        <CustomTextField 
          placeholder="Enter brand name"
          value={formData.username}
          onChange={(e) => handleInputChange('username', e.target.value)}
        />
        {errors.username && (
          <div className="mb-4 -mt-2">
            <p className="text-red-500 text-sm">{errors.username}</p>
          </div>
        )}

        <CustomLabel text="Phone number"/>
        <CustomTextField  
          placeholder="Enter number"
          value={formData.phoneNumber}
          onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
        />
        {errors.phoneNumber && (
          <div className="mb-4 -mt-2">
            <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
          </div>
        )}

        {errors.submit && (
          <div className="mb-4">
            <p className="text-red-500 text-sm text-center">{errors.submit}</p>
          </div>
        )}

        <div onClick={handleSubmit}>
          <CustomButton 
            label={isSubmitting ? 'Completing...' : 'Complete'} 
            to={isFormValid && !isSubmitting ? '/main-home' : null}
            disabled={!isFormValid || isSubmitting}
          />
        </div>
      </div>
      
      <div>
        <SideImage src={SignUpImg}/>
      </div>
    </section>
  )
}