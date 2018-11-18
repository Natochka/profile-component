import { handleActions } from 'redux-actions'
import { getReactions, addReaction } from '../actions/reactions'

const initialState = {
  data: []
}

export default handleActions(
  {
    [getReactions]: (state, action) => ({
      ...state,
      data: action.payload
    }),
    [addReaction]: (state, action) => ({
      ...state,
      data: [...state.data, action.payload]
    })
  },
  initialState
)
