import React from 'react'
import { shallow } from 'enzyme'
import ComposeForm from './ComposeForm'

it('renders four buttons', () => {
  const wrapper = shallow(<ComposeForm />).find('form')
  expect(wrapper.length).toEqual(1)
})
