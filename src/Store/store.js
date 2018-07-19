import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as counternet from './counter/reducers'
import thunk from 'redux-thunk'
let store = createStore(
  combineReducers({
    ...counternet
  }),
  applyMiddleware(thunk)
)
export default store
