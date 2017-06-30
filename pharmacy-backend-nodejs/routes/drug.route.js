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

Router.get('/:drugId', (req, res) => {
    DrugModel.findOne({_id:req.params.drugId}).then(function (drug) {
        res.json(drug);
    }).catch(function (err) {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    const drug = new DrugModel(req.body);
    drug.save(function (err,drug) {
        if(err){
            console.error(err);
            res.json({success:false});
        }else{
            res.json({success:true});
        }
    });

    // drug.save().then(function (drug) {
    //     res.json(drug);
    // }).catch(function (err) {
    //     console.error(err);
    //     res.sendStatus(500);
    // });
});


Router.put('/', function (req,res) {
    var drug = req.body;
    DrugModel.update(drug).then(function (drug) {
        res.json(drug);
    })
});

module.exports = Router;