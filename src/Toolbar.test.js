import React from 'react'
import { shallow } from 'enzyme'
import Toolbar from './Toolbar'

it('renders five buttons', () => {
  const wrapper = shallow(<Toolbar />).find('.btn')
  expect(wrapper.length).toEqual(5)
})

describe('The compose button ', () => {
  it('is renders a plus by default', () => {
    const wrapper = shallow(<Toolbar />).find('.btn-danger > i')
    expect(wrapper.hasClass('fa-plus')).toEqual(true)
  })
  it('is renders an x when composing', () => {
    const wrapper = shallow(<Toolbar composing />).find('.btn-danger > i')
    expect(wrapper.hasClass('fa-times')).toEqual(true)
  })
  it('calls the handler when clicked', () => {
    let clicked = false
    const handler = () => {
      clicked = true
    }
    const wrapper = shallow(<Toolbar onComposeClicked={handler} />).find('.btn-danger')
    wrapper.simulate('click')
    expect(clicked).toEqual(true)
  })
})
