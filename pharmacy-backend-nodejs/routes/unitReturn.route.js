'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('debug', false);

const UnitReturnModel = mongoose.model('UnitReturn');

const Router = express.Router();


Router.get('/', (req, res) => {
    UnitReturnModel.find().then(function (unitReturns) {
        res.json(unitReturns);
    }).catch(function (err) {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', function (req, res) {
    const unitReturn = new UnitReturnModel (req.body);
    unitReturn.save(function (err, unitReturn) {
        if(err){
            console.error(err);
            res.json({success : false});
        }
        else{
            res.json({success: true});
        }
    }) ;
});

module.exports = Router;