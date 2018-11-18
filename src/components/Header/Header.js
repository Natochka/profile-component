import React from 'react'
import styled from 'styled-components'
import User from '../User'
import Reactions from '../Reactions'
import Button from '../Button'
import { media, boxShadow, colors } from '../../styles/common-style'

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
  ${boxShadow} height: 235px;
  flex: 0 0 235px;
  padding: 40px 20px 20px;
  box-sizing: border-box;
  background-color: #fff;
  margin-bottom: 10px;
  text-align: center;
  position: relative;
  ${media.min320`
    padding: 20px 19px;
  `};
`

export default Header
