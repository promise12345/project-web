// reducer 就是一个纯函数，接收旧的 state 和 action
import { createStore,  combineReducers } from 'redux'
import * as fn from './reducer'


export const store=createStore(combineReducers(fn))