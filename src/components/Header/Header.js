import React from 'react'
import { array, object } from 'prop-types'
import styled from 'styled-components'
import User from '../User'
import Reactions from '../Reactions'
import Button from '../Button'

function Header({ person, reactions }) {
  return (
    <Wrapper>
      <User person={person} />
      <Reactions data={reactions} />
      <Button>follow</Button>
    </Wrapper>
  )
}

Header.propTypes = {
  reactions: array,
  person: object
}

const Wrapper = styled.div`
  height: 235px;
  flex: 0 0 235px;
`

export default Header
