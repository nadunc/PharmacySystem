'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('debug', false);

const SupplierModel = mongoose.model('Supplier');

const Router = express.Router();


Router.get('/', (req, res) => {
    SupplierModel.find().then(function (suppliers) {
        res.json(suppliers);
    }).catch(function (err) {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    const supplier = new SupplierModel(req.body);
    supplier.save(function (err,supplier) {
        if(err){
            console.error(err);
            res.json({success:false});
        }else{
            res.json({success:true});
        }
    });

});

module.exports = Router;