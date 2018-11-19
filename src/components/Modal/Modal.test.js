import React from 'react'
import { render } from 'react-testing-library'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import Modal from './Modal'

describe('Modal component test', () => {
  test('modal should show children', () => {
    const { getByText } = render(
      <Modal>
        <div>Test</div>
      </Modal>
    )
    expect(getByText('Test')).toBeTruthy()
  })
})
