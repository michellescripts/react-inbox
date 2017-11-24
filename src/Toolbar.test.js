import React from 'react'
import { shallow } from 'enzyme'
import Toolbar from './Toolbar'

it('renders four buttons', () => {
  const wrapper = shallow(<Toolbar />).find('.btn')
  expect(wrapper.length).toEqual(4)
})
