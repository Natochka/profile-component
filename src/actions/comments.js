import { createAction } from 'redux-actions'
import response from '../response.json'

export const getComments = createAction('GET_COMMENTS')
export const addComment = createAction('ADD_COMMENT')

export const loadComments = () => dispatch => {
  dispatch(getComments(response.data.comments))
}

export const addCommentWithData = text => dispatch => {
  // We suppose that user is logged in and we have user name and avatar
  const comment = {
    text,
    id: Date.now(),
    name: 'User name',
    published: Date.now(),
    avatar: 'http://i.pravatar.cc/100'
  }
  dispatch(addComment(comment))
}
