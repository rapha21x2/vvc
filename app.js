
const express = require('express');
const path = require('path');
const routes = require('./routes/index');
var engines = require('consolidate');
const app = express();
const bodyParser = require('body-parser');

app.engine('pug', engines.pug);

app.engine('ejs', engines.ejs);



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

app.use(express.static('public'));




module.exports = app;