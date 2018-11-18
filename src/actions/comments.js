import { createAction } from 'redux-actions'
import response from '../response.json'

export const getComments = createAction('GET_COMMENTS')
export const addComment = createAction('ADD_COMMENT')

export const loadComments = () => dispatch => {
  dispatch(getComments(response.data.comments))
}
