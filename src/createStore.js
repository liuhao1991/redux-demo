export default function(reducer, initState, applyMiddleware) {
  let listeners = []
  let state = initState || {}

  function subscribe(listener) {
    listeners.push(listener)
  }

  function dispatch(action) {
    state = reducer(state, action)
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }
  }
  dispatch({type: Symbol()})

  function getState() {
    return state
  }

  return {
    subscribe,
    dispatch,
    getState
  }
}