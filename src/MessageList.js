import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Message from './Message'

class MessageList extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)).isRequired,
    onMessageStarred: PropTypes.func
  }
  render () {
    return (
      <div>
        {this.props.messages.map((message, i) => {
          return <Message
            key={i} {...message}
            onStarred={() => this.props.onMessageStarred(i)}
          />
        })}
      </div>
    )
  }
}

export default MessageList
