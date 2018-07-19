import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { changeVisibility } from '../Store/counter/action.js'
class Visibility extends Component {
  // static propTypes = {
  //   changeVisibility:PropTypes.func.isRequired,
  // };
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <button onClick={() => this.props.changeVisibility(true)}>
          Visible
        </button>
        <button onClick={() => this.props.changeVisibility(false)}>
          Hidden
        </button>
      </div>
    )
  }
}

const VisibilityConnected = connect(
  null,
  {
  changeVisibility}
)(Visibility)

export default VisibilityConnected
