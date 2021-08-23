import React from 'react'
import RTitle from '../atoms/RTitle'
import RImage from '../atoms/RImage'
import HomeIllustration from '../../../assets/images/app-illustration.png'
import RContainer from '../atoms/RContainer'

const HomeHeroSection = () => {
  return (
    <RContainer>
      <section className="grid sm:grid-cols-2 gap-20 sm:gap-0 items-center py-20 xl:py-10">
        <div className="sm:max-w-xl sm:mx-0 text-center sm:text-left max-w-sm mx-auto">
          <RTitle className="text-3xl md:text-5xl">
            All in one solution to accommodation
          </RTitle>
          <p className="text-app-text-green max-w-lg leading-loose mt-6">
            We make renting easy for everyone. Rentgage makes finding apartments, paying rent and making flexible payment plans in Lagos fast, easy and hassle free.
          </p>
        </div>
        <RImage src={HomeIllustration} alt="rentgage app" className="w-full" />
      </section>
    </RContainer>
  )
}

export default HomeHeroSection
