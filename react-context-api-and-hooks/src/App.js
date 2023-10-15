import React from 'react'
import { useEffect } from 'react'

import { useCounterContext } from '/react-context-api-and-hooks/src/contexts/CounterContext/CounterContextProvider.js'
import { Button } from '/react-context-api-and-hooks/src/components/button.js'
import { Header } from '/react-context-api-and-hooks/src/components/header.js'

const App = () => {
  const [ state, actions ] = useCounterContext()
  
  const handleError = () => {
    actions.asyncError()
    .then(response => console.log(response))
    .catch(error => console.log(error.message))
  }
  
  return (
    <div>
      <Header>Hellooooooo</Header>
      <div>{ state.counter }</div>
      <div>
        <Button onButoonClick={ () => actions.increase() }>Increase</Button>
        <Button onButoonClick={ () => actions.decrease() }>Decrease</Button>
        <Button onButoonClick={ () => actions.reset() }>Reset</Button>
        <Button onButoonClick={ () => actions.setCounter({ counter: state.counter + 10 }) }>SetCounter + 10</Button>
        <Button onButoonClick={ () => actions.setCounter({ counter: state.counter - 10 }) }>ResetCounter - 10</Button>
        <Button 
          disabled={ state.loading }
          onButoonClick={ actions.asyncIncrease }>
          Async Increase
        </Button>
        <Button 
          disabled={ state.loading }
          onButoonClick={ handleError }>
          Async Error
        </Button>
      </div>
    </div>
  )
}

export default App