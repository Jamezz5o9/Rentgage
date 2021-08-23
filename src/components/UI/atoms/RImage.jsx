import React from 'react'

const RImage = ({ src, alt, className }) => {
  return (
    <div className={`${className}`}>
      <img src={src} alt={ alt || `rentgage`} className="block w-full h-full" />
    </div>
  )
}

export default RImage
