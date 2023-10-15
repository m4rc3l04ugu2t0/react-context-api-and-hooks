import React from 'react'

export const Button = ({ children, onButoonClick, disabled = false }) => {
  return (
    <button 
      style={{ fontSize: '30px' }}
      onClick={ onButoonClick }
      disabled={ disabled }>
        { children }
    </button>
  )
}