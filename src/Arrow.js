import React, { Component } from 'react';

class Arrow extends Component{
    render(){
        console.log(
            "test", this.props.pointDirection
        )
        return(
            <img src="pointer.png" style={{tranform:`rotate(${this.props.pointDirection}deg)`}} />
        );
    }
}
export default Arrow