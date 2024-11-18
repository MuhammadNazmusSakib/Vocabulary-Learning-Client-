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
      <SuccessSection />
      <Testimonials />
      <FeaturedLessons />
      <LessonsPage />
    </div>
  )
}

export default Home