'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('debug', false);

const DrugModel = mongoose.model('Drug');

const Router = express.Router();


Router.get('/', (req, res) => {
    DrugModel.find().then(function (drugs) {
        res.json(drugs);
    }).catch(function (err) {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    const drug = new DrugModel(req.body);
    drug.save().then(function (drug) {
        res.json(drug);
    }).catch(function (err) {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = Router;