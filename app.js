var express = require('express');
var logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

//LOGS REQUESTS TO THE CONSOLE.
app.use(logger('dev')); //Dev stands for the environment which in this case is development

//PARSE INCOMING REQUESTS DATA
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//SETUP A DEFAULT CATCH-ALL ROUTE THAT SENDS BACK A WELCOME MESSAGE IN JSON FORMAT.

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of mothingness.',
}));

//EXPORT THIS MODULE

module.exports = app;
