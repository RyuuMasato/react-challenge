import React, { Component } from 'react';

class Counter extends Component {
  defaultProps = {
    multiplier: 2,
    alert: () => { window.alert('NEE') }
  }
  state = {
    count: 0
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  multiply = () => {
    this.setState({
      count: this.state.count === 0 ? 0 : (this.state.count * this.props.multiplier)
    })
  }
  reset = () => {
    this.setState({
      count: 0
    })
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={this.multiply}>Multiply! {this.multiplier}</button>
        <button onClick={this.increment}>{this.state.count}</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.alert}>Deny!</button>
      </React.Fragment>
    );
  }
}

export default Counter