import React, { Component } from 'react';

class Arrow extends Component{
    render(){
        console.log(
            "test", this.props.pointDirection
        )
        const transform = this.props.pointDirection ? `rotate(${Math.floor(this.props.pointDirection)}deg)` : "rotate(0deg)";
        return(
            <img src="pointer.png" style={{transform}} />
        );
    }
}
export default Arrow