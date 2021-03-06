import React, { Component } from 'react'
import Toolbar from './Toolbar'
import Unread from './Unread'
import MessageList from './MessageList'
import messages from './testdata'
import ComposeForm from './ComposeForm'

class App extends Component {
  constructor () {
    super()
    this.state = {
      composing: false,
      messages: messages
    }
  }

  renderComposeIfComposing () {
    if (this.state.composing) {
      return <ComposeForm />
    }
    return undefined
  }

  handleCompose = () => {
    this.setState({composing: !this.state.composing})
  }

  handleSelect = () => {
     const selected= this.state.messages.filter((message) => !!message.selected).length
     const newValue= selected !== this.state.messages.length
     this.setState({messages: this.state.messages.map((message) => ({... message, selected: newValue}))})
  }

  handleMarkRead = (read) => {
    const newMessages = this.state.messages.map((message) => {
      if (!message.selected){
        return message
      }
      return {...message, read}
    })
    this.setState({messages: newMessages})
  }

  getCount = () => {
    return this.state.messages.filter((message) => !message.read).length
  }

  handleMessageStarred = (i) => {
    const newMessages = [
      ...this.state.messages.slice(0, i),
      { ...this.state.messages[i], starred: !this.state.messages[i].starred },
      ...this.state.messages.slice(i + 1)
    ]
    this.setState({messages: newMessages})
  }

  handleMessageSelected = (i) => {
    const newMessages = [
      ...this.state.messages.slice(0, i),
      { ...this.state.messages[i], selected: !(!!this.state.messages[i].selected) },
      ...this.state.messages.slice(i + 1)
    ]
    this.setState({messages: newMessages})
  }

  handleLabel = (label, mode) => {
    const newMessages = this.state.messages.map((message) => {
      if (!message.selected){
        return message
      }
      if (mode === 'add') {
        if (message.labels.includes(label)) {
          return message
        }
        return {...message, labels: message.labels.concat(label)}
      } else {
        return {...message, labels: message.labels.filter(l => l !== label)}
      }
    })
    this.setState({messages: newMessages})
  }

  handleDelete = () => {
    const newMessages= this.state.messages.filter((message) => !message.selected)
    this.setState({messages: newMessages})
  }

  getSelectState () {
    const selected= this.state.messages.filter((message) => !!message.selected).length
    switch(selected) {
      case 0:
        return 'none'
      case this.state.messages.length:
        return 'all'
      default:
        return 'some'
    }
  }

  render () {
    return (
      <div>
        <div className='row toolbar'>
          <div className='col-md-12'>
            <Unread count={this.getCount()} />
            <Toolbar
              composing={this.state.composing}
              onComposeClicked={this.handleCompose}
              select={this.getSelectState()}
              onSelectClicked={this.handleSelect}
              onMarkReadClicked={() => this.handleMarkRead(true)}
              onMarkUnreadClicked={() => this.handleMarkRead(false)}
              onApplyLabel={this.handleLabel}
              onDelete={this.handleDelete}
            />
            {this.renderComposeIfComposing()}
          </div>
        </div>
        <MessageList
          messages={this.state.messages}
          onMessageStarred={this.handleMessageStarred}
          onMessageSelected={this.handleMessageSelected}
        />
      </div>
    )
  }
}

export default App
