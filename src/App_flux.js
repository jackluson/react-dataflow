import React, { Component } from 'react';
import './App.css';
import Store from './Store/Store.js';
import Visibility from './views/Visibility';
import Counter from './views/Counter';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: Store.get() };
  }
  componentWillMount = () => {
  }
  render() {
    return <div>
        <Visibility />
      </div>;
  }
};


export default App;
