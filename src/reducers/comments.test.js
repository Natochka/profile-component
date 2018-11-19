import commentsReducer from './comments'
import { getComments, addComment } from '../actions/comments'
import response from '../response.json'

describe('CommentsReducer', () => {
  const comments = response.data.comments

  test('it should properly load comments', () => {
    const state = {}

    const beforeState = {
      state
    }

    const afterState = {
      state,
      data: comments
    }

    expect(commentsReducer(beforeState, getComments(comments))).toEqual(afterState)
  })

  test('it should add new comment', () => {
    const state = {
      data: [...comments]
    }

    const item = {
      text: 'Text',
      id: Date.now(),
      name: 'User name',
      published: Date.now(),
      avatar: 'http://i.pravatar.cc/100'
    }

    const expected = {
      data: [...comments, item]
    }

    expect(commentsReducer(state, addComment(item))).toEqual(expected)
  })
})
