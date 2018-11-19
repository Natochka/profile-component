import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import User from '../User'
import Modal from '../Modal'
import Button from '../Button'
import Reactions from '../Reactions'
import ShareIcon from '../Icons/ShareIcon'
import CopyLink from './CopyLink'
import { media, boxShadow, colors } from '../../styles/common-style'
import { modifyReaction } from '../../actions/reactions'

class Header extends PureComponent {
  state = {
    modalVisible: false
  }

  handleShowModal = () => this.setState({ modalVisible: true })
  handleHideModal = () => this.setState({ modalVisible: false })

  render() {
    const { handleFollow } = this.props
    const { modalVisible } = this.state
    return (
      <Wrapper>
        <User />
        <ReactionsWrapper>
          <StyledReactions />
          <ButtonWrapper>
            <StyledButton onClick={() => handleFollow('followers')}>follow</StyledButton>
          </ButtonWrapper>
        </ReactionsWrapper>
        <StyledShareIcon onClick={this.handleShowModal} />
        {modalVisible && (
          <Modal>
            <CopyLink onClose={this.handleHideModal} />
          </Modal>
        )}
      </Wrapper>
    )
  }
}

Header.propTypes = {
  handleFollow: func
}

const Wrapper = styled.div`
  ${boxShadow};
  height: 235px;
  flex: 0 0 235px;
  padding: 40px 0 20px;
  box-sizing: border-box;
  background-color: #fff;
  margin-bottom: 10px;
  text-align: center;
  position: relative;
  ${media.min500`
    padding: 20px 19px;
    height: 183px;
    flex: 0 0 183px;
  `};
`
const ReactionsWrapper = styled.div`
  ${media.min500`
    display: flex;
    align-items: center;
  `};
`
const StyledReactions = styled(Reactions)`
  margin: 25px 0 21px;
  ${media.min500`
    margin-top: 19px;
  `};
`
const ButtonWrapper = styled.div`
  padding: 0 20px;
  ${media.min500`
    padding: 0;
  `};
`
const StyledButton = styled(Button)`
  width: 100%;
  ${media.min500`
    width: 134px;
  `};
`
const StyledShareIcon = styled(ShareIcon)`
  width: 10px;
  height: 10px;
  fill: ${colors.orange};
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px;
`
const mapDispatchToProps = dispatch => {
  return {
    handleFollow: name => dispatch(modifyReaction(name))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Header)
