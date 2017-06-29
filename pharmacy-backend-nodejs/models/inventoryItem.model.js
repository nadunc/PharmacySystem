'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InventoryItemSchema = new Schema({
    drug: {
        type: Schema.Types.ObjectId,
        ref: 'Drug'
    },
    supplier: {
        type: Schema.Types.ObjectId,
        ref: 'Supplier'
    },
    batchNo: {
        type: Number,
        required: true
    },
    receivedQty: {
        type: Number,
        required: true
    },
    availableQty: {
        type: Number,
        required: true
    },
    manufactureDate: {
        type: Date,
        required: true
    },
    expiryDate: {
        type: Date,
        required: true
    },
    buyingDate: {
        type: Date,
        required: true
    },
    buyingPrice:{
        type: Number,
        required: true
    }
});

const InventoryItem = mongoose.model('InventoryItem', InventoryItemSchema);

module.exports = InventoryItem;