import React, { Component } from "react";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1000,
      message: "",
    };
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Class Component - State</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Change State
        </button>
        <h4>{this.state.count}</h4>
      </div>
    );
  }
}
