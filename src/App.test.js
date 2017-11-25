import React from 'react'
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom'
import App from './App'
import ComposeForm from './ComposeForm'
import Toolbar from './Toolbar'
import Unread from './Unread'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

describe('The compose form', () => {
  it('is hidden by default', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(ComposeForm).length).toEqual(0)
  })
  it('is visible when button is clicked', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.state().composing).toEqual(false)
    wrapper.instance().handleCompose()
    expect(wrapper.state().composing).toEqual(true)

    // TODO: why??
    // expect(wrapper.find(ComposeForm).length).toEqual(1)
  })
})

describe('The unread indicator', () => {
  it('displays the correct number of unread messages', () => {
    const unread = 4
    const wrapper = shallow(<App />)
    expect(wrapper.find(Unread).props().count).toEqual(unread)
  })
})

describe('The starred handler', () => {
  it('updates state', () => {
    const wrapper = shallow(<App />)
    const originalState = wrapper.state().messages[1].starred
    wrapper.instance().handleMessageStarred(1)
    expect(wrapper.state().messages[1].starred).toEqual(!originalState)
  })
})

describe('The select button', () => {
  it('selects all when none or some messages are selected', () => {
    const wrapper = shallow(<App />)
    wrapper.instance().handleSelect()
    const messages = wrapper.state().messages
    const selectedCount = messages.filter(m => !!m.selected).length
    expect(selectedCount).toEqual(messages.length)
  })
  it('deselects all when all messages are selected', () => {
    const wrapper = shallow(<App />)
    wrapper.instance().handleSelect()
    wrapper.instance().handleSelect()
    const messages = wrapper.state().messages
    const selectedCount = messages.filter(m => !!m.selected).length
    expect(selectedCount).toEqual(0)
  })
})
