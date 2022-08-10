import React from 'react'

export const Button = ({ text, fn }) => {
  return (
    <button onClick={fn}>{text}</button>
  )
}
