import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Message extends Component {
  static propTypes = {
    read: PropTypes.bool,
    selected: PropTypes.bool,
    starred: PropTypes.bool,
    subject: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(PropTypes.string),
    text: PropTypes.string
  }

  constructor () {
    super()
    this.state = {expanded: false}
  }

  renderInput () {
    return this.props.selected
      ? <input type="checkbox" checked="checked"/>
      : <input type="checkbox" />
  }

  renderLabels () {
    if (!this.props.labels || this.props.labels.length === 0) {
        return undefined
    }
    return this.props.labels.map((label, i) => {
      return <span className="label label-warning" key={i}>{label}</span>
    })
  }

  handleClick = () => {
    this.setState({expanded: !this.state.expanded})
  }

  renderText () {
    if (!this.state.expanded) {
      return undefined
    }
    return (
      <div className="row message-body">
        <div className="col-xs-11 col-xs-offset-1">
          {this.props.text}
        </div>
      </div>
    )
  }

  render () {
    let base = 'row message'
    base += this.props.read === true
      ? ' read'
      : ' unread'
    if (this.props.selected) { base += ' selected'}
    let star = 'star fa'
    star += this.props.starred === true
      ? ' fa-star'
      : ' fa-star-o'
    return (
      <div>
        <div className={base}>
          <div className="col-xs-1">
            <div className="row">
              <div className="col-xs-2">
                {this.renderInput()}
              </div>
              <div className="col-xs-2">
                <i className={star}></i>
              </div>
            </div>
          </div>
          <div className="col-xs-11">
            {this.renderLabels()}
            <a onClick={this.handleClick}>
              {this.props.subject}
            </a>
          </div>
        </div>
      {this.renderText()}
    </div>
    )
  }
}


export default Message
