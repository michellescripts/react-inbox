import React from 'react'
import { shallow } from 'enzyme'
import MessageList from './MessageList'
import Message from './Message'
import messages from './testdata'

it('renders each message', () => {
  const wrapper = shallow(<MessageList messages={messages} />).find(Message)
  expect(wrapper.length).toEqual(messages.length)
})
