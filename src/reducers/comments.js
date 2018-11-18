import { handleActions } from 'redux-actions'
import { getComments, addComment } from '../actions/comments'

const initialState = {
  data: []
}

export default handleActions(
  {
    [getComments]: (state, action) => ({
      ...state,
      data: action.payload
    }),
    [addComment]: (state, action) => ({
      ...state,
      data: [...state.data, action.payload]
    })
  },
  initialState
)
