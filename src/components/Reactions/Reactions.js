import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { array } from 'prop-types'
import Reaction from './Reaction'
import { loadReactions } from '../../actions/reactions'

class Reactions extends PureComponent {
  componentDidMount() {
    this.props.fetchReactions()
  }

  render() {
    const { data } = this.props
    return (
      <div>
        {data.map(item => (
          <Reaction key={item.id} item={item} />
        ))}
      </div>
    )
  }
}

Reactions.propTypes = {
  data: array
}

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
