import React from 'react'

export const Button = ({ children, onButoonClick }) => {
  return (
    <button style={{ fontSize: '30px' }} onClick={ onButoonClick }>{ children }</button>
  )
}