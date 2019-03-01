const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

let app = express();

//Handlebars.
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

//Setting handlebars.
app.set('view engine', 'hbs');

//Middlewares.
app.use((req, res, next) => {
  let now = new Date().toString();
  let log = `${now} : ${req.method} ${req.url}`;
  fs.appendFile('server.log' , log + '\n', (err) => {
    if(err){
      console.log('Unable to append to server.log');
    }
  })
  console.log(`${now} : ${req.method} ${req.url}`);
  next();
});

//Maintenace page (middleware to halt everything else.)
// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

//Routes.
app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to the website',
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
  });
});

app.listen(3000);