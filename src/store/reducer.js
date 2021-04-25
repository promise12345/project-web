import initState from './state'

export const getNum = (state=initState.num, action) => {
  switch(action.type){
    case 'ADD': return ++state;
    case 'BLUS': return --state;
    default: return state
  }
}