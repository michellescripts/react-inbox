import React, { Component } from 'react'
import Toolbar from './Toolbar'
import Unread from './Unread'
import MessageList from './MessageList'
import messages from './testdata'
import ComposeForm from './ComposeForm'

class App extends Component {
  constructor () {
    super()
    this.state = {composing: false}
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

  getCount = () => {
    return messages.filter((message) => !message.read).length
  }

  render () {
    return (
      <div>
        <div className='row toolbar'>
          <div className='col-md-12'>
            <Unread count={this.getCount()} />
            <Toolbar composing={this.state.composing} onComposeClicked={this.handleCompose} />
            {this.renderComposeIfComposing()}
          </div>
        </div>
        <MessageList messages={messages} />
      </div>
    )
  }
}

export default App
