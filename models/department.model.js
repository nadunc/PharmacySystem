'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DepatmentSchema = new Schema({
    deptName: {
        type: String,
        required: true
    },
    authorizedPerson: {
        type: String,
        required: true
    },
   phone: {
        type: String,
        required: true
    },
    requestedDate:{
        type: String,
        ref:'MonthlyRequest'
    },
    issuedDate:{
        type: String,
        ref:'MonthlyRequest'
    }
});

const Department = mongoose.model('Department', DepatmentSchema);

module.exports = Department;