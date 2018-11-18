import React, { Component } from 'react'
import { array } from 'prop-types'
import styled from 'styled-components'
import Comment from './Comment'
import AddComment from './AddComment'
import { media, boxShadow, colors } from '../../styles/common-style'

class Comments extends Component {
  state = {
    showComments: true
  }

  toggleComments = () => {
    this.setState(({ showComments }) => ({ showComments: !showComments }))
  }

  render() {
    const { items } = this.props
    const { showComments } = this.state
    return (
      <Wrapper>
        <ButtonLink onClick={this.toggleComments}>
          {showComments ? 'Hide' : 'Show'} comments ({items.length})
        </ButtonLink>
        {showComments ? (
          <CommentsWrapper>
            {items.map(item => (
              <Comment key={item.id} item={item} />
            ))}
            <AddComment />
          </CommentsWrapper>
        ) : null}
      </Wrapper>
    )
  }
}

Comments.propTypes = {
  items: array.isRequired
}

const Wrapper = styled.div`
  ${boxShadow};
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`
const ButtonLink = styled.button`
  color: ${colors.orange};
  flex: 0 0;
  padding: 25px 20px;
  border: 0;
  font-size: inherit;
  text-decoration: underline;
  cursor: pointer;
  outline: none;
  ${media.min320`
    text-align: left;
  `};
`
const CommentsWrapper = styled.div`
  overflow-y: scroll;
  flex: 1;
`

export default Comments
