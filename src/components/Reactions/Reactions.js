import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { object } from 'prop-types'
import styled from 'styled-components'
import Reaction from './Reaction'
import { loadReactions } from '../../actions/reactions'

class Reactions extends PureComponent {
  componentDidMount() {
    this.props.fetchReactions()
  }

  render() {
    const { data, ...rest } = this.props
    return (
      <Wrapper {...rest}>
        {Object.entries(data).map(([key, value]) => (
          <Reaction key={value.id} item={value} />
        ))}
      </Wrapper>
    )
  }
}

Reactions.propTypes = {
  data: object.isRequired
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const mapStateToProps = (state, props) => {
  return {
    data: state.reactions.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchReactions: () => dispatch(loadReactions())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reactions)
