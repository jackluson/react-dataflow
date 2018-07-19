import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppConnected from './App'
import { Provider } from 'react-redux'
import store from './Store/store'
import registerServiceWorker from './registerServiceWorker'
import { add, subtract } from './Store/counter/action.js'
let currentValue = store.getState()
console.log('当前的值:', currentValue)
// 定义一个监听的方法
let listener = () => {
  const previosValue = currentValue
  currentValue = store.getState()
  console.log('上一个值:', previosValue, '当前值:', currentValue)
}
// 创建一个监听
store.subscribe(listener)
// 分发任务
function addIfOdd () {
  return (dispatch, getState) => {
    const currentValue = getState()
    if (currentValue % 2 == 0) {
      return false
    }
    dispatch(add())
  }
}
function addAsy (delay = 2000) {
  return (dispatch, getState) => {
    setInterval(() => {
      dispatch(add())
    }, delay)
  }
}
// 分发任务
store.dispatch(add())
store.dispatch(add())
store.dispatch(add())
store.dispatch(add())
store.dispatch(subtract())
store.dispatch(addIfOdd())
store.dispatch(addAsy())
const render = Component => {
  ReactDOM.render( // 绑定redux、热加载
    <Provider store={store}>
      <Component />
    </Provider>, document.getElementById('root'))
}
render(AppConnected)
registerServiceWorker()
