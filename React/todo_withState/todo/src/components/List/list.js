import React, { Component } from 'react';

class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            strikeThrough : false
        }

        // this.itemClicked = this.itemClicked.bind(this);
    }

    // itemClicked(event) {
    //     this.setState({strikeThrough : !this.state.strikeThrough});
    // }
    render(){
        return(
            <ul>
                {this.props.todos.map(item => {
                return <li key={item} 
                            onClick={this.itemClicked}
                            // style={{
                            //     textDecoration: this.state.strikeThrough ? 'line-through' : 'none',
                            //   }}
                              >{item}</li>
                })}
            </ul>
        )
    }
}

export default List;