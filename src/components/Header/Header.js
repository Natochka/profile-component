import React from 'react'
import User from '../User'
import Reactions from '../Reactions'
import Button from '../Button'

function Header() {
  return (
    <div>
      <User />
      <Reactions />
      <Button>follow</Button>
    </div>
  )
}

export default Header
