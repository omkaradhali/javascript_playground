require('dotenv').config();
const request = require('request');

const getWeatherFromCity = (city, callback) => {
  request({
    url : `https://api.openweathermap.org/data/2.5/find?&units=metric&appid=${process.env.API_ID}&q=${city}`,
    json: true
  }, (error, response, body) => {
    console.log("Using callback");
    if(error){
      callback(`Unable to fetch data for ${city}`, undefined)
    } else 
    if(body.cod === "200" && body.message === 'accurate' && body.list.length){
      callback(undefined, `Weather in ${body.list[0].name}\n${body.list[0].weather[0].description} - ${Math.ceil(body.list[0].main.temp)} \u00b0C`);
    } else
    if(body.cod === "400" && body.message === "bad query"){
      callback(`Unable to fetch data for ${city} Please make sure the city name is valid.`, undefined)
    } else {
      callback(`Unable to fetch data for ${city}`, undefined);
    }
  });
}


module.exports.getWeatherFromCity = getWeatherFromCity;