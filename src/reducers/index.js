import { combineReducers } from 'redux'
import user from './user'
import comments from './comments'
import reactions from './reactions'

export default combineReducers({
  user,
  comments,
  reactions
})
