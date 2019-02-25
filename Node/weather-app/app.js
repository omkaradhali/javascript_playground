const yargs = require('yargs');
const getWeather = require('./requestWeather/requestWeather');
const getWeatherPromise = require('./requestWeatherWithPromise/requestWeather');

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

getWeather.getWeatherFromCity(argv.city, (errorMessage, results) => {
  if(errorMessage){
    console.log(errorMessage);
  } else {
    console.log(results);
  }
});

getWeatherPromise.getWeatherFromCity(argv.city)
                  .then((message) => console.log(message))
                  .catch((error) => console.log(error));