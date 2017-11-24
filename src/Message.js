import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Message extends Component {
  static propTypes = {
    read: PropTypes.bool,
    selected: PropTypes.bool,
    starred: PropTypes.bool,
    text: PropTypes.string.isRequired
  }

  renderInput () {
    if (this.props.selected) {
      return (
        <input type="checkbox" checked="checked"/>
      )
    }
    return (<input type="checkbox" />)
  }

  render () {
    let base = 'row message'
    base += this.props.read === true
      ? ' read'
      : ' unread'
    if (this.props.selected) { base += ' selected'}
    return (
      <div className={base}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              {this.renderInput()}
            </div>
            <div className="col-xs-2">
              <i className="star fa fa-star-o"></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          <a>
            {this.props.text}
          </a>
        </div>
      </div>
    )
  }
}


export default Message
