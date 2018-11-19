import React from 'react'
import { render } from 'react-testing-library'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import CustomInput from './CustomInput'

describe('CustomInput component test', () => {
  test('input should be rendered correctly', () => {
    const { container } = render(<CustomInput />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
