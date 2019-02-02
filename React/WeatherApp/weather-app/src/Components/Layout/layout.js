import React, { Component } from 'react';
import "./layout.css";

class Layout extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
                <div className="cityInput">
                    <p>layout</p>
                </div>
            </div>  
        )
    }
}

export default Layout;