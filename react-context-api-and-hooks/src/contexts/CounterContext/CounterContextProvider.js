import React from 'react'
import { createContext, useContext, useState } from 'react'

const Context = createContext()

export const initialState = {
  counter: 0,
  loading: false
}

export const CounterContextProvider = ({ children }) => {
  const [ state, dispatch ] = useState(initialState)
  
  return (
    <Context.Provider value={[ state, dispatch ]}>
       { children }
    </Context.Provider>
  )
}

export const useCounterContext = () => {
  const context = useContext(Context)
  
  if (typeof context === 'undefined') {
    throw new Error('You to use useCounterContext <CounterContextProvider>')
  }
  
  console.log(context)
  return [ ...context ]
}






