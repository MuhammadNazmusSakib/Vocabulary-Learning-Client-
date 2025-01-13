import React from 'react'
import About from './HomeComponents/About'
import Testimonials from './HomeComponents/Testimonials'
import Banner from './HomeComponents/Banner'
import WhyLearnWithLingo from './HomeComponents/WhyLearnWithLingo'
import HeroSection from './HomeComponents/HeroSection'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HeroSection/>
      <WhyLearnWithLingo/>
      <Testimonials />
      <About />
    </div>
  )
}

export default Home