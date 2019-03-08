import { combineReducers } from 'redux';
import { postReducer } from './posts/reducers'

const rootReducer = combineReducers({
  post: postReducer
})

export type AppState = ReturnType<typeof rootReducer>