import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { func } from 'prop-types'
import { addCommentWithData } from '../../actions/comments'
import { colors } from '../../styles/common-style'

class AddComment extends PureComponent {
  state = {
    text: ''
  }

  handleChange = e => this.setState({ text: e.target.value })

  handleSubmit = e => {
    const { text } = this.state
    e.preventDefault()
    this.props.handleAddComment(text)
    this.setState({ text: '' })
  }

  render() {
    return (
      <Wrapper onSubmit={this.handleSubmit}>
        <CustomInput
          name="add-comment"
          placeholder="Add a comment"
          value={this.state.text}
          onChange={this.handleChange}
        />
      </Wrapper>
    )
  }
}

AddComment.propTypes = {
  handleAddComment: func
}

const Wrapper = styled.form`
  color: ${colors.lightBlue};
  padding: 20px;
`

const CustomInput = styled.input`
  width: 100%;
  font-size: 18px;
  color: ${colors.lightBlue};
  line-height: 22px;
  border: 0;
  border-bottom: 2px solid ${colors.lightGray};
  outline: none;
`
const mapDispatchToProps = dispatch => {
  return {
    handleAddComment: text => dispatch(addCommentWithData(text))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddComment)
