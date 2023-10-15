import * as actionsTypes from '/react-context-api-and-hooks/src/contexts/CounterContext/actionTypes.js'

const asyncIncreaseFn = async (dispatch) => {
  dispatch({ type: actionsTypes.ASYNC_INCREASE_START })
  
  
  return await new Promise(response => {
    setTimeout(() => {
      dispatch({ type: actionsTypes.ASYNC_INCREASE_END })
      response('RESOLVED!')
    }, 3000)
  })
}

const asyncErrorFn = async (dispatch) => {
  dispatch({ type: actionsTypes.ASYNC_INCREASE_START })

  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch({ type: actionsTypes.ASYNC_INCREASE_ERROR })
      reject(new Error('Reject!'))
    }, 3000)
  })
}

export const buildActions = (dispatch) => {
  
  return {
    increase: () => dispatch({ type: actionsTypes.INCREASE }),
    decrease: () => dispatch({ type: actionsTypes.DECREASE }),
    reset: () => dispatch({ type: actionsTypes.RESET }),
    setCounter: payload => dispatch({ type: actionsTypes.SET_COUNTER, payload }),
    asyncIncrease: () => asyncIncreaseFn(dispatch),
    asyncError: () => asyncErrorFn(dispatch)
  }
}

