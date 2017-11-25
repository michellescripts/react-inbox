import React, { Component } from 'react'

class Toolbar extends Component {
  render () {
    return (
      <div>
        <a className='btn btn-danger'>
          <i className='fa fa-plus' />
        </a>

        <button className='btn btn-default'>
          <i className='fa fa-check-square-o' />
        </button>

        <button className='btn btn-default'>
          Mark As Read
        </button>

        <button className='btn btn-default'>
          Mark As Unread
        </button>

        <select className='form-control label-select'>
          <option>Apply label</option>
          <option value='dev'>dev</option>
          <option value='personal'>personal</option>
          <option value='gschool'>gschool</option>
        </select>

        <select className='form-control label-select'>
          <option>Remove label</option>
          <option value='dev'>dev</option>
          <option value='personal'>personal</option>
          <option value='gschool'>gschool</option>
        </select>

        <button className='btn btn-default'>
          <i className='fa fa-trash-o' />
        </button>
      </div>
    )
  }
}

export default Toolbar
