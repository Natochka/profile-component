import styled from 'styled-components'

const Button = styled.button`
  border: none;
  border-radius: 25px;
  color: #fff;
  text-transform: uppercase;
  background-color: #ffa640;
  font-size: 14px;
  line-height: 18px;
  padding: 14px 20px;
  letter-spacing: 4px;
  outline: none;
  cursor: pointer;
  transition: background-color 150ms ease-in-out;

  &:hover {
    background-color: #e59539;
  }

  &:hover:active {
    background-color: #ce8633;
  }
`
export default Button
