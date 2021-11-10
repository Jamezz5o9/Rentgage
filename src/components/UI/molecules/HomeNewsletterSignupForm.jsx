import React, { useState } from "react";
import RButton from "../atoms/RButton";
import RInputError from "../atoms/RInputError";
import RTextField from "../atoms/RTextField";

const HomeNewsletterSignupForm = () => {
  const [formData, setFormData] = useState({})
  const [inputError, setInputError ] = useState('')

  const handleInputError = (message) => {
    setInputError(message)    
  }

  const handleInputSuccess = (value) => {
    formData.email = value
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="sm:flex justify-center gap-3 mx-auto sm:h-16">
    
      {/* Making new changes*/}
     { /* <RTextField 
          placeholder="Email Address"
          type="email"
          name="email"
          pattern={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
          errorMessage="Please enter a valid email address"
          onInvalidInput={handleInputError}
          onValidInput={handleInputSuccess}
          className="py-3.5 mb-3 sm:mb-0"
        />
     */ }

        <RButton onClick={() => console.log(formData)}><a href="https://forms.gle/YZMnrKVWbuE9q1NK8" target="_blank">Join the waitlist</a>
          
        </RButton>
      </div>
      <RInputError> 
        { inputError }
      </RInputError>
    </div>
  )
}

export default HomeNewsletterSignupForm
