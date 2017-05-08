'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('debug', false);

const SpecialRequestModel = mongoose.model('SpecialRequest');

const Router = express.Router();


Router.get('/', (req, res) => {
    SpecialRequestModel.find().then(function (specialRequests) {
        res.json(specialRequests);
    }).catch(function (err) {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = Router;