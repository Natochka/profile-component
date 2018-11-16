import React from 'react'
import { object } from 'prop-types'

function User({ person }) {
  return <div>{person.name}</div>
}

User.propTypes = {
  person: object
}

export default User
