import React, { useState, Component } from 'react'

const RTextField = ({
  placeholder,
  type,
  name,
  pattern,
  errorMessage,
  onValidInput,
  onInvalidInput,
  className
}) => {
  const [ inputValue, setInputValue ] = useState('')

  const validateInput = (value) => {
    setInputValue(value)
    const inputIsValid = pattern.test(value)
    if (inputIsValid) {
      onValidInput(value)
      onInvalidInput('')
    } else {
      onInvalidInput(errorMessage)
    }
  }

  return (
    <div className="w-full">
      <input 
        placeholder={placeholder}
        type={type}
        name={name}
        className={`bg-app-light-blue bg-opacity-20 px-10 w-full h-full text-app-text-blue font-medium rounded-md ${className}`}
        value={inputValue}
        onChange={(e) => validateInput(e.target.value)}
      />
    </div>
  )
}

export default RTextField
