import React from 'react'
import BannerSlider from './HomeComponents/BannerSlider'
import About from './HomeComponents/About'
import SuccessSection from './HomeComponents/SuccessSection'
import Testimonials from './HomeComponents/Testimonials'
import FeaturedLessons from './HomeComponents/FeaturedLessons'
import LessonsPage from './HomeComponents/Lessonspage'
import { Link } from 'react-router-dom'
import Banner from './HomeComponents/Banner'
import WhyLearnWithLingo from './HomeComponents/WhyLearnWithLingo'
import HeroSection from './HomeComponents/HeroSection'

const Home = () => {
  return (
    <div>
      {/* <BannerSlider /> */}
      <Banner/>
      <HeroSection/>
      <WhyLearnWithLingo/>
      {/* <About /> */}
      {/* <SuccessSection /> */}
      <Testimonials />
      {/* <FeaturedLessons /> */}
      <About />
    </div>
  )
}

export default Home