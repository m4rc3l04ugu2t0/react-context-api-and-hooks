import * as actionsTypes from '/react-context-api-and-hooks/src/contexts/CounterContext/actionTypes.js'

export const buildActions = (dispatch) => {
  
  return {
    increase: () => dispatch({ type: actionsTypes.INCREASE })
  }
}