import React from 'react'
import { array, object } from 'prop-types'
import User from '../User'
import Reactions from '../Reactions'
import Button from '../Button'

function Header({ person, reactions }) {
  return (
    <div>
      <User person={person} />
      <Reactions data={reactions} />
      <Button>follow</Button>
    </div>
  )
}

Header.propTypes = {
  reactions: array,
  person: object
}

export default Header
