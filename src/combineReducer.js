export default function combineReducer(reducers) {
  const keys = Object.keys(reducers)
  return function conbination(state = {}, action) {
    const nextState = {}
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      const reducer = reducers[key]
      const previousStateForKey = state[key]
      const nextStateForKey = reducer(previousStateForKey, action)
      nextState[key] = nextStateForKey
    }
    return nextState
  }
}