require('dotenv').config();
const request = require('request');
const yargs = require('yargs');


const argv = yargs.options({
  c: {
    demand: true,
    alias: 'city',
    describe: 'City to fetch weather for',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;

request({
  url : `https://api.openweathermap.org/data/2.5/find?&units=metric&appid=${process.env.API_ID}&q=${argv.city}`,
  json: true
}, (error, response, body) => {
  
  if(error){
    console.log(`Unable to fetch data for ${argv.city}`);
  } else 
  if(body.cod === "200" && body.message === 'accurate'){
    console.log(`Weather in ${body.list[0].name}\n${body.list[0].weather[0].description} - ${Math.ceil(body.list[0].main.temp)} \u00b0C`);
  } else
  if(body.cod === "400" && body.message === "bad query"){
    console.log(`Unable to fetch data for ${argv.city} Please make sure the city name is valid.`)
  } else {
    console.log(`Unable to fetch data for ${argv.city}`);
  }
  
  
})