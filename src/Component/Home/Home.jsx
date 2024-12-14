import React from 'react'
import BannerSlider from './HomeComponents/BannerSlider'
import About from './HomeComponents/About'
import SuccessSection from './HomeComponents/SuccessSection'
import Testimonials from './HomeComponents/Testimonials'
import FeaturedLessons from './HomeComponents/FeaturedLessons'
import LessonsPage from './HomeComponents/Lessonspage'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <About />
      <div className='bg-gray-200 h-1'></div>
      <SuccessSection />
      <div className='bg-gray-200 h-1'></div>
      <Testimonials />
      <div className='bg-gray-200 h-1'></div>
      <FeaturedLessons />
      {/* <LessonsPage /> */}
    </div>
  )
}

export default Home