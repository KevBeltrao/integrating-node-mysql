const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(bodyParser());
app.use(express.static('./app/static'));

module.exports = app;