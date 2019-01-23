import React , { Component } from 'react';
import './layout.css';

import Control from './../Control/control';
import List from './../List/list';

class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputbox : "",
            todo : [ ]
        }

        this.changedInput = this.changedInput.bind(this);
        this.clickedAddButton = this.clickedAddButton.bind(this);
    }

    changedInput(event){
        let text = this.state.inputbox;
        text = event.target.value;
        this.setState({inputbox: text});
    }

    clickedAddButton(){
        let todo = this.state.todo;
        let inputbox = "";
        todo.push(this.state.inputbox);
        this.setState({todo, inputbox});
    }

    render(){
        return(
            <div className = "container">
                <div className="header item">
                    <Control onInputChange = {this.changedInput}
                              onButtonClick = {this.clickedAddButton}
                              inputValue = {this.state.inputbox}/>
                </div>
                <div className="content">
                    <List todos = {this.state.todo} />
                </div>
                <div className="footer">
                    <p>Footer</p>
                </div>    
            </div>
        )
    }
}

export default Layout;