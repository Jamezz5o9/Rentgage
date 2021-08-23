import React from 'react'

const RTitle = ({ children, className }) => {
  return (
    <h1 className={`text-app-text-blue font-bold leading-tight md:leading-tight ${className}`}>
      { children }
    </h1>
  )
}

export default RTitle
