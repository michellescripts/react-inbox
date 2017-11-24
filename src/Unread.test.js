import React from 'react'
import { shallow } from 'enzyme'
import Unread from './Unread'

it('renders the correct number of unread messages', () => {
  const wrapper = shallow(<Unread count={3} />)
  expect(wrapper.contains(3)).toEqual(true)
})
