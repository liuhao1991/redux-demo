export default function applyMiddleware (...middlewares) {
  return function rewriteCreateStore(oldCreateStore) {
    return function newCreateStore(reducer, initState) {
      const store = oldCreateStore(reducer, initState)
      let { dispatch, getState } = store
      const chain = middlewares.map(middleware => middleware({getState}))
      chain.reverse().map(middleware => {
        dispatch = middleware(dispatch)
      })
      return {
        ...store,
        dispatch
      }
    }
  }
}