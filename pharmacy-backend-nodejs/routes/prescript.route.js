'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('debug', false);

const PrecriptModel = mongoose.model('Prescription');

const Router = express.Router();


Router.get('/', (req, res) => {
    PrecriptModel.find().then(function (prescripts) {
        res.json(prescripts);
    }).catch(function (err) {
        console.error(err);
        res.sendStatus(500);
    });
});
Router.get('/history', (req, res) => {
    PrecriptModel.find().then(function (prescripts) {
        res.json(prescripts);
    }).catch(function (err) {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    const prescript = new PrecriptModel(req.body);
    prescript.save(function (err,prescript) {
        if(err){
            console.error(err);
            res.json({success:false});
        }else{
            res.json({success:true});
        }
    });

});

module.exports = Router;