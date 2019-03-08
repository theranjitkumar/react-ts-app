import { Ipost, ADD_POST, DELETE_POST } from './types'

// TypeScript infers that this function is returning SendMessageAction
export function addPost(newPost: Ipost) {
  return {
    type: ADD_POST,
    payload: newPost
  }
}

// TypeScript infers that this function is returning DeleteMessageAction
export function deletePost(timestamp: number) {
  return {
    type: DELETE_POST,
    meta: {
      timestamp
    }
  }
}