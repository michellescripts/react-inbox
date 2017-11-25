import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Toolbar extends Component {
  static propTypes = {
    composing: PropTypes.bool,
    onComposeClicked: PropTypes.func,
    select: PropTypes.oneOf(['all', 'some', 'none']),
    onSelectClicked: PropTypes.func,
    onMarkReadClicked: PropTypes.func
  }

  getSelectClass () {
    switch(this.props.select){
      case 'all':
        return 'fa-check-square-o'
      case 'some':
        return  'fa-minus-square-o'
      case 'none':
      default:
        return 'fa-square-o'
    }
  }

  render () {
    let composeButtonClass = 'fa'
    composeButtonClass += !this.props.composing
      ? ' fa-plus'
      : ' fa-times'
    return (
      <div>
        <a className='btn btn-danger' onClick={this.props.onComposeClicked}>
          <i className={composeButtonClass} />
        </a>

        <button className='btn btn-default' id='selectButton' onClick={this.props.onSelectClicked}>
          <i className={'fa ' + this.getSelectClass()}/>
        </button>

        <button className='btn btn-default' onClick={this.props.onMarkReadClicked}>
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
