import React from 'react'
import styled from 'styled-components'
import User from '../User'
import Reactions from '../Reactions'
import Button from '../Button'

function Header({ user }) {
  return (
    <Wrapper>
      <User />
      <Reactions />
      <Button>follow</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 235px;
  flex: 0 0 235px;
`

export default Header
