import React from 'react'
import { createContext, useContext, useReducer, useRef } from 'react'
import { reducer } from '/react-context-api-and-hooks/src/contexts/CounterContext/reducer.js'
import { buildActions } from '/react-context-api-and-hooks/src/contexts/CounterContext/build.actions.js'

const Context = createContext()

export const initialState = {
  counter: 0,
  loading: false
}

export const CounterContextProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  const actions = useRef(buildActions(dispatch))
  
  return (
    <Context.Provider value={[ state, actions.current ]}>
       { children }
    </Context.Provider>
  )
}

export const useCounterContext = () => {
  const context = useContext(Context)
  
  if (typeof context === 'undefined') {
    throw new Error('You to use useCounterContext <CounterContextProvider>')
  }
  
  return [ ...context ]
}






