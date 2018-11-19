import React, { PureComponent } from 'react'
import { func } from 'prop-types'
import styled from 'styled-components'
import Button from '../Button'
import CustomInput from '../CustomInput'
import CopyIcon from '../Icons/CopyIcon'
import { boxShadow, colors } from '../../styles/common-style'

class CopyLink extends PureComponent {
  copyRef = React.createRef()

  handleClick = event => {
    this.copyRef.current.select()
    document.execCommand('copy', false, window.location.href)
  }

  render() {
    const { onClose } = this.props
    return (
      <Wrapper>
        <CloseButton onClick={onClose}>X</CloseButton>
        <StyledCustomInput
          readOnly
          type="text"
          ref={this.copyRef}
          name="copy-link"
          value={window.location.href}
        />
        <StyledButton onClick={this.handleClick}>
          <StyledCopyIcon />
        </StyledButton>
      </Wrapper>
    )
  }
}

CopyLink.propTypes = {
  onClose: func
}

const Wrapper = styled.div`
  ${boxShadow};
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  padding: 35px 25px;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 20%;
  margin: auto;
  display: flex;
`

const StyledCustomInput = styled(CustomInput)`
  flex: 1;
  margin-right: 20px;
`
const CloseButton = styled.button`
  width: 26px;
  height: 26px;
  border: 0;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  margin: 8px;
  cursor: pointer;
  font-size: 18px;
  color: ${colors.orange};
`
const StyledButton = styled(Button)`
  padding: 10px 14px;
`
const StyledCopyIcon = styled(CopyIcon)`
  width: 20px;
  height: auto;
  fill: #fff;
`

export default CopyLink
