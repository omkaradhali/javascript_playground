import React, { Component } from 'react';
import "./layout.css";
import Control from "./../control/control";

class Layout extends Component{
    constructor(props){
        super(props);

        this.state = {
            inputText : "",
        }

        this.onChange = this.onChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onChange(event){
        let inputText = event.target.value;
        this.setState({inputText});
    }

    onKeyDown(event){
        if (event.key === 'Enter') {
            event.preventDefault();
            let location = this.state.inputText;
            
            //need to make an api call from here.

            this.setState({inputText: ""});
        }
    }


    render(){
        return(
            <div className="container">
                <div className="cityInput">
                    <Control onChange = {this.onChange}
                                inputValue = {this.state.inputText}
                                onKeyDown = {this.onKeyDown}
                    />
                </div>
            </div>  
        )
    }
}

export default Layout;