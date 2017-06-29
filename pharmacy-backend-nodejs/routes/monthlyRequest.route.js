'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('debug', false);

const MonthlyRequestModel = mongoose.model('MonthlyRequest');

const Router = express.Router();


Router.get('/', (req, res) => {
    MonthlyRequestModel.find().then(function (monthlyRequests) {
        res.json(monthlyRequests);
    }).catch(function (err) {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = Router;