const express = require('express');
const bodyParser = require('body-parser')
const routes = require('./routes')
require('dotenv').config()
require('./database/connection')

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(routes);



module.exports = app;