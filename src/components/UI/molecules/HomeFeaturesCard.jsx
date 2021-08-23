import React from 'react'
import backgroundIllustration from '../../../assets/images/card-background-illustration.svg'
import RImage from '../atoms/RImage'
import RTitle from '../atoms/RTitle'

const HomeFeaturesCard = ({image, title, children }) => {
  return (
    <div className="bg-white px-5 sm:px-8 pt-8 pb-14 xl:pb-20 rounded bg-no-repeat bg-right-bottom" style={{ backgroundImage: `url(${backgroundIllustration})` }}>
      <RImage src={image} alt={title} className="h-16 max-w-max" />
      <RTitle className="text-2xl mt-3 mb-6">
        { title }
      </RTitle>
      <p className="text-gray-500 leading-7">
        { children }
      </p>
    </div>
  )
}

export default HomeFeaturesCard
