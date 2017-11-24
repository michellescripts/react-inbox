import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Message extends Component {
  static propTypes = {
    read: PropTypes.boolean,
    selected: PropTypes.boolean,
    starred: PropTypes.boolean,
    text: PropTypes.string.isRequired
  }

  render () {
    return (
      <div class="row message read">
        <div class="col-xs-1">
          <div class="row">
            <div class="col-xs-2">
              <input type="checkbox" />
            </div>
            <div class="col-xs-2">
              <i class="star fa fa-star-o"></i>
            </div>
          </div>
        </div>
        <div class="col-xs-11">
          <a>
            {this.props.text}
          </a>
        </div>
      </div>
    )
  }
}


export default Message
