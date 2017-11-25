import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Toolbar extends Component {
  static propTypes = {
    composing: PropTypes.bool,
    onComposeClicked: PropTypes.func,
    select: PropTypes.oneOf(['all', 'some', 'none']),
    onSelectClicked: PropTypes.func,
    onMarkReadClicked: PropTypes.func,
    onMarkUnreadClicked: PropTypes.func,
    onApplyLabel: PropTypes.func
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

  handleLabel = (e) => {
    if (e.target.value === 'Apply label' || e.target.value === 'Remove label') {
        return
    }
    const mode = e.target.id === 'addLabel' ? 'add' : 'remove'
    this.props.onApplyLabel(e.target.value, mode)
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

        <button className='btn btn-default' onClick={this.props.onMarkUnreadClicked}>
          Mark As Unread
        </button>

        <select className='form-control label-select' id='addLabel' onChange={this.handleLabel}>
          <option>Apply label</option>
          <option value='dev'>dev</option>
          <option value='personal'>personal</option>
          <option value='gschool'>gschool</option>
        </select>

        <select className='form-control label-select' id='removeLabel' onChange={this.handleLabel}>
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
