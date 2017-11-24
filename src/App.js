import React, { Component } from 'react'
import Toolbar from './Toolbar'
import Unread from './Unread'
import Message from './Message'

class App extends Component {
  render () {
    return (
      <div>
        <div className='row toolbar'>
          <div className='col-md-12'>
            <Unread count={3} />
            <Toolbar />
          </div>
        </div>
        <Message text='Hi' />
      </div>
    )
  }
}

export default App
