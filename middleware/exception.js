export default ({getState}) => next => action => {
  try {
    next(action)
  } catch (error) {
    console.error(error.message)
  }
}