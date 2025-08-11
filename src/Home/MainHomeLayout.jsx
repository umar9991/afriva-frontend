import React from 'react'
import Navbar from './pages/Navbar'
import Content from './pages/Content'
import NewArrivals from './pages/NewArrivals'
import DressStyle from './pages/DressStyle'
import Footer from './pages/Footer'

export default function MainHomeLayout() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Content />
      <NewArrivals />
      <DressStyle />
      <Footer />
    </div>
  )
}
