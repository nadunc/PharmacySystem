'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UnitReturnSchema = new Schema({
    requestId: {
        type: String
        // ref : 'MonthlyRequest'
    },
    description: {
        type: String,
        ref: 'DrugSchema'
    },
    department: {
        type: Schema.ObjectId,
        ref: 'Department',
        required: true
    },
    date: {
        type: String,
        required: String
    }
});

const UnitReturn = mongoose.model('UnitReturn', UnitReturnSchema);

module.exports = UnitReturn;
