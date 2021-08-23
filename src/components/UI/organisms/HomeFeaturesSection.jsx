import React from 'react'
import RContainer from '../atoms/RContainer'
import HomeFeaturesCard from '../molecules/HomeFeaturesCard'
import FeatureOneImage from '../../../assets/icons/access-to-apartments.svg'
import FeatureTwoImage from '../../../assets/icons/renpay.svg'
import FeatureThreeImage from '../../../assets/icons/customer-representation.svg'
import RTitle from '../atoms/RTitle'

const homeFeatures = [
  {
    id: 1,
    src: FeatureOneImage,
    title: 'Access to apartments',
    content: 'With a wide range of listed apartments on our platform, you can easily find an apartment that suites your taste.'
  },
  {
    id: 2,
    src: FeatureTwoImage,
    title: 'Renpay',
    content: 'Don’t have enough funds to get your dream apartment? Rentgage provides a payment plan that helps you move in first.'
  },
  {
    id: 3,
    src: FeatureThreeImage,
    title: 'Customer Representation',
    content: 'We are working to make housing easily accessible to people across all demographics. No bias from Landlords, No agent issues.'
  },
]

const HomeFeaturesSection = () => {
  return (
    <section className="bg-app-light-blue py-28 bg-opacity-20">
      <RContainer>
        <RTitle className="text-center text-3xl mb-10">
          Why use Rentgage?
        </RTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 gap-4 xl:gap-20">
          {
            homeFeatures.map( 
              feature => 
                <HomeFeaturesCard 
                  image={feature.src}
                  title={feature.title}
                  key={feature.id} 
                >
                  { feature.content }
                </HomeFeaturesCard>
            )
          }
        </div>
      </RContainer>
    </section>
  )
}

export default HomeFeaturesSection
