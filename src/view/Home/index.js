import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  componentDidMount(){
    console.log(this.props, "props");
  }
  handleAdd(){
    this.props.dispatch({
      type: "ADD",
      msg: '加加'
    })
  }
  handleBlus(){
    this.props.dispatch({
      type: 'BLUS',
      msg: '减减'
    })
  }
  render() {
    return (
      <div>
        我是Home
        <button onClick={()=>this.handleAdd()}>++</button>
        <button onClick={()=>this.handleBlus()}>--</button>
        <h3>
        {"num值为: " + this.props.getNum}
        </h3>
      </div>
    )
  }
}
export default connect((state)=>{
  return state
}
// ,(dispatch) => {
//   return {
//       AA() {
//           dispatch({
//               type: "BB",
//               text: 1
//           })
//       }
//   }
// }
)(Home);