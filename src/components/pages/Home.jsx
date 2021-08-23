import React from 'react'
import HomeFeaturesSection from '../UI/organisms/HomeFeaturesSection'
import HomeHeroSection from '../UI/organisms/HomeHeroSection'
import HomeNewsLetterSection from '../UI/organisms/HomeNewsletterSection'
import RFooter from '../UI/organisms/RFooter'
import RHeader from '../UI/organisms/RHeader'

const Home = () => {
  return (
    <>
      <RHeader />
      <HomeHeroSection />
      <HomeFeaturesSection />
      <HomeNewsLetterSection />
      <RFooter />
    </>
  )
}

export default Home
