import React, { PureComponent } from 'react'
import { func } from 'prop-types'
import styled from 'styled-components'
import CustomInput from '../CustomInput'
import { boxShadow, colors } from '../../styles/common-style'

class CopyLink extends PureComponent {
  copyRef = React.createRef()

  componentDidMount() {
    const ref = this.copyRef && this.copyRef.current

    if (ref) {
      requestAnimationFrame(() => ref.select())
    }
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
`

const StyledCustomInput = styled(CustomInput)`
  width: 100%;
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

export default CopyLink
