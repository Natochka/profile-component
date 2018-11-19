import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { loadUserData } from './user'
import response from '../response.json'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Actions: Reactions', () => [
  test('Should dispatch getUser', async () => {
    const store = mockStore()

    await store.dispatch(loadUserData())
    expect(store.getActions()[0]).toEqual({
      type: 'GET_USER',
      payload: response.data.user
    })
  })
])
