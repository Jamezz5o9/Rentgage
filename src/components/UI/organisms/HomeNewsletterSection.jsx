import React from 'react'
import RContainer from '../atoms/RContainer'
import RTitle from '../atoms/RTitle'
import RImage from '../atoms/RImage'
import CuteEmo from '../../../assets/icons/cute-emo.svg'
import LeftFingerEmo from '../../../assets/icons/left-finger-emo.svg'
import RightFingerEmo from '../../../assets/icons/right-finger-emo.svg'
import theNationLogo from '../../../assets/images/the-nation-logo.svg'
import FCMBLogo from '../../../assets/images/fcmb-logo.svg'
import HomeNewsletterSignupForm from '../molecules/HomeNewsletterSignupForm'

const HomeNewsLetterSection = () => {
  return (
    <section className="text-center py-28">
      <RContainer>
        <RTitle className="text-xl mb-8 leading-normal">
          Be the first to know when we launch, and get exclusive information about our product.
        </RTitle>
        <div className="sm:flex items-center mx-auto max-w-max">
          <p className="mr-1">
          We’ll like to gist you regularly about what we’re doing at rentgage
          </p>
          <div className="flex items-center justify-center max-w-max mx-auto mt-2 sm:mt-0 gap-1">
            <RImage src={CuteEmo} className="h-6" />            
            <RImage src={RightFingerEmo} className="h-6" />            
            <RImage src={LeftFingerEmo} className="h-6" />            
          </div>
        </div>
        <div className="mt-14">
          <HomeNewsletterSignupForm />
        </div>
        <div className="mt-10">
          <p className="text-app-text-blue font-medium text-lg mb-4">
            Featured In
          </p>
          <RImage src={theNationLogo} className="h-12" />
        </div>
        <div className="mt-16">
          <p className="text-app-text-blue font-medium text-lg mb-4">
            In partnership with
          </p>
          <RImage src={FCMBLogo} className="h-20" />
        </div>
      </RContainer>
    </section>
  )
}

export default HomeNewsLetterSection
