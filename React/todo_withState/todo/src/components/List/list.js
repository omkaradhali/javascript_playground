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
                        <div key={item._id} className="paper" onClick={this.props.removeItem}
                            data-id={item._id}>

                            {item.task}
                        </div>
                    )
                    })}
                
            </div>
            
        )
    }
}

export default List;