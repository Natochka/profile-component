import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { loadReactions } from './reactions'
import response from '../response.json'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Actions: Reactions', () => [
  test('Should dispatch getReactions', async () => {
    const store = mockStore()

    await store.dispatch(loadReactions())
    expect(store.getActions()[0]).toEqual({
      type: 'GET_REACTIONS',
      payload: response.data.reactions
    })
  })
])
