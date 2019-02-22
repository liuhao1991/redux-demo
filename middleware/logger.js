export default ({getState}) => next => action => {
  console.log('previousState', getState())
  console.log('action', action)
  next(action)
  console.log('nextState', getState())
}