/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'
import {connect}  from 'react-redux'
//({ value, onIncrement, onDecrement, onIncrementAsync }) =>
class Counter extends Component {
constructor(props) {
    super(props);
    this.state = {textValue:''};
  }

render(){
  return(
  <div>
  
    <input type="text" value={this.state.textValue} onChange={()=> this.setState({textValue: event.target.value})}  /> 
    {' '}
    <button onClick={()=>this.props.dispatch({ type: 'APPLY_CHANGES',text:this.state.textValue})}>
      Apply changes
    </button>
    {' '} 
    <button onClick={()=>this.props.dispatch({ type: 'DECREMENT_ASYNC'})}>
      Decrement after 1 second
    </button>
    {' '}    
    <button onClick={()=>this.props.dispatch({ type: 'INCREMENT_ASYNC'})}>
      Increment after 1 second
    </button>
    {' '}
    <button onClick={()=>this.props.dispatch({ type: 'INCREMENT'})}>
      Increment
    </button>
    {' '}
    <button onClick={()=>this.props.dispatch({ type: 'DECREMENT'})}>
      Decrement
    </button>
    <hr />
    <div>
      Clicked: {this.props.counter} times
    </div>
  </div>)
}
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter,
  };
};



export default connect(
  mapStateToProps
)(Counter);
