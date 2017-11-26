import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'

const MessageList = (props) => {
  return (
    <div>
      {props.messages.map((message, i) => {
        return <Message
          key={i} {...message}
          onStarred={() => props.onMessageStarred(i)}
          onSelected={() => props.onMessageSelected(i)}
          />
      })}
    </div>
  )
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)).isRequired,
  onMessageStarred: PropTypes.func,
  onMessageSelected: PropTypes.func
}

export default MessageList
