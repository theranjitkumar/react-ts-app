import {createStore, combineReducers } from 'redux';
import { postReducer } from './posts/reducers'

function counter(state = 0, action:any) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const rootReducer = combineReducers({
  post: postReducer,
  counter: counter
})

const store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })


export default  store; 