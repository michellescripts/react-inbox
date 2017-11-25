import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Message from './Message'

class MessageList extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)).isRequired
  }
  render () {
    return (
      <div>
        {this.props.messages.map((message, i) => {
          return <Message key={i} {...message} />
        })}
      </div>
    )
  }
}

export default MessageList
