import React from 'react'
import { shallow } from 'enzyme'
import Message from './Message'

it('renders message subject', () => {
  const subject = 'hi this is a particular message subject'
  const wrapper = shallow(<Message subject={subject} />)
  expect(wrapper.contains(subject)).toEqual(true)
})

it('applies the unread class when the read prop is not true', () => {
  const wrapper = shallow(<Message subject='abc' read={false} />).find('.row .message')
  expect(wrapper.hasClass('unread')).toEqual(true)
})

it('applies the read class when the read prop is true', () => {
  const wrapper = shallow(<Message subject='abc' read />).find('.row .message')
  expect(wrapper.hasClass('read')).toEqual(true)
})

describe('When the message is selected', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Message subject='abc' selected />)
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
    wrapper = shallow(<Message subject='abc' selected={false} />)
  })
  it('does not apply the selected class', () => {
    expect(wrapper.find('.row .message').hasClass('selected')).toEqual(false)
  })
  it('does not check the checkbox', () => {
    expect(wrapper.find('input[type="checkbox"]').prop('checked')).toEqual(undefined)
  })
})

it('fills in the star when starred', () => {
  const wrapper = shallow(<Message subject='abc' starred />)
  expect(wrapper.find('.star').hasClass('fa-star')).toEqual(true)
})

it('displays an empty star by default', () => {
  const wrapper = shallow(<Message subject='abc' />).find('.star')
  expect(wrapper.hasClass('fa-star')).toEqual(false)
  expect(wrapper.hasClass('fa-star-o')).toEqual(true)
})

describe('When labels are added to a message', () => {
  it('displays the text', () => {
    const wrapper = shallow(<Message subject='abc' labels={['dev']} />).find('.label')
    expect(wrapper.text()).toEqual('dev')
  })
  it('displays the correct number of labels', () => {
    const labels = ['dev', 'personal']
    const wrapper = shallow(<Message subject='abc' labels={labels} />).find('.label')
    expect(wrapper.length).toEqual(labels.length)
  })
})

describe('When a message is expanded', () => {
  it('displays the message text', () => {
    const text = 'This is the main text'
    const wrapper = shallow(<Message subject='abc' expanded text={text} />)
    expect(wrapper.find('.message-body').length).toEqual(1)
    expect(wrapper.find('.message-body').text().includes(text)).toEqual(true)
  })
})
