import React, { Component } from 'react';
import "./control.css";

class Control extends Component{
    render(){
        return(
            <input type="text" className="customInput" 
                    onChange={this.props.onChange}
                    value={this.props.inputValue}
                    onKeyDown={this.props.onKeyDown}></input>
        )
    }
}

export default Control;