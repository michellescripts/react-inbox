import React from 'react'
import { shallow } from 'enzyme'
import ComposeForm from './ComposeForm'

it('renders a form', () => {
  const wrapper = shallow(<ComposeForm />).find('form')
  expect(wrapper.length).toEqual(1)
})
