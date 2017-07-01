'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('debug', false);

const PrescriptionModel = mongoose.model('Prescription');

const Router = express.Router();



Router.get('/', (req, res) => {
    PrescriptionModel.find().then(function (prescriptions) {
        res.json(prescriptions);
    }).catch(function (err) {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    const prescription = new PrescriptionModel(req.body);
    prescription.save(function (err,prescription) {
        if(err){
            console.error(err);
            res.json({success:false});
        }else{
            res.json({success:true});
        }
    });

});

module.exports = Router;

