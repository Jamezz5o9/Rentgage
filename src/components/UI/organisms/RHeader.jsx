import React from 'react'
import RImage from '../atoms/RImage'
import siteLogo from '../../../assets/images/logo.svg'
import RContainer from '../atoms/RContainer'

const RHeader = () => {
  return (
    <RContainer>
      <header className="flex items-center justify-between py-4">
        <RImage src={siteLogo} alt="rentgage logo" className="h-10 md:h-12" />
        <p className="px-5 py-1.5 sm:py-2 bg-app-light-blue text-app-dark-blue rounded-full text-sm font-medium">
          Coming soon
        </p>
      </header>
    </RContainer>
  )
}

export default RHeader
