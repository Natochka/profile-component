import React, { Component } from 'react'
import { connect } from 'react-redux'
import { array } from 'prop-types'
import styled from 'styled-components'
import Transition from 'react-transition-group/Transition'
import Comment from './Comment'
import AddComment from './AddComment'
import { loadComments } from '../../actions/comments'
import { media, boxShadow, colors } from '../../styles/common-style'

class Comments extends Component {
  state = {
    showComments: true
  }

  componentDidMount() {
    this.props.fetchComments()
  }

  toggleComments = () => {
    this.setState(({ showComments }) => ({ showComments: !showComments }))
  }

  transitions = {
    entered: { maxHeight: '100vh' },
    exited: { maxHeight: 0 }
  }

  render() {
    const { data } = this.props
    const { showComments } = this.state
    return (
      <Wrapper>
        <ButtonLink onClick={this.toggleComments}>
          {showComments ? 'Hide' : 'Show'} comments ({data.length})
        </ButtonLink>
        <Transition in={showComments} timeout={150}>
          {state => (
            <CommentsWrapper style={{ ...this.transitions[state] }}>
              {data.map(item => (
                <Comment key={item.id} item={item} />
              ))}
              <AddComment />
            </CommentsWrapper>
          )}
        </Transition>
      </Wrapper>
    )
  }
}

Comments.propTypes = {
  data: array.isRequired
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
  ${media.min500`
    text-align: left;
  `};
`
const CommentsWrapper = styled.div`
  overflow-y: scroll;
  flex: 1;
  height: auto;
  max-height: 100vh;
  transition: max-height 150ms ease-in-out;
`
const sortByDate = data => data.sort((a, b) => b.published - a.published)

const mapStateToProps = (state, props) => {
  return {
    data: sortByDate(state.comments.data)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: () => dispatch(loadComments())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments)
