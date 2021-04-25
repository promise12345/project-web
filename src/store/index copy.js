// reducer 就是一个纯函数，接收旧的 state 和 action
import { createStore,  combineReducers } from 'redux'
import { connect, Provider } from 'react-redux'
import * as fn from './reducer'
import App from '../App'
import ReactDOM from 'react-dom'

// // 映射store的state为组件的props
// //state == store.getState().getNum
// function mapStateToProps(state, props){
//   return {
//     num: state // props.num == store共享的数据state
//   }
// }
// // 映射store的dispatch为组件的props
// // dispatch == store.dispatch
// function mapDispatchToProps(dispatch, props){
//   return {
//     getNum: function(){
//       dispatch({
//         type: 'ADD',
//         params: {
//           msg: '加加',
//           num: 1
//         }
//       })
//     }
//   }
// }
// 将state和dispatch整合到Love组件，让Provider下的所有子组件都可props访问store的state
// const Love = connect(mapStateToProps, mapDispatchToProps)(App)
// const NewApp = connect(mapStateToProps, mapDispatchToProps)(Love) // // 高阶组件
// class App extends Component{
//   render(){
//     return <Provider store={store}><Love /></Provider>
//   }
// }
export const store=createStore(combineReducers(fn))
store.subscribe(function(){
  ReactDOM.render(<App />, document.getElementById('root'))
})