import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import './App.css'
// import Store from './Store/Store.js'
import VisibilityConnected from './views/Visibility'
import CounterConnected from './views/Counter'
// const getVisibility = 
function getVisibility (state) {
  console.log(state)
  return state.counter.visible
}
class App extends Component {
  static propTypes = {
    counter: PropTypes.object.isRequired
  };
  render() {
    console.log(this.props.counter.visible)
    return (
      <div>
        <VisibilityConnected />
        {this.props.counter.visible&& <CounterConnected />}
      </div>
    );
  }
}
const AppConnected = connect(
  state => {
    console.log(state)
    return({
    counter: state.counter
  })},
  null
)(App);
export default AppConnected
