import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { object } from 'prop-types'
import { loadUserData } from '../../actions/user'

class User extends PureComponent {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    const { data } = this.props
    return <div>{data.name}</div>
  }
}

User.propTypes = {
  data: object
}

const mapStateToProps = (state, props) => {
  return {
    data: state.user.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(loadUserData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
