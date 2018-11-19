import React from 'react'
import { object } from 'prop-types'
import styled from 'styled-components'
import { media, colors } from '../../styles/common-style'

function Reaction({ item }) {
  return (
    <Wrapper>
      <ReactionCount>{item.count}</ReactionCount>
      <ReactionName>{item.name}</ReactionName>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-right: solid 1px ${colors.lightGray};
  width: 33.333%;
  &:last-of-type {
    border: none;
  }
  ${media.min500`
    padding: 0 28px;
  `};
  &:first-of-type {
    ${media.min500`
      padding-left: 0;
  `};
  }
`
const ReactionCount = styled.div`
  font-size: 24px;
  line-height: 29px;
  color: ${colors.orange};
`
const ReactionName = styled.div`
  font-size: 10px;
  color: ${colors.lightBlue};
`

Reaction.propTypes = {
  item: object
}

export default Reaction
