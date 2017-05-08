/**
 * Created by User PC on 5/7/2017.
 */
'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('debug', false);

const PatientsModel = mongoose.model('Patients');

const Router = express.Router();


Router.get('/', (req, res) => {
    PatientsModel.find().then(function (patients) {
        res.json(patients);
    }).catch(function (err) {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    const patients = new PatientsModel(req.body);
    patients.save(function (err,patients) {
        if(err){
            console.error(err);
            res.json({success:false});
        }else{
            res.json({success:true});
        }
    });

});

module.exports = Router;