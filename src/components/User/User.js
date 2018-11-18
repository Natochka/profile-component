import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { object, func } from 'prop-types'
import { loadUserData } from '../../actions/user'
import { media, colors } from '../../styles/common-style'
import { modifyReaction } from '../../actions/reactions'
import LikeIcon from '../Icons/LikeIcon'
import Avatar from '../Avatar'

const AVATAR_SIZE = 70

class User extends PureComponent {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    const { data, handleLike } = this.props
    return (
      <Wrapper>
        <AvatarWrapper item={data} size={AVATAR_SIZE} />
        <div>
          <UserWrapper>
            <UserName>{data.name}</UserName>
            <LikeIconWrapper onClick={() => handleLike('likes')} />
          </UserWrapper>
          <UserLocation>{data.location}</UserLocation>
        </div>
      </Wrapper>
    )
  }
}

User.propTypes = {
  data: object,
  handleLike: func
}

const Wrapper = styled.div`
  ${media.min320`
    display: flex;
    text-align: left;
    align-items: center;
  `};
`
const AvatarWrapper = styled(Avatar)`
  position: absolute;
  top: -15%;
  left: 0;
  right: 0;
  margin: auto;
  ${media.min320`
    position: initial;
    margin: 0;
    margin-right: 18px;
  `};
`
const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const UserName = styled.h1`
  font-size: 18px;
  line-height: 22px;
  color: ${colors.navy};
  margin-right: 10px;
`
const LikeIconWrapper = styled(LikeIcon)`
  width: 12px;
  height: 12px;
  stroke: ${colors.lightGray};
  stroke-width: 1;
  cursor: pointer;
`
const UserLocation = styled.div`
  font-size: 12px;
  line-height: 15px;
  color: ${colors.lightBlue};
`

const mapStateToProps = (state, props) => {
  return {
    data: state.user.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(loadUserData()),
    handleLike: name => dispatch(modifyReaction(name))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
