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
    const handler = jest.fn()
    const wrapper = shallow(<Toolbar onComposeClicked={handler} />).find('.btn-danger')
    wrapper.simulate('click')
    expect(handler).toBeCalled()
  })
})

describe('The select button', () => {
  it('displays a checked checkbox when all messages are selected', () => {
    const wrapper = shallow(<Toolbar select='all' />)
    expect(wrapper.find('#selectButton > i').hasClass('fa-check-square-o')).toEqual(true)
  })
  it('displays a dashed checkbox when some messages are selected', () => {
    const wrapper = shallow(<Toolbar select='some' />)
    expect(wrapper.find('#selectButton > i').hasClass('fa-minus-square-o')).toEqual(true)
  })
  it('displays an empty checkbox when no messages are selected', () => {
    const wrapper = shallow(<Toolbar select='none' />)
    expect(wrapper.find('#selectButton > i').hasClass('fa-square-o')).toEqual(true)
  })
})

describe('The select button', () => {
  it('calls the handler when clicked', () => {
    const handler = jest.fn()
    const wrapper = shallow(<Toolbar onSelectClicked={handler} />).find('#selectButton')
    wrapper.simulate('click')
    expect(handler).toBeCalled()
  })
})

describe('The handle label buttons', () => {
  it('calls the handle function on change', () => {
    const handler = jest.fn()
    const wrapper = shallow(<Toolbar onApplyLabel={handler} />).find('#addLabel')
    wrapper.simulate('change', {target: {value: 'foo', id: 'addLabel'}})
    expect(handler).toBeCalledWith('foo', 'add')
  })
})
