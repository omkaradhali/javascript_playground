import React , { Component } from 'react';
import './control.css';

class Control extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div>
                
                <input type="text" className="customInput" 
                            onChange={this.props.onInputChange}
                            value={this.props.inputValue}
                            onKeyDown={this.props.onKeyDown}></input>
                <button type="submit" className="customButton" onClick={this.props.onButtonClick}>Add</button>
               
                
            
            </div>
        );
    }
}

export default Control;