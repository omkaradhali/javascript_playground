import React , { Component } from 'react';
import './control.css';

class Control extends Component {
    render() {
        return(
            <div className="controlContainer">
                <input type="text" className="customInput" 
                        onChange={this.props.onInputChange}
                        value={this.props.inputValue}></input>
                <button onClick={this.props.onButtonClick}>Add</button>
            </div>
        );
    }
}

export default Control;