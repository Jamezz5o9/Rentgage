import React from "react";


const RInputError = ({ children }) => {
  return (
    <p className="text-sm text-red-500 text-left mt-1">
      { children }
    </p>
  )
}

export default RInputError
