import styled from 'styled-components'
import { colors } from '../../styles/common-style'

const CustomInput = styled.input`
  font-size: 18px;
  color: ${colors.lightBlue};
  line-height: 22px;
  border: 0;
  border-bottom: 2px solid ${colors.lightGray};
  outline: none;
`

export default CustomInput
