import React, { Component } from 'react';
import Arrow from './Arrow.js';

class OrientationTracker extends Component {
  state = {
    absolute: null,
    alpha: null,
    beta: null,
    gamma: null
  }
  componentWillMount() {
    window.addEventListener("deviceorientation", this.orientaionOutput, true);
  }
  orientaionOutput = ({absolute, alpha, beta, gamma}) => {
    this.setState({
      absolute: absolute,
      alpha: alpha,
      beta: beta,
      gamma: gamma
    })
    console.log(
      `Device orientation detected:
      Absolute  ${absolute}
      Alpha     ${alpha}
      Beta      ${beta}
      Gamma     ${gamma}

      Thank you! =D, lulkaas`
    )
  }
  render() {
    return (
      <React.Fragment>
        <div>{this.state.absolute}</div>
        <div>{this.state.alpha}</div>
        <div>{this.state.beta}</div>
        <div>{this.state.gamma}</div>
        <Arrow pointDirection={this.state.alpha}/>
      </React.Fragment>
    );
  } 
}

export default OrientationTracker