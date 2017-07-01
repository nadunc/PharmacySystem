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

    requestId :{
        type : String,
        required : true
    },

    department: {
        type: Schema.ObjectId,
        ref: 'Department'
    },
    requestedDate: {
        type: String,
        required: String
    },
    issueDate: {
        type: String,
    }
});

const MonthlyRequest = mongoose.model('MonthlyRequest', MonthlyRequestSchema);

module.exports = MonthlyRequest;
