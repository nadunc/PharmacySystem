'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('debug', false);

const InventoryItemModel = mongoose.model('InventoryItem');

const Router = express.Router();


Router.get('/', (req, res) => {
    InventoryItemModel.find().then(function (inventoryItems) {
        res.json(inventoryItems);
    }).catch(function (err) {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    const inventoryItem = new InventoryItemModel(req.body);
    inventoryItem.availableQty = inventoryItem.recievedQty;
    inventoryItem.save(function (err,inventoryItem) {
        if(err){
            console.error(err);
            res.json({success:false});
        }else{
            res.json({success:true});
        }
    });

});

module.exports = Router;