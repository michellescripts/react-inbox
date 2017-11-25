import React from 'react'
import { shallow } from 'enzyme'
import Toolbar from './Toolbar'

it('renders five buttons', () => {
  const wrapper = shallow(<Toolbar />).find('.btn')
  expect(wrapper.length).toEqual(5)
})
