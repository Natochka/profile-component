import React from 'react'
import { object } from 'prop-types'

function Reaction({ item }) {
  return (
    <div>
      <div>{item.count}</div>
      <div>{item.name}</div>
    </div>
  )
}

Reaction.propTypes = {
  item: object
}

export default Reaction
