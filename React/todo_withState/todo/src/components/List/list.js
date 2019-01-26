import React, { Component } from 'react';
import './list.css';

class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            strikeThrough : false
        }

        this.itemClicked = this.itemClicked.bind(this);
    }

    itemClicked(event) {
        console.log(event.target.dataset.id);
    }
    render(){
        return(
            <div className = "contentContainer">
                
                    {this.props.todos.map(item => {
                    return (
                        <div key={item._id} className="paper"  >
                                <p className={`itemWidth ${item.doneTask}`} 
                                        onClick={this.props.doneItem} 
                                        data-id={item._id}>

                                        {item.task}

                                </p>
                                <span data-id={item._id} className="deleteItem" onClick={this.props.removeItem}>DEL</span>
                        </div>
                    )
                    })}
                
            </div>
            
        )
    }
}

export default List;