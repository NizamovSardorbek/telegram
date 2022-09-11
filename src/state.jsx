import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title : ""
    };
  }
  render() {
    const plus = () => {
      this.setState({ count: this.state.count + 1 });
    };
    const minus = () => {
      this.setState({ count: this.state.count - 1 });
    };
    const change = (e)=>{
      this.setState({title: e.target.value})
    }
    return (
      <div>
        <button onClick={plus}>+</button>
        <span>Count: {this.state.count} </span>
        <button onClick={minus}>-</button>
        <h1>Title : {this.state.title}</h1>
        <input onChange={change} type="text" />
      </div>
    );
  }
}
