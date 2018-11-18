import { handleAction } from 'redux-actions'
import { getUser } from '../actions/user'

const initialState = {
  data: {}
}

export default handleAction(
  [getUser],
  (state, action) => ({
    ...state,
    data: action.payload
  }),
  initialState
)
