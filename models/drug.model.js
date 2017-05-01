'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DrugSchema = new Schema({
    tradeName: {
        type: String,
        required: true
    },
    className: {
        type: String,
        required: true
    },
    brandName:{
        type: String,
        required: true
    },
    unitType: {
        type: String,
        required: true
    },
    unitWeight: {
        type: Number,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    }
});

const Drug = mongoose.model('Drug', DrugSchema);

module.exports = Drug;