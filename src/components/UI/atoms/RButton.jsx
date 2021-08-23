import React from 'react'

const RButton = ({onClick, children }) => {
  return (
    <button className={`bg-app-main-blue text-white rounded-lg rounded-bl-none px-8 py-3 min-w-max`} onClick={onClick}>
      { children }
    </button>
  )
}

export default RButton
