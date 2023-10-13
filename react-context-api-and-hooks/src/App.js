import React from 'react'
import { useEffect } from 'react'
import { useCounterContext } from '/react-context-api-and-hooks/src/contexts/CounterContext/CounterContextProvider.js'

const App = () => {
  const [ state, actions ] = useCounterContext()
  
  useEffect(() => {
    actions.increase()
  }, [actions])
  
  return (
    <div onClick={ () => actions.increase() }>
      Heloooooo
    </div>
  )
}

export default App