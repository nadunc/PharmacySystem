'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('debug', false);

const InventoryItemModel = mongoose.model('InventoryItem');

const Router = express.Router();


Router.get('/', (req, res) => {
    InventoryItemModel.find({expiryDate: { $gt: new Date() } }).populate('drug').populate('supplier').exec().then(function (inventoryItems) {
        res.json(inventoryItems);
    }).catch(function (err) {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    const inventoryItem = new InventoryItemModel(req.body);
    inventoryItem.availableQty = inventoryItem.receivedQty;
    inventoryItem.save(function (err,inventoryItem) {
        if(err){
            console.error(err);
            res.json({success:false});
        }else{
            res.json({success:true});
        }
    });

});


Router.get('/expired', function (req, res) {
    InventoryItemModel.find({expiryDate: { $lte: new Date() } }).populate('drug').populate('supplier').exec().then(function (inventoryItems) {
        res.json(inventoryItems);
    }).catch(function (err) {
        console.error(err);
        res.sendStatus(500)
    });
});

Router.get('/expiring/:days', function (req, res) {
    var checkingDate = new Date();
    checkingDate.setTime( checkingDate.getTime() + (req.params.days * 86400000));

    InventoryItemModel.find({expiryDate: { $lte: checkingDate } }).populate('drug').populate('supplier').exec().then(function (inventoryItems) {
        res.json(inventoryItems);
    }).catch(function (err) {
        console.error(err);
        res.sendStatus(500)
    });
});

module.exports = Router;