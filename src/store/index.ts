import {createStore, combineReducers, Store } from 'redux';
import { postReducer } from './posts/reducers'

const rootReducer = combineReducers({
  post: postReducer
})

const store = createStore(rootReducer)

store.getState();

export default  store; 