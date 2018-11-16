import React from 'react'
import Reaction from './Reaction'
import { array } from 'prop-types'

function Reactions({ data }) {
  return (
    <div>
      {data.map(item => (
        <Reaction key={item.id} item={item} />
      ))}
    </div>
  )
}

Reactions.propTypes = {
  data: array
}

export default Reactions
