import React, { Component } from 'react';
import "./layout.css";
import Control from "./../control/control";
import axios from 'axios';
import Weather from "./../weather/weather";

class Layout extends Component{
    constructor(props){
        super(props);

        this.state = {
            inputText : "",
            temp: "9",
            description: "Cloudy with a chance of meatballs",
            city:"Baltimore"
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
            axios.get(`https://api.openweathermap.org/data/2.5/find?q=Baltimore&units=metric&appid=e384de364ace2d981267aa5b8cffb792`)
            .then(res => {
                //const persons = res.data;
                console.log(res.data);
            })
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
                    <Weather temp={this.state.temp} 
                                description={this.state.description} 
                                city = {this.state.city}/>
                </div>
            </div>  
        )
    }
}

export default Layout;