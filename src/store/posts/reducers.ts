import {
    PostState,
    PostActionType,
    ADD_POST
  } from './types'
  
  const initialState: PostState = {
    title: '',
    body: ''
  }
  
  export function postReducer( state = initialState, action: PostActionType ): PostState {
    switch (action.type) {
      case ADD_POST: {
        return {
          ...state,
          ...action.payload
        }
      }
      default:
        return state
    }
  }