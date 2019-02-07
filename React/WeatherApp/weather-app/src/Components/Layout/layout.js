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
            temp: "",
            weather: "",
            description: "",
            city:""
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
            axios.get('https://api.openweathermap.org/data/2.5/find?&units=metric&appid=e384de364ace2d981267aa5b8cffb792&q=' + location)
            .then(res => {
                let data = res.data;
                
                let temp = Math.ceil(data.list[0].main.temp);
                let city = data.list[0].name;
                let desc = data.list[0].weather[0].description;
                let description = desc.charAt(0).toUpperCase() + desc.slice(1);
                let weather = data.list[0].weather[0].main;
                this.setState({city,temp,description,weather});
                
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
                                city = {this.state.city}
                                weather = {this.state.weather}/>
                </div>
            </div>  
        )
    }
}

export default Layout;