'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('debug', false);

const BillModel = mongoose.model('Bill');

const Router = express.Router();



Router.get('/', (req, res) => {
    BillModel.find().then(function (bills) {
        res.json(bills);
    }).catch(function (err) {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    const bill = new BillModel(req.body);
    bill.save(function (err,bill) {
        if(err){
            console.error(err);
            res.json({success:false});
        }else{
            res.json({success:true});
        }
    });

});

module.exports = Router;

