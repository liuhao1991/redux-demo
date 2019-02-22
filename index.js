import { createStore, combineReducer, applyMiddleware } from './src'
import hello from './reducer/hello'
import todos from './reducer/todos'
import exception from './middleware/exception'
import logger from './middleware/logger'

const reducers = combineReducer({
  hello,
  todos
})

const store = createStore(reducers, applyMiddleware(exception, logger))

store.dispatch({
  type: 'HELLO',
  text: 'WORLD'
})