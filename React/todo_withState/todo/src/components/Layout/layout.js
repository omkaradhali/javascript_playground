import React , { Component } from 'react';
import './layout.css';

import Control from './../Control/control';
import List from './../List/list';

class Layout extends Component {
    constructor(props){
      super(props);
      this.state = {
        inputbox : "",
        doneItem : "",
        todo : [ ]
      }

      this.changedInput = this.changedInput.bind(this);
      this.clickedAddButton = this.clickedAddButton.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.onKeyDown = this.onKeyDown.bind(this);
      this.doneItem = this.doneItem.bind(this);
    }

    changedInput(event){
      event.preventDefault();
      let text = this.state.inputbox;
      text = event.target.value;
      this.setState({inputbox: text});
    }

    clickedAddButton(){  
        let inputbox = this.state.inputbox;
        let todo = this.state.todo;
        let todoItem = {
                        task : inputbox, 
                        _id : 'id-' + Math.random().toString(36).substr(2,16),
                        doneTask : ""
                        };
        todo.push(todoItem);
        this.setState({todo, inputbox : ""});
    }

    removeItem(event) {
        event.preventDefault();
        let todo = this.state.todo.filter(item => item._id !== event.target.dataset.id);
        this.setState({todo});
    }

    doneItem(event){
        event.preventDefault();
        let todo = this.state.todo.map(item => {
          if(item._id === event.target.dataset.id){
              item.doneTask = (item.doneTask) ? "" : "doneTask";
          }
          return item;  
        });
        this.setState({todo});
    }

    onKeyDown(event){
        if (event.key === 'Enter') {
          event.preventDefault();
          this.clickedAddButton();
        }
      }

    render(){
        return(
            <div className = "container">
                <div className="header item">
                    <Control onInputChange = {this.changedInput}
                              onButtonClick = {this.clickedAddButton}
                              inputValue = {this.state.inputbox}
                              onKeyDown = {this.onKeyDown}/>
                </div>
                <div className="content item">
                    <List todos = {this.state.todo} 
                            removeItem = {this.removeItem}
                            doneItem = {this.doneItem}
                            />
                </div>
                <div className="footer">
                    <p>Footer</p>
                </div>    
            </div>
        )
    }
}

export default Layout;