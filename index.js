import { createStore, combineReducer } from './src'
import hello from './reducer/hello'
import todos from './reducer/todos'
import exception from './middleware/exception'
import logger from './middleware/logger'


const dispatch = action => {
  console.log(action)
}

exception(logger(dispatch))({type: 'dispatchMiddleware'})

// console.log(exception(logger(dispatch)).toString())

const reducers = combineReducer({
  hello,
  todos
})

// const store = createStore(reducers)
// store.subscribe(() => {
//   console.log(store.getState())
// })
// store.dispatch({
//   type: 'HELLO',
//   text: 'WORLD'
// })