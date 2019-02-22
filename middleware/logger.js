export default next => action => {
  console.log('previousState')
  console.log('action', action)
  next(action)
  console.log('nextState')
}