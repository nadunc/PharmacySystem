'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('debug', false);

const DepartmentModel = mongoose.model('Department');

const Router = express.Router();

Router.get('/', function (req, res) {
    DepartmentModel.find().then(function (depatments) {
        res.json(depatments);
    }).catch(function (err) {
        res.sendStatus(500);
    });

    // res.json(departments);
});

Router.post('/', (req, res) => {
    const department = new DepartmentModel(req.body);

    department.save(function (err,department) {
        if(err){
            console.error(err);
            res.json({success:false});
        }else{
            res.json({success:true});
        }
    });

});

module.exports = Router;
