import { createAction } from 'redux-actions'
import response from '../response.json'

export const getReactions = createAction('GET_REACTIONS')
export const addReaction = createAction('ADD_REACTION')

export const loadReactions = () => dispatch => {
  dispatch(getReactions(response.data.reactions))
}
