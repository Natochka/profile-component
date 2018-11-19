import React from 'react'
import { object, number } from 'prop-types'
import styled from 'styled-components'

function Avatar({ item, size, ...rest }) {
  return <StyledImg imgSize={size} src={item.avatar} alt={item.name} {...rest} />
}
Avatar.propTypes = {
  item: object.isRequired,
  size: number
}
Avatar.defaultProps = {
  size: 70
}

const StyledImg = styled.img`
  width: ${props => props.imgSize}px;
  height: ${props => props.imgSize}px;
  flex: 0 0 ${props => props.imgSize}px;
  border-radius: 50%;
  overflow: hidden;
`

export default Avatar
