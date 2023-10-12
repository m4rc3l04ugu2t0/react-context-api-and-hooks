import React from 'react'

import { useCounterContext } from '/react-context-api-and-hooks/src/contexts/CounterContext/CounterContextProvider.js'

const App = () => {
  const [ state, dispatch ] = useCounterContext()
  
  return (
    <div>
      Heloooooo
    </div>
  )
}

export default App