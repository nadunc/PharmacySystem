'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('debug', false);

const MonthlyRequestModel = mongoose.model('MonthlyRequest');

const Router = express.Router();


Router.get('/', (req, res) => {
    MonthlyRequestModel.find().populate('department').exec().then(function (monthlyRequests) {
        res.json(monthlyRequests);
    }).catch(function (err) {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', function (req, res) {
    const request = new MonthlyRequestModel(req.body);
    request.save(function (err, request) {
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
