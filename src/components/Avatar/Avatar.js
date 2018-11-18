import React from 'react'
import styled from 'styled-components'

function Avatar({ size, item, ...rest }) {
  return (
    <Wrapper size={size} {...rest}>
      <img alt={item.name} src={item.avatar} width="100%" height="100%" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  flex: 0 0 ${props => props.size}px;
  border-radius: 50%;
  overflow: hidden;
`

export default Avatar
