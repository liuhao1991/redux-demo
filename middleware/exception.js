export default next => action => {
  try {
    console.log('exception')
    next(action)
  } catch (error) {
    console.error(error.message)
  }
}