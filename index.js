/**
 * Greißlomat Web-Site
 * 
 * (C) 2019 Ralph Eichelberger
 */
const express = require("express");
const path = require('path');
const favicon = require('serve-favicon');
const app = express();
app.use(require("cors")());
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/static'));

app.use(favicon(path.join(__dirname, 'static', 'favicon.ico')));




app.use('/agb', function (req, res) {
    res.render('agb')
});
app.use('/impressum', function (req, res) {
    res.render('impressum')
});
app.use('/datenschutz', function (req, res) {
    res.render('datenschutz')
});
app.use('/', function (req, res) {
    res.render('index')
});

app.listen(8080, '0.0.0.0', () => {
    console.log("API listening on port 8080");
});