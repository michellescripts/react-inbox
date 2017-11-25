import React, { Component } from 'react'
import Toolbar from './Toolbar'
import Unread from './Unread'
import MessageList from './MessageList'
import messages from './testdata'
import ComposeForm from './ComposeForm'

class App extends Component {
  render () {
    return (
      <div>
        <div className='row toolbar'>
          <div className='col-md-12'>
            <Unread count={3} />
            <Toolbar />
            <ComposeForm />
          </div>
        </div>
        <MessageList messages={messages} />
      </div>
    )
  }
}

export default App
