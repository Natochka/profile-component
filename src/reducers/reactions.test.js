import reactionsReducer from './reactions'
import { getReactions, modifyReaction } from '../actions/reactions'
import response from '../response.json'

describe('ReactionsReducer', () => {
  const reactions = response.data.reactions

  test('it should properly load reactions', () => {
    const state = {}

    const beforeState = {
      state
    }

    const afterState = {
      state,
      data: reactions
    }

    expect(reactionsReducer(beforeState, getReactions(reactions))).toEqual(afterState)
  })

  test('it should modify reactions', () => {
    const state = {
      data: { ...reactions }
    }

    const name = 'likes'

    const item = {
      id: '1',
      name: 'Likes',
      count: 121
    }

    const expected = {
      data: {
        ...reactions,
        [name]: { ...item, count: 122, modified: true }
      }
    }

    expect(reactionsReducer(state, modifyReaction(name))).toEqual(expected)
  })
})
