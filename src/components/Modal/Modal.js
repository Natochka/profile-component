import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount() {
    document.body.appendChild(this.el)
  }

  componentWillUnmount() {
    document.body.removeChild(this.el)
  }

  render() {
    const { children } = this.props
    return ReactDOM.createPortal(<Wrapper>{children}</Wrapper>, this.el)
  }
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`
export default Modal
