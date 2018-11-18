import { handleActions } from 'redux-actions'
import { getReactions, modifyReaction } from '../actions/reactions'

const initialState = {
  data: {}
}

export default handleActions(
  {
    [getReactions]: (state, action) => ({
      ...state,
      data: action.payload
    }),
    [modifyReaction]: (state, action) => ({
      ...state,
      data: {
        ...state.data,
        [action.payload]: {
          ...state.data[action.payload],
          count: state.data[action.payload].count + 1,
          modified: true
        }
      }
    })
  },
  initialState
)
