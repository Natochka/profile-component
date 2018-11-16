import React from 'react'
import { array } from 'prop-types'
import Comment from './Comment'
import AddComment from './AddComment'

function Comments({ items }) {
  return (
    <div>
      <div>Hide comments</div>
      {items.map(item => (
        <Comment key={item.id} item={item} />
      ))}
      <AddComment />
    </div>
  )
}

Comments.propTypes = {
  items: array.isRequired
}

export default Comments
