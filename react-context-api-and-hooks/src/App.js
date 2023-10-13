import React from 'react'
import { useEffect } from 'react'

import { useCounterContext } from '/react-context-api-and-hooks/src/contexts/CounterContext/CounterContextProvider.js'
import { Button } from '/react-context-api-and-hooks/src/components/button.js'
import { Header } from '/react-context-api-and-hooks/src/components/header.js'

const App = () => {
  const [ state, actions ] = useCounterContext()
  
  useEffect(() => {
    actions.increase()
  }, [actions])
  
  return (
    <div onClick={ () => actions.increase() }>
      <Header>Hellooooooo</Header>
      <div>{ state.counter }</div>
      <div>
        <Button onButoonClick={ () => actions.increase() }>Increase</Button>
      </div>
    </div>
  )
}

export default App