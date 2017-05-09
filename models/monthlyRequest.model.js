'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MonthlyRequestSchema = new Schema({
    inventoryItems: [{
        item: {
            type: Schema.Types.ObjectId,
            ref: 'InventoryItem'
        }, qty: {
            type: Number,
            required: true
        }
    }],

    department: {
        type: Schema.ObjectId,
        ref: 'Department'
    },
    requestedDate: {
        type: Schema.ObjectId,
        required: String
    },
    issuedDate: {
        type: String,
    }
});

const MonthlyRequest = mongoose.model('MonthlyRequest', MonthlyRequestSchema);

module.exports = MonthlyRequest;