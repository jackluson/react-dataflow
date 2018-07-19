import React, { Component} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { add, subtract } from "../Store/counter/action.js";
class Counter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired
  };
  render() {
    return (
      <div>
        <p>Value: {this.props.value}</p>
        <button onClick={this.props.add}>Add</button>
        <button onClick={this.props.subtract}>Subtract</button>
      </div>
    );
  }
}
const getCounterValue = state => state.counter;
const CounterConnected = connect(
  state => ({
    value: state.counter.value
  }),
  {
    add,
    subtract
  }
)(Counter);

export default CounterConnected;
