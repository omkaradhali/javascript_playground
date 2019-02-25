require('dotenv').config();
const request = require('request');

const getWeatherFromCity = (city, callback) => {
  return new Promise((resolve, reject) => {
    console.log("Using Promise");
    request({
      url : `https://api.openweathermap.org/data/2.5/find?&units=metric&appid=${process.env.API_ID}&q=${city}`,
      json: true
    }, (error, response, body) => {
      
      if(error){
        reject(`Unable to fetch data for ${city}`)
      } else 
      if(body.cod === "200" && body.message === 'accurate' && body.list.length){
        resolve( `Weather in ${body.list[0].name}\n${body.list[0].weather[0].description} - ${Math.ceil(body.list[0].main.temp)} \u00b0C`);
      } else
      if(body.cod === "400" && body.message === "bad query"){
        reject(`Unable to fetch data for ${city} Please make sure the city name is valid.`)
      } else {
        reject(`Unable to fetch data for ${city}`);
      }
    });
  });
}


module.exports.getWeatherFromCity = getWeatherFromCity;