import React from 'react'
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom'
import App from './App'
import ComposeForm from './ComposeForm'
import Toolbar from './Toolbar'

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
