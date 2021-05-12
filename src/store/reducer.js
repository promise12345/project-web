// redux-actions框架提供了两个常用的API函数
// createAction() 创建actions
// handleActions() 代替reducer中switch或if else
import initState from './state'
import { ADD_TODO, BLUS_TODO } from './actionTypes'

export const getNum = (state=initState.num, action) => {
  switch(action.type){
    case ADD_TODO: return ++state;
    case BLUS_TODO: return --state;
    default: return state
  }
}