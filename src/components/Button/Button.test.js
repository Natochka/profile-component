import React from 'react'
import { render } from 'react-testing-library'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import Button from './Button'

describe('Button component test', () => {
  test('button should be rendered correctly', () => {
    const { container } = render(<Button />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
