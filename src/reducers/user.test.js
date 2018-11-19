import userReducer from './user'
import { getUser } from '../actions/user'
import response from '../response.json'

describe('ReactionsReducer', () => {
  const user = response.data.user

  test('it should properly load user data', () => {
    const state = {}

    const beforeState = {
      state
    }

    const afterState = {
      state,
      data: user
    }

    expect(userReducer(beforeState, getUser(user))).toEqual(afterState)
  })
})
