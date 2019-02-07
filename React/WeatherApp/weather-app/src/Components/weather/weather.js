import React, { Component } from 'react';
import "./weather.css";

class Weather extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div className="cityName">
          <span>{this.props.city}</span>
        </div>
        <div className="temperature">
          {this.props.temp && (
            <span>{this.props.temp}&deg;C</span>
          )}
        </div>
        <div className="desc">
          <span>{this.props.description}</span>
        </div>
      </div>
    )
  }
};

export default Weather;