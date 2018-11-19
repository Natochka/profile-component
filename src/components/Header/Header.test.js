import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'
import { render, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import Header from './Header'
import response from '../../response.json'

const user = response.data.user
const reactions = response.data.reactions

describe('Header component test', () => {
  test('user name and location should be shown', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    expect(getByText(user.name)).toBeTruthy()
    expect(getByText(user.location)).toBeTruthy()
  })

  test('reactions should be shown', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    )

    const reactionsNamesValues = Object.values(reactions)
    reactionsNamesValues.forEach((item, i) => {
      expect(getByText(item.name)).toBeTruthy()
      expect(getByText(item.count.toString())).toBeTruthy()
    })
  })

  test('"followers" reactions should be incremented', () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    )

    const followersCount = reactions['followers'].count
    expect(getByText(followersCount.toString())).toBeTruthy()

    const followButton = getByTestId('follow-button')
    fireEvent.click(followButton)

    const newFollowersCount = followersCount + 1
    expect(getByText(newFollowersCount.toString())).toBeTruthy()
  })

  test('modal should be shown', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    )

    const shareButton = getByTestId('share-icon')
    fireEvent.click(shareButton)

    expect(getByTestId('copy-url').value).toBe(window.location.href)
  })
})
