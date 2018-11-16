import React from 'react'
import { object } from 'prop-types'

function Comment({ item }) {
  return (
    <div>
      <div>{item.name}</div>
      <div>{item.text}</div>
    </div>
  )
}

Comment.propTypes = {
  item: object.isRequired
}

export default Comment
