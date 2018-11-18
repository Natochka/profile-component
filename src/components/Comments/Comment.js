import React from 'react'
import { object } from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../styles/common-style'
import RelativeDate from '../RelativeDate'

function Comment({ item }) {
  return (
    <Wrapper>
      <CommentAvatar>
        <img alt={item.name} src={item.avatar} width="100%" height="100%" />
      </CommentAvatar>
      <CommentWrapper>
        <CommentHeader>
          <CommentName>{item.name}</CommentName>
          <RelativeDate date={item.published} />
        </CommentHeader>
        <CommentText>{item.text}</CommentText>
      </CommentWrapper>
    </Wrapper>
  )
}

Comment.propTypes = {
  item: object.isRequired
}

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid ${colors.lightGray};
  &:first-of-type {
    padding-top: 5px;
  }
`
const CommentAvatar = styled.div`
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  margin-right: 11px;
  border-radius: 50%;
  overflow: hidden;
`
const CommentWrapper = styled.div`
  flex: 1;
`
const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
const CommentName = styled.div`
  color: ${colors.navy};
  font-weight: 900;
`
const CommentText = styled.div`
  line-height: 21px;
  color: ${colors.gray};
`

export default Comment
