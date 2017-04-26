'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use('/app', express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    //res.sendFile(__dirname + '/public/index.html');
    res.redirect('/app');
});

app.get('/app', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/app/starter', (req, res) => {
    res.sendFile(__dirname + '/public/starter.html');
});




app.listen(3000, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('app listening on port 3000');
});