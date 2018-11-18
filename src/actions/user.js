import { createAction } from 'redux-actions'
import response from '../response.json'

export const getUser = createAction('GET_USER')

export const loadUserData = () => dispatch => {
  dispatch(getUser(response.data.user))
}
