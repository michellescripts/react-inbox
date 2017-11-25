import React from 'react'
import { shallow } from 'enzyme'
import Message from './Message'

it('renders message text', () => {
  const text = 'hi this is a particular message text'
  const wrapper = shallow(<Message text={text} />)
  expect(wrapper.contains(text)).toEqual(true)
})

it('applies the unread class when the read prop is not true', () => {
  const wrapper = shallow(<Message text='abc' read={false} />).find('.row .message')
  expect(wrapper.hasClass('unread')).toEqual(true)
})

it('applies the read class when the read prop is true', () => {
  const wrapper = shallow(<Message text='abc' read />).find('.row .message')
  expect(wrapper.hasClass('read')).toEqual(true)
})

describe('When the message is selected', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Message text='abc' selected />)
  })
  it('applies the selected class', () => {
    expect(wrapper.find('.row .message').hasClass('selected')).toEqual(true)
  })
  it('checks the checkbox', () => {
    expect(wrapper.find('input[type="checkbox"]').prop('checked')).toEqual('checked')
  })
})

describe('When the message is not selected', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Message text='abc' selected={false} />)
  })
  it('does not apply the selected class', () => {
    expect(wrapper.find('.row .message').hasClass('selected')).toEqual(false)
  })
  it('does not check the checkbox', () => {
    expect(wrapper.find('input[type="checkbox"]').prop('checked')).toEqual(undefined)
  })
})

it('fills in the star when starred', () => {
  const wrapper = shallow(<Message text='abc' starred />)
  expect(wrapper.find('.star').hasClass('fa-star')).toEqual(true)
})

it('displays an empty star by default', () => {
  const wrapper = shallow(<Message text='abc' />).find('.star')
  expect(wrapper.hasClass('fa-star')).toEqual(false)
  expect(wrapper.hasClass('fa-star-o')).toEqual(true)
})
