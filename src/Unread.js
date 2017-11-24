import React from 'react'
import PropTypes from 'prop-types'

const Unread = (props) => {
  return <div>
    <p className='pull-right'>
      <span className='badge badge'>{props.count}</span>
      unread messages
    </p>
  </div>
}

Unread.propTypes = {
  count: PropTypes.number.isRequired
}

export default Unread
