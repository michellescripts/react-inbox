import React from 'react'
import { shallow } from 'enzyme'
import MessageList from './MessageList'
import Message from './Message'
import messages from './testdata'

it('renders each message', () => {
  const wrapper = shallow(<MessageList messages={messages} />).find(Message)
  expect(wrapper.length).toEqual(messages.length)
})

describe('Starred messages', () => {
  it('calls the handler with the correct message number when clicked', () => {
    const handler = jest.fn()
    const wrapper = shallow(<MessageList messages={messages} onMessageStarred={handler} />)
    const messageWrapper = wrapper.childAt(2)
    messageWrapper.props().onStarred()
    expect(handler).toBeCalledWith(2)
  })
})
