import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppConnected from "./App";
import { Provider } from "react-redux";
import store from './Store/store'
import registerServiceWorker from './registerServiceWorker';

const render = Component => {
  ReactDOM.render(//绑定redux、热加载
    <Provider store={store}>
      <Component />
    </Provider>, document.getElementById("root"));
};
render(AppConnected);
registerServiceWorker();
