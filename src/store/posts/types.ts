export interface Ipost{
  title: string
  body: string
}

export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'

interface AddPostAction {
  type: typeof ADD_POST
  payload: Ipost
}

interface DeletePostAction {
  type: typeof DELETE_POST
  payload: Ipost
}

export interface PostState {
  title: string
  body: string
}

export type PostActionType = AddPostAction | DeletePostAction