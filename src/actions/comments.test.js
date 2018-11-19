import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addCommentWithData } from './comments'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Actions: Comments', () => [
  test('Should dispatch comment with data', async () => {
    const store = mockStore()
    const payload = 'I am payload'

    const comment = {
      text: payload,
      id: Date.now(),
      name: 'User name',
      published: Date.now(),
      avatar: 'http://i.pravatar.cc/100'
    }

    await store.dispatch(addCommentWithData(payload))
    expect(store.getActions()[0]).toEqual({
      type: 'ADD_COMMENT',
      payload: comment
    })
  })
])
