/**
 * Created by User PC on 5/7/2017.
 */
'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('debug', false);

const PatientModel = mongoose.model('Patient');

const Router = express.Router();


Router.get('/', (req, res) => {
    PatientModel.find().then(function (patients) {
        res.json(patients);
    }).catch(function (err) {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/:nic', (req, res) => {
    var nic = req.params.nic;

    PatientModel.findOne({nic:nic}).then(function (patients) {
        res.json(patients);
    }).catch(function (err) {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    const patient = new PatientModel(req.body);
    patient.save(function (err,patient) {
        if(err){
            console.error(err);
            res.json({success:false});
        }else{
            res.json({success:true});
        }
    });

});
Router.put('/', function (req, res) {
    var patient = req.body;

    PatientModel.update({nic:patient.nic}, {$set:patient}, function (err, response) {
        res.json(response);
    })

});

module.exports = Router;